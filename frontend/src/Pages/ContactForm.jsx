import React, { useState } from "react";

const ContactForm = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullName,
      email,
      mobileNumber,
      category1,
      category2,
      agreedToTerms,
    });
    alert("Form submitted! Check console for data.");
  };

  const subCategories = {
    "Pride Fusion": ["Data Science", "HRMS"],
    "Success Fusion Program": [
      "Data Science & Analytics",
      "PRODUCT MANAGEMENT",
      "Digital Marketing with AI Tools",
      "UI/UX Design & Prototyping",
      "AI basics for beginners",
      "Entrepreneurship",
    ],
    "Udaan 90": [
      "SEO",
      "Graphic Designing",
      "Video Editing & Content Creation",
      "Social Media Marketing",
      "Front-End Development",
      "Java",
      "Data Analytics & Excel",
      "Python for Data Science",
      "Cyber Security",
      "Marketing & Sales",
      "Soft Skills & Interview Preparation",
      "UI/UX & Product Design",
      "AI & Machine Learning Basics",
      "Startup & Entrepreneurship",
      "Public Speaking & LinkedIn Mastery",
    ],
    "Pay After Placement(Tech Bootcamp)": [
      "SEO",
      "Graphic Designing",
      "Video Editing & Content Creation",
      "Social Media Marketing",
      "Front-End Development",
      "Java",
      "Data Analytics & Excel",
      "Python for Data Science",
      "Cyber Security",
      "Marketing & Sales",
      "Soft Skills & Interview Preparation",
      "UI/UX & Product Design",
      "AI & Machine Learning Basics",
      "Startup & Entrepreneurship",
      "Public Speaking & LinkedIn Mastery",
    ],
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-2 sm:p-4 mt-[40px]">
      <div className="bg-white w-[95%] sm:w-full max-w-xl p-4 sm:p-6 rounded-[12px] shadow-md border-orange-200 border-[2px] shadow-orange-500 sm:mx-2 relative">
        {/* Close button - only visible if onClose prop is provided */}
        {onClose && (
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        
        <h2 className="text-[18px] sm:text-[24px] font-bold text-center mb-1 leading-snug text-orange-500">
          Ready to enhance your skills?
        </h2>
        <p className="text-[13px] sm:text-[15px] text-center mb-3 sm:mb-4 text-[#545454]">
          Share your details and hear from us soon
        </p>

        <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
          <div>
            <label
              htmlFor="fullName"
              className="block text-[13px] sm:text-[14px] font-medium text-[#333333] mb-1"
            >
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-3 py-[6px] border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-orange-500 text-[13px] sm:text-[13px] placeholder:text-[#9A9A9A]"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[13px] sm:text-[14px] font-medium text-[#333333] mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-[6px] border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-orange-500 text-[13px] sm:text-[13px] placeholder:text-[#9A9A9A]"
              placeholder="Enter your E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-[13px] sm:text-[14px] font-medium text-[#333333] mb-1"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              className="w-full px-3 py-[6px] border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-orange-500 text-[13px] sm:text-[13px] placeholder:text-[#9A9A9A]"
              placeholder="Enter your Mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="selectCategory1"
              className="block text-[13px] sm:text-[14px] font-medium text-[#333333] mb-1"
            >
              Select Category
            </label>
            <div className="relative">
              <select
                id="selectCategory1"
                className="block w-full bg-white border border-[#E0E0E0] text-[#333333] py-[6px] pl-3 pr-8 sm:pl-4 sm:pr-10 rounded-[8px] appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-[13px] sm:text-[14px]"
                value={category1}
                onChange={(e) => {
                  setCategory1(e.target.value);
                  setCategory2("");
                }}
                required
              >
                <option value="" disabled hidden>
                  Select Category
                </option>
                <option value="Success Fusion Program">
                  Success Fusion Program
                </option>
                <option value="Udaan 90">Udaan 90</option>
                <option value="Pay After Placement(Tech Bootcamp)">
                  Pay After Placement(Tech Bootcamp)
                </option>
                <option value="Pride Fusion">Pride Fusion</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 sm:px-3 text-gray-600">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="selectCategory2"
              className="block text-[13px] sm:text-[14px] font-medium text-[#333333] mb-1"
            >
              Please select a sub-category
            </label>
            <div className="relative">
              <select
                id="selectCategory2"
                className="block w-full bg-white border border-[#E0E0E0] text-[#333333] py-[6px] pl-3 pr-8 sm:pl-4 sm:pr-10 rounded-[8px] appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-[13px] sm:text-[14px]"
                value={category2}
                onChange={(e) => setCategory2(e.target.value)}
                required
                disabled={
                  !subCategories[category1] ||
                  subCategories[category1].length === 0
                }
              >
                <option value="" disabled hidden>
                  {subCategories[category1] &&
                  subCategories[category1].length > 0
                    ? "Select a sub-category"
                    : "No sub-categories available"}
                </option>
                {subCategories[category1] &&
                  subCategories[category1].map((sub, idx) => (
                    <option key={idx} value={sub}>
                      {sub}
                    </option>
                  ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 sm:px-3 text-gray-600">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-start mt-2">
            <input
              type="checkbox"
              id="termsAgreement"
              className="h-4 w-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500 mt-0.5 cursor-pointer"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            <label
              htmlFor="termsAgreement"
              className="ml-2 text-[12px] sm:text-[13px] font-medium text-gray-400 leading-snug cursor-pointer"
            >
              I agree to receive updates and notifications from Baoiam and its
              affiliates via Email, SMS, WhatsApp, and Voice Calls, even if my
              number is registered under DND/NDNC.
            </label>
          </div>

          <div className="flex justify-center pt-1 sm:pt-0">
            <button
              type="submit"
              className="bg-[#FF6501] text-white text-[14px] sm:text-[17px] font-semibold py-2 px-4 sm:px-24 rounded-[8px] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;