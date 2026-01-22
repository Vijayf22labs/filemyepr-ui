import React from 'react';
import CreativeMarketLogo from '../../assets/Creative Market.svg';
import TravelokaLogo from '../../assets/Traveloka.svg';
import MazeLogo from '../../assets/Maze.svg';
import BlibliLogo from '../../assets/Blibli.svg';
import BukalapakLogo from '../../assets/Bukalapak.svg';

const TrustedByClients: React.FC = () => {
  const logos = [
    { src: CreativeMarketLogo, alt: 'Creative Market' },
    { src: TravelokaLogo, alt: 'Traveloka' },
    { src: MazeLogo, alt: 'Maze' },
    { src: BlibliLogo, alt: 'Blibli' },
    { src: BukalapakLogo, alt: 'Bukalapak' },
  ];

  return (
    <section className="bg-white pt-12 md:pt-24 pb-8 md:pb-12 flex flex-col items-center gap-10 md:gap-16">
      <h2 className="font-urbanist font-semibold text-[24px] md:text-[40px] lg:text-[48px] leading-[1.2] md:leading-[52px] text-[#57BE8B] text-center px-4">
        Trusted By 100+ Clients
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-[51.5px] px-6 max-w-7xl mx-auto">
        {logos.map((logo, index) => (
          <img 
            key={index} 
            src={logo.src} 
            alt={logo.alt} 
            className="h-[32px] w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedByClients;
