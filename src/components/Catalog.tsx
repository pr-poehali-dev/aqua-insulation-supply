import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface CatalogProps {
  searchQuery: string;
}

export default function Catalog({ searchQuery }: CatalogProps) {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [localSearch, setLocalSearch] = useState('');

  const products = [
    {
      id: 1,
      name: 'PIR-плиты LOGICPIR',
      category: 'PIR-плиты',
      description: 'Универсальная теплоизоляция с высокими показателями энергоэффективности',
      features: ['λ = 0.022 Вт/(м·К)', 'Толщина: 20-150 мм', 'Плотность: 30-40 кг/м³'],
      application: 'Фасады, кровли, фундаменты',
      icon: 'Layers',
    },
    {
      id: 2,
      name: 'Минеральная вата ROCKWOOL',
      category: 'Минеральная вата',
      description: 'Негорючий утеплитель из каменной ваты для различных конструкций',
      features: ['λ = 0.035-0.042 Вт/(м·К)', 'Толщина: 50-200 мм', 'Класс горючести: НГ'],
      application: 'Стены, перегородки, кровли',
      icon: 'Wind',
    },
    {
      id: 3,
      name: 'Пеноплэкс КОМФОРТ',
      category: 'XPS',
      description: 'Экструдированный пенополистирол для теплоизоляции частных домов',
      features: ['λ = 0.032 Вт/(м·К)', 'Толщина: 20-100 мм', 'Прочность: 200 кПа'],
      application: 'Фундаменты, цоколи, полы',
      icon: 'Box',
    },
    {
      id: 4,
      name: 'ТехноНИКОЛЬ XPS',
      category: 'XPS',
      description: 'Плиты экструзионного пенополистирола для промышленного строительства',
      features: ['λ = 0.028-0.030 Вт/(м·К)', 'Толщина: 30-100 мм', 'Водопоглощение: 0.2%'],
      application: 'Нагружаемые конструкции, эксплуатируемые кровли',
      icon: 'Boxes',
    },
    {
      id: 5,
      name: 'Изолон (вспененный PE)',
      category: 'Вспененный полиэтилен',
      description: 'Гибкая тепло- и звукоизоляция с отражающим слоем',
      features: ['λ = 0.035 Вт/(м·К)', 'Толщина: 2-15 мм', 'Отражение тепла: до 97%'],
      application: 'Трубопроводы, полы с подогревом, парозащита',
      icon: 'Waves',
    },
    {
      id: 6,
      name: 'Пенофол',
      category: 'Вспененный полиэтилен',
      description: 'Многослойный материал с фольгированным покрытием',
      features: ['λ = 0.037-0.049 Вт/(м·К)', 'Толщина: 3-10 мм', 'Фольга: одно- или двустороння'],
      application: 'Теплоотражающая изоляция, парозащита',
      icon: 'Shield',
    },
    {
      id: 7,
      name: 'Клеи и крепеж',
      category: 'Сопутствующие материалы',
      description: 'Комплекс материалов для монтажа теплоизоляции',
      features: ['Клей-пена', 'Дюбели тарельчатые', 'Армирующие сетки'],
      application: 'Монтаж всех типов утеплителей',
      icon: 'Wrench',
    },
    {
      id: 8,
      name: 'Мембраны и пленки',
      category: 'Сопутствующие материалы',
      description: 'Паро- и гидроизоляционные материалы',
      features: ['Ветрозащита', 'Пароизоляция', 'Гидрозащита'],
      application: 'Защита конструкций от влаги и ветра',
      icon: 'Droplet',
    },
  ];

  const searchTerm = searchQuery || localSearch;
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="catalog" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Каталог продукции</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Профессиональные теплоизоляционные материалы от ведущих производителей
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Поиск по каталогу..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="p-6 hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 p-4 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon name={product.icon} className="h-12 w-12 text-accent mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{product.category}</p>
                <p className="text-sm text-muted-foreground flex-grow">{product.description}</p>
                <Button variant="link" className="mt-4 p-0 h-auto text-accent">
                  Подробнее <Icon name="ArrowRight" className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Ничего не найдено. Попробуйте изменить запрос.</p>
          </div>
        )}
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProduct.name}</DialogTitle>
                <DialogDescription>{selectedProduct.category}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-foreground">{selectedProduct.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2">Характеристики:</h4>
                  <ul className="space-y-1">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="h-4 w-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Применение:</h4>
                  <p className="text-sm text-muted-foreground">{selectedProduct.application}</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    className="flex-1 bg-accent hover:bg-accent/90"
                    onClick={() => {
                      setSelectedProduct(null);
                      const element = document.getElementById('contacts');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Icon name="MessageSquare" className="mr-2 h-4 w-4" />
                    Запросить цену
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Icon name="FileText" className="mr-2 h-4 w-4" />
                    Скачать тех. карту
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
