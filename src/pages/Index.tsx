import Header from '@/components/panzir/Header';
import Hero from '@/components/panzir/Hero';
import About from '@/components/panzir/About';
import Product from '@/components/panzir/Product';
import Verenitsa from '@/components/panzir/Verenitsa';
import Supports from '@/components/panzir/Supports';
import Ozv from '@/components/panzir/Ozv';
import Protective from '@/components/panzir/Protective';
import PlaceholderSections from '@/components/panzir/PlaceholderSections';
import Footer from '@/components/panzir/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <About />
        <Product />
        <Verenitsa />
        <Supports />
        <Ozv />
        <Protective />
        <PlaceholderSections />
      </main>
      <Footer />
    </div>
  );
};

export default Index;