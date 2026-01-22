import React from 'react';
import WhoWeAreImage from '../../assets/Who we are.png';

const WhoAreWe: React.FC = () => {
  const stats = [
    { value: '200,000', unit: 'MT', label: 'Annual waste offsetting' },
    { value: '100%', unit: '', label: 'On time compliance' },
    { value: '300+', unit: '', label: 'PIBOs across 15 states' },
    { value: '125+', unit: '', label: 'Recycler network' },
  ];

  return (
    <section className="flex items-center justify-center bg-[#F9FAFB] overflow-hidden py-10 px-[100px]">
      <div 
        className="bg-[#F8F9FA] w-full rounded-[20px] relative overflow-hidden flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
      >
        {/* Decorative Background Image - Absolute positioned to touch edges */}
        <div>
          <img 
            src={WhoWeAreImage} 
            alt="" 
            className="hidden lg:block absolute left-[-130px] top-0 object-contain object-top-left z-0 pointer-events-none"
          />

          <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-10">
            <div className="flex flex-col lg:flex-row items-start">
              {/* Spacer for the absolute image on desktop */}
              <div className="hidden lg:block lg:w-[42%] shrink-0"></div>

              {/* Mobile Image (Visible only on mobile/tablet) */}
              <div className="lg:hidden w-[500px] flex justify-center">
                <img 
                  src={WhoWeAreImage} 
                  alt="Who we are" 
                  className="w-full h-auto object-contain rounded-[20px]"
                />
              </div>

              {/* Text Content */}
              <div className="w-full lg:max-w-[600px] flex flex-col gap-6 -mt-4 lg:ml-8">
                <div className="flex flex-col gap-2">
                  <h2 className="text-[#57BE8B] font-urbanist font-medium text-2xl md:text-[36px] leading-tight">
                    Who are we
                  </h2>
                  <p className="text-[#4F4F4F] font-urbanist text-sm md:text-base font-medium">
                    Your expert guide for all things EPR
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-[#1A1A1A] font-urbanist font-medium text-lg md:text-xl leading-tight">
                    India's Pioneer in Digital Solutions for EPR Compliance
                  </h3>
                  <p className="text-[#4F4F4F] font-urbanist text-sm md:text-xl leading-relaxed">
                    We are a team industry experts delivering comprehensive EPR compliance solutions across multiple material streams, including plastic, e-waste, metal, glass, and paper. Our technology-driven platform provides audit-ready, reliable compliance support tailored to evolving Indian regulations.
                  </p>
                  <p className="text-[#4F4F4F] font-urbanist text-sm md:text-xl leading-relaxed">
                    By collaborating with registered recyclers nationwide and integrating deep regulatory expertise, we ensure transparent target fulfilment, reduced compliance risks, and sustained alignment with national EPR frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Stats Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10 pb-10 z-10 mt-3.5">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white border boundary-emerald-50 rounded-[10px] py-8 px-6 flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-md transition-shadow duration-300 border-[#B1E4CA]"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-[#57BE8B] font-urbanist font-bold text-3xl">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="text-[#57BE8B] font-urbanist font-bold text-sm md:text-base">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="text-[#4F4F4F] font-urbanist text-sm md:text-base font-medium text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
