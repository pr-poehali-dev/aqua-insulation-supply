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
    <section id="hero" className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-20 md:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/bfd72e86-bf1f-4609-9f78-b632f73becbd.jpg)' }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Изготовление и поставка теплоизоляционных чехлов
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 animate-fade-in">
            Производство теплоизоляционных чехлов и поставка материалов от ведущих производителей по всей России
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
                <p className="font-semibold">по всей России</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Factory" className="h-8 w-8 text-accent" />
              <div>
                <p className="text-sm font-light text-white/70">Производство</p>
                <p className="font-semibold">чехлов на заказ</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="ShieldCheck" className="h-8 w-8 text-accent" />
              <div>
                <p className="text-sm font-light text-white/70">Сертификаты</p>
                <p className="font-semibold">качества</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}