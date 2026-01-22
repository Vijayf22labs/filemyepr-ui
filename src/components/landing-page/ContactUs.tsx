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
      className="w-full flex items-center justify-center overflow-x-hidden bg-[#353535]"
    >
      <div 
        className="w-full flex flex-col lg:flex-row justify-between gap-8 py-20"
      >
        {/* Left Side - Image with decorative elements */}
        <div className="relative w-full flex items-start">
           {/* Contact Image */}
           <div className="relative z-10 w-full h-full flex items-start">
              <img 
                src={ContactImage} 
                alt="Contact us" 
                className="w-full h-auto object-contain max-h-full"
              />
            </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full flex items-center justify-center pr-10">
          <div 
            className="bg-white rounded-lg p-8 w-full max-w-[560px] shadow-lg"
            style={{ borderRadius: '8px' }}
          >
            {/* Form Header */}
            <div className="mb-6">
              <h2 className="text-[#57BE8B] font-urbanist font-medium text-3xl md:text-4xl mb-1">
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
                  <label className="block text-[#1A1A1A] font-urbanist text-sm font-medium mb-1">
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
                  <label className="block text-[#1A1A1A] font-urbanist text-sm font-medium mb-1">
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
                <label className="block text-[#1A1A1A] font-urbanist text-sm font-medium mb-1">
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
                <label className="block text-[#1A1A1A] font-urbanist text-sm font-medium mb-1">
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
