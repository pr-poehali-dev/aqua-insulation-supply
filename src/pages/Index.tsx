import Header from '@/components/panzir/Header';
import Hero from '@/components/panzir/Hero';
import About, { Process } from '@/components/panzir/About';
import Collections from '@/components/panzir/Collections';
import Docs from '@/components/panzir/Docs';
import Contacts from '@/components/panzir/Contacts';
import Footer from '@/components/panzir/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <About />
        <Process />
        <Collections />
        <Docs />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;