import json
import os
import re
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime, timedelta, timezone
from email.utils import formataddr, formatdate

import psycopg2

CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Content-Type': 'application/json',
}

TO_EMAIL = 't1izol@mail.ru'
SITE_NAME = 'протермочехол.рф'


def esc(value: str) -> str:
    return str(value).replace("'", "''")


def html_escape(value: str) -> str:
    return (
        str(value)
        .replace('&', '&amp;')
        .replace('<', '&lt;')
        .replace('>', '&gt;')
    )


def save_lead(name: str, phone: str, email: str, message: str) -> None:
    dsn = os.environ.get('DATABASE_URL')
    if not dsn:
        return
    conn = psycopg2.connect(dsn)
    try:
        with conn.cursor() as cur:
            cur.execute(
                "INSERT INTO leads (name, phone, email, message) "
                f"VALUES ('{esc(name)}', '{esc(phone)}', '{esc(email)}', '{esc(message)}')"
            )
        conn.commit()
    finally:
        conn.close()


def send_mail(name: str, phone: str, email: str, message: str) -> bool:
    host = os.environ.get('SMTP_HOST') or 'smtp.mail.ru'
    user = TO_EMAIL
    password = os.environ.get('SMTP_PASSWORD')
    if not password:
        return False

    port = int(os.environ.get('SMTP_PORT', '465'))
    rows = [
        ('Имя', name),
        ('Телефон', phone),
        ('Email', email or '—'),
        ('Сообщение', message or '—'),
        ('Сайт', SITE_NAME),
        (
            'Дата и время',
            datetime.now(timezone(timedelta(hours=3))).strftime(
                '%d.%m.%Y %H:%M (МСК)'
            ),
        ),
    ]
    html_rows = ''.join(
        f'<tr><td style="padding:8px 16px 8px 0;color:#8FA0AD;'
        f'font-size:13px;vertical-align:top">{k}</td>'
        f'<td style="padding:8px 0;color:#12202E;font-size:15px">'
        f'{html_escape(v)}</td></tr>'
        for k, v in rows
    )
    html = (
        '<div style="font-family:Arial,Helvetica,sans-serif">'
        '<h2 style="color:#12202E;margin:0 0 16px">Заявка с сайта ПАНЦИРЬ</h2>'
        f'<table cellpadding="0" cellspacing="0">{html_rows}</table>'
        '</div>'
    )
    text = '\n'.join(f'{k}: {v}' for k, v in rows)

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Заявка с сайта ПАНЦИРЬ — {name}'
    msg['From'] = formataddr((SITE_NAME, user))
    msg['To'] = TO_EMAIL
    msg['Date'] = formatdate(localtime=True)
    if email:
        msg['Reply-To'] = email
    msg.attach(MIMEText(text, 'plain', 'utf-8'))
    msg.attach(MIMEText(html, 'html', 'utf-8'))

    if port == 465:
        server = smtplib.SMTP_SSL(host, port, timeout=20)
    else:
        server = smtplib.SMTP(host, port, timeout=20)
        server.starttls()
    try:
        server.login(user, password)
        server.sendmail(user, [TO_EMAIL], msg.as_string())
    finally:
        server.quit()
    return True


def handler(event: dict, context) -> dict:
    """Принимает заявку с формы контактов, сохраняет в БД и отправляет на почту отдела продаж."""
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': CORS, 'body': ''}

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': CORS,
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    body = json.loads(event.get('body') or '{}')
    name = str(body.get('name', '')).strip()[:200]
    phone = str(body.get('phone', '')).strip()[:60]
    email = str(body.get('email', '')).strip()[:200]
    message = str(body.get('message', '')).strip()[:4000]

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': CORS,
            'body': json.dumps(
                {'error': 'Укажите имя и телефон'}, ensure_ascii=False
            ),
        }

    if email and not re.match(r'^[^@\s]+@[^@\s]+\.[^@\s]+$', email):
        return {
            'statusCode': 400,
            'headers': CORS,
            'body': json.dumps({'error': 'Некорректный email'}, ensure_ascii=False),
        }

    save_lead(name, phone, email, message)
    mailed = send_mail(name, phone, email, message)

    return {
        'statusCode': 200,
        'headers': CORS,
        'body': json.dumps({'success': True, 'mailed': mailed}),
    }