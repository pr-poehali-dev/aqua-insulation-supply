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
    <section id="hero" className="relative text-white py-20 md:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/c3967e3f-84ff-4467-b410-306de7ba366f.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-orange-800/70 to-yellow-800/60" />
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
              className="bg-white text-brand-orange hover:bg-white/90 font-bold shadow-lg"
            >
              <Icon name="Package" className="mr-2 h-5 w-5" />
              Каталог продукции
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContacts}
              className="bg-transparent text-white hover:bg-white/15 border-white border-2"
            >
              <Icon name="MessageSquare" className="mr-2 h-5 w-5" />
              Оставить заявку
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            <div className="flex items-center gap-3">
              <Icon name="Truck" className="h-8 w-8 text-white/90" />
              <div>
                <p className="text-sm font-light text-white/70">Доставка</p>
                <p className="font-semibold">по всей России</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Factory" className="h-8 w-8 text-white/90" />
              <div>
                <p className="text-sm font-light text-white/70">Производство</p>
                <p className="font-semibold">чехлов на заказ</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="ShieldCheck" className="h-8 w-8 text-white/90" />
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