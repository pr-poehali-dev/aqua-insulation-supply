import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      author: 'Алексей М.',
      company: 'СтройГрупп',
      rating: 5,
      text: 'Работаем с АкваРос уже 3 года. Отличное качество материалов, оперативная доставка и профессиональные консультации. Рекомендуем!',
      date: '2 недели назад',
    },
    {
      id: 2,
      author: 'Мария К.',
      company: 'ДомСтрой',
      rating: 5,
      text: 'Заказывали PIR-плиты для объекта. Помогли с расчётом, привезли точно в срок. Цены адекватные, качество на высоте.',
      date: '1 месяц назад',
    },
    {
      id: 3,
      author: 'Дмитрий С.',
      company: 'Частный застройщик',
      rating: 5,
      text: 'Утеплял дом пеноплексом. Ребята всё подробно объяснили, подобрали нужную толщину. Очень доволен результатом!',
      date: '2 месяца назад',
    },
    {
      id: 4,
      author: 'Игорь В.',
      company: 'ТермоФасад',
      rating: 4,
      text: 'Хорошие материалы, широкий выбор. Иногда бывают задержки с доставкой, но в целом всё отлично. Будем заказывать ещё.',
      date: '3 месяца назад',
    },
  ];

  const averageRating = 4.6;
  const totalReviews = 17;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Icon
                  key={star}
                  name="Star"
                  className={`h-6 w-6 ${
                    star <= Math.round(averageRating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold">{averageRating}</span>
          </div>
          <p className="text-muted-foreground">
            На основе {totalReviews} отзывов из Google
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold">{review.author}</h4>
                  <p className="text-sm text-muted-foreground">{review.company}</p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon
                      key={star}
                      name="Star"
                      className={`h-4 w-4 ${
                        star <= review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-foreground mb-3">{review.text}</p>
              <p className="text-xs text-muted-foreground">{review.date}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <Icon name="ExternalLink" className="h-4 w-4" />
            Все отзывы на Google
          </a>
        </div>
      </div>
    </section>
  );
}
