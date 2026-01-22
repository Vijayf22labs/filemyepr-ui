import React from 'react';
import HeroImage from '../../assets/herosectionimage.png';

const Hero = () => {
  return (
    <div className="bg-[#EEF9F4] w-full relative overflow-hidden">
      <div className="container mx-auto px-6 pt-24 pb-20 md:pt-[200px] md:pb-[120px] md:px-[80px] lg:px-[60px] flex flex-col lg:flex-row lg:items-center relative z-20">
        
        {/* Left Side Part */}
        <div className="flex flex-col gap-6 w-full lg:max-w-[645px] z-10 ">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 w-fit shadow-sm">
             <div className="w-1.5 h-1.5 rounded-full bg-brand-dark"></div>
             <span className="text-brand-dark text-xs font-medium font-urbanist">
               India's first platform for Complete EPR Compliance
             </span>
          </div>

          {/* Heading */}
          <h1 className="font-urbanist font-bold text-4xl md:text-5xl lg:text-[35px] lg:leading-[1.1] text-[#57BE8B] tracking-tight">
            Simplyfying EPR,<br className="hidden md:block" />
            Strengthening Sustainability
          </h1>

          {/* Description */}
          <p className="font-urbanist text-brand-dark text-base md:text-lg leading-relaxed max-w-full md:max-w-xl text-opacity-80">
            Streamline your EPR Compliance with India's First Digital Platform - for end to end compliance solutions from Registration, purchase of credits from registered recyclers to filing of returns.
          </p>

          {/* CTA Button */}
          <button className="bg-[#57BE8B] hover:bg-[#4da87b] text-white font-urbanist font-bold text-base px-6 py-3 rounded-md w-fit transition-colors duration-200">
            Start your compliance here
          </button>

        </div>

        {/* Center Part - Feature Cards */}
        <div className="flex flex-col gap-6 z-10 mt-8 lg:mt-0 lg:ml-[-80px] lg:mr-16 w-full lg:max-w-[220px]">
           {/* Card 1 */}
           <div className="bg-white p-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-3 w-full cursor-default hover:translate-x-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-lg bg-[#E0F5EB] flex items-center justify-center shrink-0">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#57BE8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </div>
              <span className="font-urbanist font-medium text-[#1A1A1A] text-sm whitespace-nowrap">Unparalled expertise</span>
           </div>

           {/* Card 2 */}
           <div className="bg-white p-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-3 w-full cursor-default hover:translate-x-1 transition-transform duration-300 delay-75">
              <div className="w-12 h-12 rounded-lg bg-[#E0F5EB] flex items-center justify-center shrink-0">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#57BE8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </div>
              <span className="font-urbanist font-medium text-[#1A1A1A] text-sm whitespace-nowrap">Accurate Compliance</span>
           </div>

           {/* Card 3 */}
           <div className="bg-white p-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-3 w-full cursor-default hover:translate-x-1 transition-transform duration-300 delay-150">
              <div className="w-12 h-12 rounded-lg bg-[#E0F5EB] flex items-center justify-center shrink-0">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#57BE8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </div>
              <span className="font-urbanist font-medium text-[#1A1A1A] text-sm whitespace-nowrap">Timely Updates</span>
           </div>
        </div>

        {/* Right Side Part */}
        <div className="flex justify-center mt-8 lg:mt-0 lg:block lg:absolute lg:right-[-80px] lg:bottom-8 z-0 pointer-events-none lg:pr-16 lg:top-55">
            <img 
              src={HeroImage} 
              alt="EPR Compliance Professional" 
              className="max-h-[280px] md:max-h-[350px] lg:max-h-[420px] w-auto object-contain"
            />
        </div>

      </div>
    </div>
  );
};

export default Hero;