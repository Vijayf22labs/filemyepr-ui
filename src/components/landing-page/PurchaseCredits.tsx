import React from 'react';
import ChooseIcon from '../../assets/Choose - Outline.svg';
import UploadIcon from '../../assets/Upload - Outline.svg';
import PurchaseIcon from '../../assets/Purchase - Outline.svg';

const PurchaseCredits: React.FC = () => {
  const steps = [
    {
      icon: ChooseIcon,
      title: 'Pick Category & Credits',
      description: 'Select your desired category and the number of credits you need.',
    },
    {
      icon: UploadIcon,
      title: 'Upload Details',
      description: 'Provide your company and GST details for invoice generation.',
    },
    {
      icon: PurchaseIcon,
      title: 'Complete Payment',
      description: 'Pay securely - credits reflect in your wallet within 48 hours.',
    },
  ];

  return (
    <section className="bg-white p-10 flex items-center justify-center">
      <div className="bg-white flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="text-[#57BE8B] font-urbanist font-medium text-center" style={{ fontSize: '36px', lineHeight: '48px', letterSpacing: '0%' }}>
            Purchase Credits
          </h2>
          <p className="text-[#1A1A1A] font-urbanist text-base md:text-lg text-opacity-80 text-center">
            Purchase credits across different categories of waste based on the target mandated for your business.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center flex-1 gap-4 px-10">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Card */}
              <div className="w-[321.33px] h-[304px] bg-white border border-[#EEF9F4] rounded-xl p-6 flex flex-col items-center gap-8 hover:shadow-md transition-shadow duration-300">
                {/* Icon */}
                <div className="shrink-0">
                  <img 
                    src={step.icon} 
                    alt={step.title}
                    className="object-contain"
                    style={{ width: '100px', height: '100px' }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 items-center text-center flex-1">
                  <h3 className="text-[#57BE8B] font-urbanist font-medium text-lg md:text-2xl whitespace-nowrap">
                    {step.title}
                  </h3>
                  <p className="text-[#1A1A1A] font-urbanist text-sm md:text-xl leading-[28px]">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow between cards (not after last card) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center">
                  <svg 
                    width="60" 
                    height="32" 
                    viewBox="0 0 60 32" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#1A1A1A]"
                  >
                    {/* Arrow shaft */}
                    <line 
                      x1="2" 
                      y1="16" 
                      x2="50" 
                      y2="16" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round"
                    />
                    {/* Arrowhead */}
                    <path 
                      d="M50 16L42 8M50 16L42 24" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* View Store Button */}
        <div className="flex justify-center mt-6">
          <button 
            className="bg-[#57BE8B] hover:bg-[#4da87b] text-white font-urbanist font-bold text-base md:text-lg transition-colors duration-200 w-full max-w-[310px] px-6 py-4 rounded-md cursor-pointer"
          >
            View Store
          </button>
        </div>
      </div>
    </section>
  );
};

export default PurchaseCredits;
