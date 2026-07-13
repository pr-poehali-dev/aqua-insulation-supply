import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { MonoLabel, CornerRegs } from './PatternDecor';

const CONTACTS = [
  { icon: 'Phone', label: 'Телефон', value: '+7 (000) 000-00-00', href: 'tel:+70000000000' },
  { icon: 'Mail', label: 'Email', value: 'info@panzir.ru', href: 'mailto:info@panzir.ru' },
  { icon: 'MapPin', label: 'Адрес', value: 'Санкт-Петербург', href: '#' },
];

const Contacts = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', phone: '', comment: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: 'Заполните имя и телефон', variant: 'destructive' });
      return;
    }
    toast({ title: 'Заявка отправлена', description: 'Мы свяжемся с вами для замера.' });
    setForm({ name: '', phone: '', comment: '' });
  };

  return (
    <section id="contacts" className="relative bg-bg py-24 md:py-36">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Призыв + контакты */}
          <div>
            <MonoLabel>Контакты</MonoLabel>
            <h2 className="mt-6 font-display text-3xl font-medium leading-snug text-ink">
              Готовы снять мерки с вашего оборудования?
            </h2>

            <div className="mt-10 space-y-5">
              {CONTACTS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 text-ink transition-colors hover:text-brass"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-border/60 bg-surface">
                    <Icon name={c.icon} size={20} className="text-brass" />
                  </span>
                  <span>
                    <span className="label-mono block text-[10px] text-steel">
                      {c.label}
                    </span>
                    <span className="font-mono text-base">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Форма */}
          <div className="relative rounded-sm border border-border/60 bg-surface p-8">
            <CornerRegs />
            <h3 className="font-display text-2xl font-medium text-ink">
              Заявка на замер
            </h3>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="label-mono text-[10px] text-steel">Имя</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5 w-full rounded-sm border border-border/60 bg-bg-alt px-4 py-3 text-ink placeholder:text-steel/50 focus:border-brass focus:outline-none"
                  placeholder="Как к вам обращаться"
                />
              </div>
              <div>
                <label className="label-mono text-[10px] text-steel">Телефон</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1.5 w-full rounded-sm border border-border/60 bg-bg-alt px-4 py-3 text-ink placeholder:text-steel/50 focus:border-brass focus:outline-none"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="label-mono text-[10px] text-steel">Комментарий</label>
                <textarea
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  rows={3}
                  className="mt-1.5 w-full resize-none rounded-sm border border-border/60 bg-bg-alt px-4 py-3 text-ink placeholder:text-steel/50 focus:border-brass focus:outline-none"
                  placeholder="Опишите объект и задачу"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-sm bg-garnet px-6 py-4 text-base font-medium text-ink transition-colors hover:bg-garnet-bright"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;