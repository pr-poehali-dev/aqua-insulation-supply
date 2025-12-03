import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCatalog = () => {
    const element = document.getElementById('catalog');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Качественная теплоизоляция для профессионалов
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 animate-fade-in">
            Поставка материалов от ведущих производителей с доставкой по Санкт-Петербургу и ЛО. 
            Собственный склад на Московском шоссе.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Button
              size="lg"
              onClick={scrollToCatalog}
              className="bg-accent hover:bg-accent/90 text-white"
            >
              <Icon name="Package" className="mr-2 h-5 w-5" />
              Каталог продукции
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContacts}
              className="bg-white text-primary hover:bg-white/90 border-white"
            >
              <Icon name="MessageSquare" className="mr-2 h-5 w-5" />
              Оставить заявку
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center gap-3">
              <Icon name="Truck" className="h-8 w-8 text-accent" />
              <div>
                <p className="text-sm font-light text-white/70">Доставка</p>
                <p className="font-semibold">по СПб и ЛО</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Warehouse" className="h-8 w-8 text-accent" />
              <div>
                <p className="text-sm font-light text-white/70">Склад</p>
                <p className="font-semibold">3000+ м²</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="ShieldCheck" className="h-8 w-8 text-accent" />
              <div>
                <p className="text-sm font-light text-white/70">Гарантия</p>
                <p className="font-semibold">качества</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
