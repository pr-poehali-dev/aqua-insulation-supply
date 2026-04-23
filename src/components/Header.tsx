import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Главная', id: 'hero' },
    { label: 'Каталог', id: 'catalog' },
    { label: 'Доставка', id: 'features' },
    { label: 'Контакты', id: 'contacts' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-100 bg-white/97 backdrop-blur shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.poehali.dev/projects/f1826e2b-819c-415e-ba4d-8aa7518a1625/bucket/64d54090-93a4-485f-8404-e7719296e908.PNG"
              alt="АкваРос логотип"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-lg font-bold bg-brand-gradient bg-clip-text text-transparent">АкваРос СПб</h1>
              <p className="text-xs text-muted-foreground"></p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-sm">
            <Icon name="Phone" className="h-4 w-4 text-brand-orange" />
            <a href="tel:88007008481" className="font-medium hover:text-brand-orange transition-colors">
              8 800 700 84 81
            </a>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-lg font-medium text-foreground hover:text-brand-orange transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="tel:88007008481"
                  className="flex items-center gap-2 text-lg font-medium text-brand-orange mt-4"
                >
                  <Icon name="Phone" className="h-5 w-5" />
                  8 800 700 84 81
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}