import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

const FIELDS = [
  { name: 'name', label: 'Имя', type: 'text', placeholder: 'Как к вам обращаться' },
  { name: 'phone', label: 'Телефон', type: 'tel', placeholder: '+7 (___) ___-__-__' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.ru' },
] as const;

const inputClass =
  'w-full rounded-sm border border-white/12 bg-black/25 px-4 py-3.5 font-sans text-[15px] text-ink placeholder:text-steel/60 outline-none transition-colors duration-300 focus:border-brass/50 focus:bg-black/35';

const ContactForm = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами в рабочее время.',
    });
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-white/12 p-7 shadow-lg shadow-black/20 md:p-9"
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

      <button
        type="submit"
        disabled={sent}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-brass/40 bg-brass/15 px-6 py-4 text-sm font-medium text-brass-soft transition-colors duration-300 hover:bg-brass/25 hover:text-white disabled:opacity-60"
      >
        <Icon name={sent ? 'Check' : 'Send'} size={16} />
        {sent ? 'Заявка отправлена' : 'Отправить заявку'}
      </button>

      <p className="label-mono mt-4 text-center text-[9px] leading-relaxed text-steel/70">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
};

export default ContactForm;
