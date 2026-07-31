import Header from '@/components/panzir/Header';
import Hero from '@/components/panzir/Hero';
import About from '@/components/panzir/About';
import PlaceholderSections from '@/components/panzir/PlaceholderSections';
import Footer from '@/components/panzir/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Hero />
        <About />
        <PlaceholderSections />
      </main>
      <Footer />
    </div>
  );
};

export default Index;