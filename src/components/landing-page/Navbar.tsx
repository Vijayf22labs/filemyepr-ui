import React, { useState } from 'react';
import { ChevronDown, Search, Menu, X } from 'lucide-react';
import navLogo from '../../assets/navlogo.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-[2px] left-0 right-0 bg-white z-50 border-b border-[#EBEBEB] h-[72px] lg:h-[96px]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full max-w-[1200px] mx-auto h-full flex items-center justify-between px-10">
            {/* Logo Section */}
            <div className="shrink-0">
              <img 
                src={navLogo} 
                alt="FileMyEPR Logo" 
                className="h-[24px] lg:h-[30px] w-auto" 
              />
            </div>

            {/* Navigation Links - Desktop Version */}
            <div 
              className="hidden lg:flex items-center gap-[30px] xl:gap-[40px] 2xl:gap-[60px]"
            >
              <a 
                href="#" 
                className="font-normal text-[18px] xl:text-[20px] leading-[28px] text-[#353535] hover:text-[#58BD8A] transition-colors whitespace-nowrap"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Store
              </a>
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#58BD8A] transition-colors group">
                <span 
                  className="font-normal text-[18px] xl:text-[20px] leading-[28px] text-[#353535] group-hover:text-[#58BD8A] whitespace-nowrap"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Resources
                </span>
                <ChevronDown className="size-5 text-[#A2A2A2] group-hover:text-[#58BD8A]" />
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#58BD8A] transition-colors group">
                <span 
                  className="font-normal text-[18px] xl:text-[20px] leading-[28px] text-[#353535] group-hover:text-[#58BD8A] whitespace-nowrap"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Company
                </span>
                <ChevronDown className="size-5 text-[#A2A2A2] group-hover:text-[#58BD8A]" />
              </div>
              <a 
                href="#" 
                className="font-normal text-[18px] xl:text-[20px] leading-[28px] text-[#353535] hover:text-[#58BD8A] transition-colors whitespace-nowrap"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Liability Calculator
              </a>
            </div>

            {/* Right Section: Search + Login + Mobile Toggle */}
            <div className="flex items-center gap-4 md:gap-8">
              <button 
                className="hidden lg:flex items-center justify-center transition-colors hover:text-[#58BD8A]"
                style={{ color: '#4B556399' }}
              >
                <Search size={24} />
              </button>
              
              <div className="hidden sm:block">
                <button className="bg-[#57BE8B] text-white w-[117px] h-[56px] px-8 py-4 rounded-[6px] font-semibold hover:opacity-90 transition-all whitespace-nowrap text-[16px] lg:text-[20px] flex items-center justify-center">
                  Login
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                className="lg:hidden flex items-center justify-center text-[#353535] hover:text-[#57BE8B] transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Sidebar/Drawer */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[74px] lg:top-[98px] bg-white z-45 lg:hidden animate-in fade-in slide-in-from-right duration-300">
            <div className="flex flex-col p-6 gap-6 h-full overflow-y-auto">
              <a 
                href="#" 
                className="text-[20px] font-medium text-[#353535] hover:text-[#57BE8B] border-b border-[#EBEBEB] pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Store
              </a>
              <a 
                href="#" 
                className="text-[20px] font-medium text-[#353535] hover:text-[#57BE8B] border-b border-[#EBEBEB] pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </a>
              <a 
                href="#" 
                className="text-[20px] font-medium text-[#353535] hover:text-[#57BE8B] border-b border-[#EBEBEB] pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Company
              </a>
              <a 
                href="#" 
                className="text-[20px] font-medium text-[#353535] hover:text-[#57BE8B] border-b border-[#EBEBEB] pb-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Liability Calculator
              </a>
              <div className="sm:hidden mt-auto pt-6">
                <button className="bg-[#57BE8B] text-white w-full h-[56px] rounded-[6px] font-semibold text-[18px] flex items-center justify-center">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
