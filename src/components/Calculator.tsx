import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

export default function Calculator() {
  const [area, setArea] = useState<string>('');
  const [thickness, setThickness] = useState<string>('50');
  const [result, setResult] = useState<{ volume: number; packages: number } | null>(null);

  const materials = [
    { value: '50', label: '50 мм', packageVolume: 0.288 },
    { value: '100', label: '100 мм', packageVolume: 0.144 },
    { value: '150', label: '150 мм', packageVolume: 0.096 },
  ];

  const calculate = () => {
    const areaNum = parseFloat(area);
    if (isNaN(areaNum) || areaNum <= 0) return;

    const thicknessNum = parseInt(thickness);
    const material = materials.find((m) => m.value === thickness);
    if (!material) return;

    const volume = (areaNum * thicknessNum) / 1000;
    const packages = Math.ceil(volume / material.packageVolume);

    setResult({ volume, packages });
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Калькулятор утепления</h2>
            <p className="text-muted-foreground">
              Рассчитайте необходимое количество материала для вашего объекта
            </p>
          </div>

          <Card className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Площадь утепления (м²)
                </label>
                <Input
                  type="number"
                  placeholder="Например: 100"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  min="0"
                  step="0.1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Толщина утеплителя
                </label>
                <Select value={thickness} onValueChange={setThickness}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {materials.map((material) => (
                      <SelectItem key={material.value} value={material.value}>
                        {material.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={calculate}
              className="w-full bg-accent hover:bg-accent/90"
              size="lg"
            >
              <Icon name="Calculator" className="mr-2 h-5 w-5" />
              Рассчитать количество
            </Button>

            {result && (
              <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Результат расчёта:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Объём утеплителя</p>
                    <p className="text-2xl font-bold text-accent">
                      {result.volume.toFixed(2)} м³
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Количество упаковок</p>
                    <p className="text-2xl font-bold text-accent">
                      ~{result.packages} шт
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg border border-accent/20">
                  <div className="flex items-start gap-2">
                    <Icon name="Info" className="h-5 w-5 text-accent mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Расчёт приблизительный. Для точного подбора материалов и расчёта стоимости
                      свяжитесь с нашими специалистами.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
