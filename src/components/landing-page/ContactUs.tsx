import React, { useState } from 'react';
import ContactImage from '../../assets/contactus.svg';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    phoneNumber: '',
    email: '',
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      className="w-full flex items-center justify-center overflow-x-hidden"
      style={{ 
        backgroundColor: '#353535',
        paddingTop: '40px',
        paddingBottom: '40px',
        minHeight: '951px'
      }}
    >
      <div 
        className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-6"
        style={{ height: '951px' }}
      >
        {/* Left Side - Image with decorative elements */}
        <div className="relative w-full lg:w-[50%] h-full flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Background decorative wavy lines */}
            <svg 
              className="absolute inset-0 w-full h-full opacity-30"
              viewBox="0 0 600 600"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M 50 300 Q 150 200, 250 300 T 450 300 T 550 300"
                stroke="#57BE8B"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M 100 350 Q 200 250, 300 350 T 500 350"
                stroke="#57BE8B"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            
            {/* Waste category icons in green circles */}
            {/* Car Battery Icon */}
            <div className="absolute top-20 left-10 w-16 h-16 rounded-full border-2 border-[#57BE8B] flex items-center justify-center bg-transparent z-20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="4" width="12" height="16" rx="2" stroke="#57BE8B" strokeWidth="2"/>
                <line x1="6" y1="8" x2="18" y2="8" stroke="#57BE8B" strokeWidth="2"/>
                <line x1="6" y1="12" x2="18" y2="12" stroke="#57BE8B" strokeWidth="2"/>
                <line x1="9" y1="16" x2="15" y2="16" stroke="#57BE8B" strokeWidth="2"/>
              </svg>
            </div>

            {/* Tire/Wheel Icon */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-2 border-[#57BE8B] flex items-center justify-center bg-transparent z-20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" stroke="#57BE8B" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="#57BE8B" strokeWidth="2"/>
                <line x1="12" y1="4" x2="12" y2="8" stroke="#57BE8B" strokeWidth="2"/>
                <line x1="12" y1="16" x2="12" y2="20" stroke="#57BE8B" strokeWidth="2"/>
                <line x1="4" y1="12" x2="8" y2="12" stroke="#57BE8B" strokeWidth="2"/>
                <line x1="16" y1="12" x2="20" y2="12" stroke="#57BE8B" strokeWidth="2"/>
              </svg>
            </div>

            {/* Plastic Bottle Icon */}
            <div className="absolute top-1/3 right-20 w-16 h-16 rounded-full border-2 border-[#57BE8B] flex items-center justify-center bg-transparent z-20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4 L10 6 L14 6 L14 4 L10 4 Z" stroke="#57BE8B" strokeWidth="2" fill="none"/>
                <path d="M8 6 L16 6 L16 20 Q16 22 14 22 L10 22 Q8 22 8 20 Z" stroke="#57BE8B" strokeWidth="2" fill="none"/>
              </svg>
            </div>

            {/* Cardboard Box Icon */}
            <div className="absolute bottom-1/3 right-20 w-16 h-16 rounded-full border-2 border-[#57BE8B] flex items-center justify-center bg-transparent z-20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="12" height="12" rx="1" stroke="#57BE8B" strokeWidth="2"/>
                <line x1="6" y1="10" x2="18" y2="10" stroke="#57BE8B" strokeWidth="2"/>
                <line x1="12" y1="6" x2="12" y2="18" stroke="#57BE8B" strokeWidth="2"/>
              </svg>
            </div>

            {/* Barrel/Drum Icon */}
            <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full border-2 border-[#57BE8B] flex items-center justify-center bg-transparent z-20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="12" cy="6" rx="8" ry="2" stroke="#57BE8B" strokeWidth="2"/>
                <ellipse cx="12" cy="18" rx="8" ry="2" stroke="#57BE8B" strokeWidth="2"/>
                <line x1="4" y1="6" x2="4" y2="18" stroke="#57BE8B" strokeWidth="2"/>
                <line x1="20" y1="6" x2="20" y2="18" stroke="#57BE8B" strokeWidth="2"/>
                <line x1="12" y1="8" x2="12" y2="16" stroke="#57BE8B" strokeWidth="2"/>
              </svg>
            </div>

            {/* Contact Image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <img 
                src={ContactImage} 
                alt="Contact us" 
                className="w-full h-auto object-contain max-h-full"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-[50%] flex items-center justify-center">
          <div 
            className="bg-white rounded-lg p-8 w-full max-w-[500px] shadow-lg"
            style={{ borderRadius: '8px' }}
          >
            {/* Form Header */}
            <div className="mb-6">
              <h2 className="text-[#57BE8B] font-urbanist font-bold text-3xl md:text-4xl mb-2">
                Contact Us
              </h2>
              <p className="text-[#4F4F4F] font-urbanist text-base">
                Our consultant will get in touch with you.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Company Name and Phone Number - Side by Side */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-[#1A1A1A] font-urbanist text-sm font-medium mb-2">
                    Company name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#57BE8B] font-urbanist text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[#1A1A1A] font-urbanist text-sm font-medium mb-2">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="XXX XXX XXXX"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#57BE8B] font-urbanist text-sm"
                  />
                </div>
              </div>

              {/* Email ID - Full Width */}
              <div>
                <label className="block text-[#1A1A1A] font-urbanist text-sm font-medium mb-2">
                  Email ID<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email ID"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#57BE8B] font-urbanist text-sm"
                />
              </div>

              {/* Comments - Textarea */}
              <div>
                <label className="block text-[#1A1A1A] font-urbanist text-sm font-medium mb-2">
                  Comments (Optional)
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#57BE8B] font-urbanist text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#57BE8B] hover:bg-[#4da87b] text-white font-urbanist font-bold text-base py-3 rounded-md transition-colors duration-200 mt-2"
                style={{ borderRadius: '6px' }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
