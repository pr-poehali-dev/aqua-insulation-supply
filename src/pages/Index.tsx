import Header from '@/components/panzir/Header';
import Hero from '@/components/panzir/Hero';
import About from '@/components/panzir/About';
import Product from '@/components/panzir/Product';
import Verenitsa from '@/components/panzir/Verenitsa';
import Applications from '@/components/panzir/Applications';
import Advantages from '@/components/panzir/Advantages';
import Portfolio from '@/components/panzir/Portfolio';
import Process from '@/components/panzir/Process';
import Docs from '@/components/panzir/Docs';
import Contacts from '@/components/panzir/Contacts';
import Footer from '@/components/panzir/Footer';
import ScrollTop from '@/components/panzir/ScrollTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <About />
        <Product />
        <Verenitsa />
        <Applications />
        <Advantages />
        <Portfolio />
        <Process />
        <Docs />
        <Contacts />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default Index;