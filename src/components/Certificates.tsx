import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Certificates() {
  const certificates = [
    {
      title: 'Сертификат соответствия',
      description: 'Продукция соответствует требованиям ГОСТ и технических регламентов',
      image: 'https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/97360785-2388-4fc0-83cf-c507ece88675.jpg',
    },
    {
      title: 'ISO 9001',
      description: 'Система менеджмента качества сертифицирована по международному стандарту',
      image: 'https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/50bdd34a-b5bc-4182-a3e9-800ce8eabef6.jpg',
    },
    {
      title: 'Пожарная безопасность',
      description: 'Материалы имеют сертификаты пожарной безопасности',
      image: 'https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/42e6e7dd-6c5c-4f84-a2ce-f4b2323347e8.jpg',
    },
  ];

  return (
    <section id="certificates" className="relative py-16 md:py-24 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03] bg-cover bg-center"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/960729f6-5b09-42da-93c8-75211f39f3ad.jpg)' }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-accent/10 rounded-full mb-4">
            <Icon name="Award" className="h-6 w-6 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Сертификаты и лицензии</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Вся наша продукция имеет необходимые сертификаты качества и соответствия
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden bg-gray-50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Icon name="BadgeCheck" className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            По запросу предоставляем копии всех сертификатов и разрешительной документации
          </p>
        </div>
      </div>
    </section>
  );
}
