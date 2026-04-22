import Icon from '@/components/ui/icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-gradient text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/bucket/64d54090-93a4-485f-8404-e7719296e908.PNG"
                alt="АкваРос логотип"
                className="w-10 h-10 object-contain brightness-0 invert"
              />
              <div>
                <h3 className="text-lg font-bold">АкваРос СПб</h3>
                <p className="text-sm text-white/70">Теплоизоляция</p>
              </div>
            </div>
            <p className="text-sm text-white/80">
              Качественная теплоизоляция с доставкой по Санкт-Петербургу и ЛО от надежного поставщика
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Phone" className="h-4 w-4 text-white/80" />
                <a href="tel:88007008481" className="hover:text-white transition-colors">
                  8 800 700 84 81
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-4 text-white/80" />
                <a href="mailto:sale@a-ros.ru" className="hover:text-white transition-colors">
                  sale@a-ros.ru
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="MapPin" className="h-4 w-4 text-white/80 mt-0.5" />
                <span className="text-white/80">
                  Московское ш., 46, лит. Б,<br />БЦ "М-46", офис 213Б
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Режим работы</h4>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex justify-between">
                <span>Понедельник - Пятница:</span>
                <span className="font-medium text-white">9:00 - 17:30</span>
              </div>
              <div className="flex justify-between">
                <span>Суббота - Воскресенье:</span>
                <span className="font-medium text-white">Выходной</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
          <p>© {currentYear} ООО "АкваРос СПб". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}