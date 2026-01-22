import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import TrustedByClients from './TrustedByClients';
import WhoAreWe from './WhoAreWe';
import PurchaseCredits from './PurchaseCredits';
import WhyChooseUs from './WhyChooseUs';
import ContactUs from './ContactUs';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Navbar />
      <div>
        <Hero />
        <TrustedByClients />
        <WhoAreWe />
        <PurchaseCredits />
        <WhyChooseUs />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
