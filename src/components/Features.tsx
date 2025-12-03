import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

export default function Features() {
  const features = [
    {
      icon: 'Package',
      title: 'Широкий ассортимент',
      description: 'PIR-плиты, минвата, XPS, пенофол и сопутствующие материалы от ведущих брендов',
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
    },
    {
      icon: 'Clock',
      title: 'Работаем с 2010 года',
      description: 'Надежный поставщик для строительных компаний и частных застройщиков',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Профессиональный подход к каждому клиенту и высокое качество материалов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
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
