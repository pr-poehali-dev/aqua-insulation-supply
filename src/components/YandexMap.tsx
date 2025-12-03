import { Card } from '@/components/ui/card';

export default function YandexMap() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как нас найти</h2>
          <p className="text-muted-foreground">
            БЦ "М-46" на Московском шоссе, 46
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae8c4a3f8c1b2d9f7a5e6c4d8b9a7f5e3&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              title="Карта расположения склада АкваРос СПб"
            />
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Вход в БЦ со стороны Московского шоссе. Парковка для клиентов есть на территории.
          </p>
        </div>
      </div>
    </section>
  );
}
