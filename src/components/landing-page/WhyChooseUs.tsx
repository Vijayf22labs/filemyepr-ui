import React from 'react';
import DomainIcon from '../../assets/Image 3.svg';
import TechDrivenIcon from '../../assets/Image 2.svg';
import TimelyComplianceIcon from '../../assets/Image 1.svg';

const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      icon: TimelyComplianceIcon,
      title: 'Domain Expertise',
      description: 'We bring extensive EPR compliance experience across industries, backed by deep expertise in waste management regulations and compliance requirements.',
      bgColor: '#57BE8B',
      titleColor: '#1A1A1A',
      descriptionColor: '#1A1A1A',
      iconColor: '#1A1A1A',
    },
    {
      icon: TechDrivenIcon,
      title: 'Tech Driven',
      description: 'We are tech-first team of Chartered Accountants and Environmental Engineers delivering seamless, end-to-end EPR compliance solutions for sustainable business growth and success.',
      bgColor: '#FFFFFF',
      titleColor: '#57BE8B',
      descriptionColor: '#57BE8B',
      iconColor: '#1A1A1A',
    },
    {
      icon: DomainIcon,
      title: '100% on time compliance',
      description: 'We simplify EPR compliance through our reliable recycler network, ensuring timely and effective compliance for your business.',
      bgColor: '#2C2C2C',
      titleColor: '#FFFFFF',
      descriptionColor: '#FFFFFF',
      iconColor: '#57BE8B',
    },
  ];

  return (
    <section className="bg-white pb-10 w-full overflow-x-hidden">
      <div 
        className="bg-white flex flex-col w-full"
      >
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-3 pb-12 px-10">
          <h2 className="text-[#57BE8B] font-urbanist font-medium text-3xl md:text-[36px] text-center">
            Why Choose us as your compliance partner?
          </h2>
          <p className="text-[#1A1A1A] font-urbanist text-base md:text-lg text-center text-opacity-80">
            We are India's first comprehensive Extended Producer Responsibility (EPR) compliance platform, built to simplify, digitise, and scale EPR obligations for businesses of all sizes.
          </p>
        </div>

        {/* Cards Container with Wavy Lines */}
        <div 
          className="relative flex flex-col lg:flex-row items-stretch justify-center w-full"
        >
          {/* Cards */}
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative z-20 py-10 flex flex-col flex-1 bg-white border-0 shrink-0"
              style={{ backgroundColor: card.bgColor }}
            >
              {/* Icon */}
              <div className="flex items-center justify-start mb-6">
                <div
                >
                  <img 
                    src={card.icon} 
                    alt={card.title}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 flex-1 px-4 text-center mt-[-200px]">
                <h3 
                  className="font-urbanist font-semibold text-2xl md:text-3xl leading-tight text-center"
                  style={{ color: card.titleColor }}
                >
                  {card.title}
                </h3>
                <p 
                  className="font-urbanist text-base md:text-lg leading-relaxed"
                  style={{ color: card.descriptionColor }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
