import React from 'react';
import DomainIcon from '../../assets/Image 3.svg';
import TechDrivenIcon from '../../assets/Image 2.svg';
import TimelyComplianceIcon from '../../assets/Image 1.svg';

const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      icon: DomainIcon,
      title: 'Domain Expertise',
      description: 'We bring extensive EPR compliance experience across industries, backed by deep expertise in waste management regulations and compliance requirements.',
      bgColor: '#36A46B',
      textColor: '#FFFFFF',
      iconColor: '#FFFFFF',
    },
    {
      icon: TechDrivenIcon,
      title: 'Tech Driven',
      description: 'We are tech-first team of Chartered Accountants and Environmental Engineers delivering seamless, end-to-end EPR compliance solutions for sustainable business growth and success.',
      bgColor: '#FFFFFF',
      textColor: '#57BE8B',
      iconColor: '#1A1A1A',
    },
    {
      icon: TimelyComplianceIcon,
      title: '100% on time compliance',
      description: 'We simplify EPR compliance through our reliable recycler network, ensuring timely and effective compliance for your business.',
      bgColor: '#2C2C2C',
      textColor: '#FFFFFF',
      iconColor: '#FFFFFF',
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 w-full overflow-x-hidden">
      <div 
        className="bg-white flex flex-col w-full max-w-[1200px] mx-auto"
        style={{ 
          minHeight: '744px', 
          padding: '40px',
          gap: '48px'
        }}
      >
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-[#57BE8B] font-urbanist font-bold text-3xl md:text-4xl lg:text-[40px] text-center">
            Why Choose us as your compliance partner?
          </h2>
          <p className="text-[#1A1A1A] font-urbanist text-base md:text-lg text-center max-w-4xl text-opacity-80">
            We are India's first comprehensive Extended Producer Responsibility (EPR) compliance platform, built to simplify, digitise, and scale EPR obligations for businesses of all sizes.
          </p>
        </div>

        {/* Cards Container with Wavy Lines */}
        <div 
          className="relative flex flex-col lg:flex-row items-start justify-center w-full"
          style={{ 
            minHeight: '500px',
            gap: '10px'
          }}
        >
          {/* Wavy Line Background - SVG overlay positioned at icon level */}
          <svg 
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
            style={{ minHeight: '500px' }}
            viewBox="0 0 1200 500"
            preserveAspectRatio="none"
          >
            {/* Wavy path connecting the three card icons - positioned at icon level (~120px from top) */}
            <defs>
              <linearGradient id="wavyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#36A46B" />
                <stop offset="33%" stopColor="#36A46B" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            {/* Wavy line path - passes through icon area, more pronounced wave */}
            <path
              d="M 200 120 Q 400 80, 600 120 Q 800 160, 1000 120"
              stroke="url(#wavyGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Cards */}
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative z-20 flex flex-col"
              style={{
                width: '400px',
                minHeight: '500px',
                paddingTop: '40px',
                paddingRight: '12px',
                paddingBottom: '40px',
                paddingLeft: '12px',
                backgroundColor: card.bgColor,
                borderRadius: '0px',
                flexShrink: 0,
              }}
            >
              {/* Icon */}
              <div className="flex items-center justify-start mb-6" style={{ position: 'relative', zIndex: 30 }}>
                <div 
                  style={{ 
                    width: '80px', 
                    height: '80px',
                  }}
                >
                  <img 
                    src={card.icon} 
                    alt={card.title}
                    className="object-contain w-full h-full"
                    style={{ 
                      filter: card.iconColor === '#FFFFFF' ? 'brightness(0) invert(1)' : card.iconColor === '#1A1A1A' ? 'brightness(0)' : 'none'
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 flex-1">
                <h3 
                  className="font-urbanist font-bold text-2xl md:text-3xl leading-tight"
                  style={{ color: card.textColor }}
                >
                  {card.title}
                </h3>
                <p 
                  className="font-urbanist text-base md:text-lg leading-relaxed"
                  style={{ color: card.textColor }}
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
