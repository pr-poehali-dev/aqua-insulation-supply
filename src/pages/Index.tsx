import { useState } from 'react';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import Features from '@/components/Features';
import Calculator from '@/components/Calculator';
import Reviews from '@/components/Reviews';
import ProjectGallery from '@/components/ProjectGallery';
import ContactForm from '@/components/ContactForm';
import YandexMap from '@/components/YandexMap';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import Header from '@/components/Header';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Hero />
      <Features />
      <Catalog searchQuery={searchQuery} />
      <Calculator />
      <Reviews />
      <ProjectGallery />
      <ContactForm />
      <YandexMap />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;