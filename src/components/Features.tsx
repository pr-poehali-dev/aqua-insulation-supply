import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

export default function Features() {
  const features = [
    {
      icon: 'Package',
      title: 'Широкий ассортимент',
      description: 'PIR-плиты, минвата, XPS, пенофол и сопутствующие материалы от ведущих брендов',
      image: 'https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/960729f6-5b09-42da-93c8-75211f39f3ad.jpg',
    },
    {
      icon: 'Calculator',
      title: 'Консультация и расчет',
      description: 'Помогаем подобрать оптимальные материалы и рассчитать необходимое количество',
    },
    {
      icon: 'Truck',
      title: 'Доставка на объект',
      description: 'Оперативная доставка по СПб и Ленинградской области собственным транспортом',
      image: 'https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/f842b562-e73c-4120-b8cb-39786b53db85.jpg',
    },
    {
      icon: 'Clock',
      title: 'Работаем с 2010 года',
      description: 'Надежный поставщик для строительных компаний и частных застройщиков',
      image: 'https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/34e24869-604c-4d62-84bd-10a5c44f41d6.jpg',
    },
  ];

  return (
    <section id="features" className="relative py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.02] bg-cover bg-center"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/454349fc-24fb-4821-a839-f87eed21e91c.jpg)' }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Профессиональный подход к каждому клиенту и высокое качество материалов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              {feature.image ? (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : null}
              <div className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-accent/10">
                  <Icon name={feature.icon} className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}