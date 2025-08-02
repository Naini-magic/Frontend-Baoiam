import React, { useState } from "react";
import mapImage from "../assets/ContactUS/map.png";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Footer from '../components/Footer/Footer'

const ContactUs = () => {
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
    "Xth standard": ["Maths", "Computer science"],
    "XIIth standard": [
      "Science",
      "Commerce",
      "Arts",
      "Others",
    ],
    "Under-Graduate": [
      "Bachelor's of Technology",
      "Bachelor's of Arts",
      "Bachelor's of Designing",
      "Bachelor's in Buisness Administration",
      "Bachelor's of Commerce",
      "Bachelor's of Communication",
      "Others",
    ],
    "Post-Graduate": [
      "Masters in Business Administration",
      "Master's in Communication",
      "Master's in Technology",
      "Master's in Business Management",
      "Others",
    ],
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-y-10 gap-x-8 p-8 max-w-[1300px] mx-auto bg-white sm:mt-10">
        {/* Left Column */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-[42px] font-bold text-gray-800">
            Get In <span className="text-orange-500">Touch With Us</span>
          </h1>
          <p className="text-black text-[20px] max-w-lg">
            Have any query, feedback, or need assistance? We're just a message
            away. Fill out the form below, and our team will get back to you
            shortly.
          </p>

          {/* Contact Info Card */}
          <div className="bg-white shadow-md rounded-2xl p-6 space-y-5 max-w-lg">
            <h3 className="text-2xl font-semibold text-black">
              Contact Information
            </h3>

            <div className="flex items-center gap-3 text-[18px] text-black">
              <MdEmail className="text-2xl" />
              <span>support@baoiam.com</span>
            </div>

            <div className="flex items-center gap-3 text-[18px] text-black">
              <MdPhone className="text-2xl" />
              <span>+91 9999999999</span>
            </div>

            <div className="flex items-center gap-3 text-[18px] text-black">
              <MdLocationOn className="text-2xl" />
              <span>B Block Noida Sector 15 Uttar Pradesh</span>
            </div>

            <img
              src={mapImage}
              alt="Map location"
              className="w-full h-[367px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full md:w-1/2 flex ">
          <div className="bg-white w-full max-w-xl p-6 rounded-[12px] shadow-md shadow-gray-400">
            <h2 className="text-[20px] sm:text-[24px] font-bold text-center mb-2 text-orange-500">
              Ready to enhance your skills?
            </h2>
            <p className="text-[13px] sm:text-[15px] text-center mb-4 text-[#545454]">
              Share your details and hear from us soon
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-[#333] mb-1"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm placeholder:text-[#9A9A9A]"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#333] mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm placeholder:text-[#9A9A9A]"
                  placeholder="Enter your E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label
                  htmlFor="mobileNumber"
                  className="block text-sm font-medium text-[#333] mb-1"
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  className="w-full px-3 py-2 border border-[#E0E0E0] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm placeholder:text-[#9A9A9A]"
                  placeholder="Enter your Mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                />
              </div>

              {/* Category 1 */}
              <div>
                <label
                  htmlFor="selectCategory1"
                  className="block text-sm font-medium text-[#333] mb-1"
                >
                  Education Qualification
                </label>
                <div className="relative">
                  <select
                    id="selectCategory1"
                    className="block w-full bg-white border border-[#E0E0E0] text-[#333] py-2 px-3 rounded-[8px] appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    value={category1}
                    onChange={(e) => {
                      setCategory1(e.target.value);
                      setCategory2("");
                    }}
                    required
                  >
                    <option value="" disabled hidden>
                      Select Program
                    </option>
                    <option value="Xth standard">Xth standard</option>
                    <option value="XIIth standard">XIIth standard</option>
                    <option value="Under-Graduate">
                      Under-Graduate
                    </option>
                    <option value="Post-Graduate">Post-Graduate</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-600">
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

              {/* Sub-category */}
              <div>
                <label
                  htmlFor="selectCategory2"
                  className="block text-sm font-medium text-[#333] mb-1"
                >
                  Stream
                </label>
                <div className="relative">
                  <select
                    id="selectCategory2"
                    className="block w-full bg-white border border-[#E0E0E0] text-[#333] py-2 px-3 rounded-[8px] appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    value={category2}
                    onChange={(e) => setCategory2(e.target.value)}
                    required
                    disabled={
                      !subCategories[category1] ||
                      subCategories[category1].length === 0
                    }
                  >
                    <option value="" disabled hidden>
                      {subCategories[category1]?.length > 0
                        ? "Please select a course"
                        : "No course available"}
                    </option>
                    {subCategories[category1]?.map((sub, idx) => (
                      <option key={idx} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-600">
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

              {/* Terms Checkbox */}
              <div className="flex items-start mt-1">
                <input
                  type="checkbox"
                  id="termsAgreement"
                  className="h-4 w-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500 mt-1 cursor-pointer"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                />
                <label
                  htmlFor="termsAgreement"
                  className="ml-2 text-xs text-gray-500 leading-snug cursor-pointer"
                >
                  I agree to receive updates and notifications from Baoiam and
                  its affiliates via Email, SMS, WhatsApp, and Voice Calls, even
                  if my number is registered under DND/NDNC.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#FF6501] w-full text-white text-sm sm:text-[16px] font-semibold py-2 px-4 rounded-[8px] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    <Footer/>
    </div>
  );
};

export default ContactUs;
