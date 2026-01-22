import React from 'react';
import FooterLogo from '../../assets/fotter logo.svg';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer 
      className="w-full overflow-x-hidden"
      style={{ 
        backgroundColor: '#353535',
        padding: '40px'
      }}
    >
      <div 
        className="w-full max-w-[1200px] mx-auto flex flex-col"
        style={{ 
          minHeight: '642px',
          gap: '40px'
        }}
      >
        {/* Main Content Area */}
        <div 
          className="flex flex-col lg:flex-row items-start justify-between w-full"
          style={{ gap: '120px' }}
        >
          {/* Column 1: Logo and Social Media */}
          <div className="flex flex-col gap-4">
            {/* Logo */}
            <div className="mb-2">
              <img 
                src={FooterLogo} 
                alt="FileMyEPR" 
                className="h-8 w-auto"
              />
            </div>
            
            {/* Tagline */}
            <p className="text-gray-300 font-urbanist text-sm">
              A product by Hindustan SWM Solutions Private Limited
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3 mt-4">
              {/* Facebook */}
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:border-[#57BE8B] transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              
              {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:border-[#57BE8B] transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:border-[#57BE8B] transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              
              {/* YouTube */}
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:border-[#57BE8B] transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-urbanist font-bold text-base mb-2">
              Company
            </h3>
            <div className="flex flex-col gap-3">
              {['Services', 'About Us', 'Contact Us', 'Careers', 'Partners'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-gray-300 font-urbanist text-sm hover:text-[#57BE8B] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Tools Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-urbanist font-bold text-base mb-2">
              Tools
            </h3>
            <div className="flex flex-col gap-3">
              {['EPR Liability Calculator', 'Penalty Calculator', 'Resume Calculator'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-gray-300 font-urbanist text-sm hover:text-[#57BE8B] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Policies and Still have doubts? */}
          <div className="flex flex-col gap-6">
            {/* Policies */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-urbanist font-bold text-base mb-2">
                Policies
              </h3>
              <div className="flex flex-col gap-3">
                {['Terms & Conditions', 'Privacy Policy', 'Refund Policy', 'Data & Security'].map((link) => (
                  <a 
                    key={link}
                    href="#" 
                    className="text-gray-300 font-urbanist text-sm hover:text-[#57BE8B] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Still have doubts? */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-urbanist font-bold text-base mb-2">
                Still have doubts?
              </h3>
              <div className="flex flex-col gap-3">
                {['FAQ', 'EPR Simplified', 'Notifications', 'Liability Calculator'].map((link) => (
                  <a 
                    key={link}
                    href="#" 
                    className="text-gray-300 font-urbanist text-sm hover:text-[#57BE8B] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 5: Reach out to us & Contacts us */}
          <div className="flex flex-col gap-6">
            {/* Reach out to us */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-urbanist font-bold text-base mb-2">
                Reach out to us
              </h3>
              <a 
                href="#" 
                className="text-gray-300 font-urbanist text-sm hover:text-[#57BE8B] transition-colors"
              >
                For PWP Partnerships
              </a>
            </div>

            {/* Contacts us */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-urbanist font-bold text-base mb-2">
                Contacts us
              </h3>
              <div className="flex flex-col gap-3">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#57BE8B" strokeWidth="2" fill="none"/>
                    <path d="M22 6L12 13L2 6" stroke="#57BE8B" strokeWidth="2" fill="none"/>
                  </svg>
                  <a 
                    href="mailto:info@filemyepr.in" 
                    className="text-gray-300 font-urbanist text-sm hover:text-[#57BE8B] transition-colors"
                  >
                    info@filemyepr.in
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0">
                    <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.4823 3.11502 17.8751 4.03879 19.7426 5.60641C21.6101 7.17403 22.8534 9.30276 23.25 11.5C23.41 12.5 23.41 13.5 21 11.5Z" stroke="#57BE8B" strokeWidth="2" fill="none"/>
                  </svg>
                  <a 
                    href="#" 
                    className="text-gray-300 font-urbanist text-sm hover:text-[#57BE8B] transition-colors"
                  >
                    Reach us out by WhatsApp
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0">
                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2131 21.3522 21.4011C21.1471 21.5891 20.905 21.7322 20.6406 21.8217C20.3762 21.9112 20.0952 21.9451 19.8167 21.921C16.7422 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.27099 2.12 4.18C2.09595 3.90347 2.12989 3.62469 2.21918 3.36239C2.30847 3.1001 2.45123 2.85975 2.63881 2.65581C2.82639 2.45187 3.05489 2.28849 3.31002 2.17611C3.56515 2.06373 3.84161 2.00464 4.12 2.002H7.12C7.68123 1.99522 8.23047 2.16708 8.68657 2.49353C9.14268 2.81998 9.48171 3.28608 9.65 3.82L10.93 7.41C11.0901 7.86432 11.1355 8.35278 11.0621 8.82876C10.9887 9.30474 10.7991 9.75296 10.51 10.13L9.09 11.53C10.5144 14.2851 12.7149 16.4856 15.47 17.91L16.87 16.5C17.247 16.2109 17.6952 16.0213 18.1712 15.9479C18.6472 15.8745 19.1357 15.9199 19.59 16.08L23.18 17.36C23.7155 17.5285 24.1826 17.8682 24.51 18.325C24.8374 18.7818 25.0092 19.3317 25 19.9L25 19.92H25Z" stroke="#57BE8B" strokeWidth="2" fill="none"/>
                  </svg>
                  <a 
                    href="tel:+91904379126" 
                    className="text-gray-300 font-urbanist text-sm hover:text-[#57BE8B] transition-colors"
                  >
                    +91 904379126
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#57BE8B" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="10" r="3" stroke="#57BE8B" strokeWidth="2" fill="none"/>
                  </svg>
                  <p className="text-gray-300 font-urbanist text-sm leading-relaxed">
                    Anurag New No. 15, Old No. 7A, 2nd floor, Murray's Gate Road, Alwarpet, Chennai, Tamil Nadu - 600018
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Separator Line */}
        <div className="w-full border-t border-gray-600"></div>

        {/* Copyright Section */}
        <div className="flex justify-center">
          <p className="text-gray-300 font-urbanist text-sm">
            All rights reserved by FileMyEPR.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
