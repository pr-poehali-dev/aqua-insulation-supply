import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

const FIELDS = [
  { name: 'name', label: 'Имя', type: 'text', placeholder: 'Как к вам обращаться' },
  { name: 'phone', label: 'Телефон', type: 'tel', placeholder: '+7 (___) ___-__-__' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.ru' },
] as const;

const inputClass =
  'w-full rounded-sm border border-white/12 bg-black/25 px-4 py-3.5 font-sans text-[15px] text-ink placeholder:text-steel/60 outline-none transition-colors duration-300 focus:border-brass/50 focus:bg-black/35';

const LEAD_URL = 'https://functions.poehali.dev/1b08d722-f3e4-4edc-9fc9-ae8179afabfb';

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed || loading) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    setLoading(true);

    try {
      const res = await fetch(LEAD_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          email: data.get('email'),
          message: data.get('message'),
        }),
      });

      if (!res.ok) throw new Error('failed');

      setSent(true);
      toast({
        title: 'Заявка отправлена',
        description: 'Мы свяжемся с вами в рабочее время.',
      });
      form.reset();
      setAgreed(false);
      setTimeout(() => setSent(false), 4000);
    } catch {
      toast({
        title: 'Не удалось отправить заявку',
        description: 'Позвоните нам: 8 (800) 700-84-81',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col rounded-sm border border-white/12 p-7 shadow-lg shadow-black/20 md:p-8"
      style={{ backgroundColor: '#111f35' }}
    >
      <div className="space-y-5">
        {FIELDS.map((f) => (
          <div key={f.name}>
            <label
              htmlFor={f.name}
              className="label-mono mb-2 block text-[10px] text-steel"
            >
              {f.label}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required={f.name !== 'email'}
              placeholder={f.placeholder}
              className={inputClass}
            />
          </div>
        ))}

        <div>
          <label
            htmlFor="message"
            className="label-mono mb-2 block text-[10px] text-steel"
          >
            Сообщение
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Опишите объект, оборудование, температуры"
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      <div className="flex-1" />

      <label className="mt-6 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="peer sr-only"
        />
        <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[3px] border border-white/25 bg-black/25 transition-colors peer-checked:border-brass peer-checked:bg-brass/20 peer-focus-visible:ring-2 peer-focus-visible:ring-brass/40">
          {agreed && <Icon name="Check" size={13} className="text-brass" />}
        </span>
        <span className="text-[13px] leading-relaxed text-ink-muted">
          Я согласен с{' '}
          <Link
            to="/privacy"
            target="_blank"
            className="text-brass-soft underline underline-offset-2 transition-colors hover:text-white"
          >
            Политикой конфиденциальности
          </Link>{' '}
          и{' '}
          <Link
            to="/personal-data"
            target="_blank"
            className="text-brass-soft underline underline-offset-2 transition-colors hover:text-white"
          >
            Политикой обработки персональных данных
          </Link>
        </span>
      </label>

      <button
        type="submit"
        disabled={sent || loading || !agreed}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brass/40 bg-brass/15 px-6 py-4 text-sm font-medium text-brass-soft transition-colors duration-300 hover:bg-brass/25 hover:text-white disabled:cursor-not-allowed disabled:border-white/12 disabled:bg-white/5 disabled:text-steel/60 disabled:hover:bg-white/5"
      >
        <Icon
          name={sent ? 'Check' : loading ? 'Loader2' : 'Send'}
          size={16}
          className={loading ? 'animate-spin' : ''}
        />
        {sent ? 'Заявка отправлена' : loading ? 'Отправляем…' : 'Отправить заявку'}
      </button>
    </form>
  );
};

export default ContactForm;