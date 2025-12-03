import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contacts" className="relative py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.02] bg-cover bg-center"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/files/f842b562-e73c-4120-b8cb-39786b53db85.jpg)' }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты и заявка</h2>
            <p className="text-muted-foreground">
              Оставьте заявку, и наши специалисты помогут подобрать материалы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Быстрая заявка</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Сообщение (опционально)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Отправить заявку
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Icon name="MapPin" className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес офиса</h4>
                    <p className="text-sm text-muted-foreground">
                      196158, Санкт-Петербург<br />
                      Московское ш., 46, лит. Б<br />
                      БЦ "М-46", офис 213Б
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Icon name="Clock" className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Режим работы</h4>
                    <p className="text-sm text-muted-foreground">
                      Пн-Пт: 9:00 - 17:30<br />
                      Сб-Вс: выходной
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Icon name="Phone" className="h-6 w-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-semibold mb-1">Общий отдел</h4>
                      <a href="tel:88007008481" className="text-accent hover:underline">
                        8 800 700 84 81
                      </a>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Отдел доставки</h4>
                      <a href="tel:+78127031644" className="text-accent hover:underline">
                        +7 812 703 16 44
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Icon name="Mail" className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:sale@a-ros.ru" className="text-accent hover:underline text-sm">
                      sale@a-ros.ru
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}