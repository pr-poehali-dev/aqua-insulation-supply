import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="mb-4 w-80 p-4 animate-scale-in shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Связаться с нами</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <Icon name="X" className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-3">
            <a
              href="https://t.me/akvaros_spb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="p-2 rounded-full bg-[#0088cc]/10">
                <Icon name="Send" className="h-5 w-5 text-[#0088cc]" />
              </div>
              <div>
                <p className="font-medium text-sm">Telegram</p>
                <p className="text-xs text-muted-foreground">Написать в мессенджер</p>
              </div>
            </a>
            <a
              href="https://wa.me/78127031644"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="p-2 rounded-full bg-[#25D366]/10">
                <Icon name="MessageCircle" className="h-5 w-5 text-[#25D366]" />
              </div>
              <div>
                <p className="font-medium text-sm">WhatsApp</p>
                <p className="text-xs text-muted-foreground">Быстрая связь</p>
              </div>
            </a>
            <a
              href="tel:88007008481"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="p-2 rounded-full bg-accent/10">
                <Icon name="Phone" className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-medium text-sm">Позвонить</p>
                <p className="text-xs text-muted-foreground">8 800 700 84 81</p>
              </div>
            </a>
          </div>
        </Card>
      )}

      <Button
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full h-14 w-14 shadow-lg bg-accent hover:bg-accent/90"
      >
        {isOpen ? (
          <Icon name="X" className="h-6 w-6" />
        ) : (
          <Icon name="MessageCircle" className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}
