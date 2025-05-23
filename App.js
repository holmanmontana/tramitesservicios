import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesGrid from './components/ServicesGrid';
import ContactSection from './components/ContactSection';
import LayoutFooter from './components/LayoutFooter';

const App = () => {
  const [currentPage] = useState('home');

  const renderPage = () => {
    return (
      <>
        <HeroSection />
        <AboutSection />
        <ServicesGrid />
        <ContactSection />
      </>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <LayoutHeader />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <LayoutFooter />
    </div>
  );
};

export default App;