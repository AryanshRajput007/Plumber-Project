import React from 'react';
import HeroSection from './components/HeroSection';
import EmergencyBar from './components/EmergencyBar';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EmergencyBar />
      <ServicesSection />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;