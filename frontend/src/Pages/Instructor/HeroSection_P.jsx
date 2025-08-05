import React, { useState } from "react";
import Navbar from "../../components/Home/Navbar.jsx";
import AuthModal from "../../components/Auth/AuthModal.jsx";
import img1 from "../../assets/Instructor/instructor.jpg";
import { FaCheck } from "react-icons/fa";

const HeroSection_P = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="bg-white text-[#333] mb-4 font-['Poppins']">
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />

      <div className="w-full h-auto mx-auto shadow-md overflow-hidden">
        <div className="relative h-[100vh]">
          {/* Fixed Navbar */}
          <div className="fixed top-0 left-0 w-full z-30">
            <Navbar 
              onSignUpClick={() => setIsAuthModalOpen(true)}
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
            />
          </div>

          {/* Image with Gradient Overlays */}
          <div className="relative w-full h-full">
            <img
              src={img1}
              alt="Header"
              className="w-full h-full object-cover block"
            />

            {/* Orange Gradient */}
            <div className="absolute inset-0 bg-[#FF7C27] opacity-20"></div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          {/* Centered Content from Screenshot */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8 z-20 mt-16">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-8 mt-6">
              Share Your <span className="text-orange-500">Expertise.</span>{" "}
              Inspire <span className="text-orange-500">Learners.</span>
            </h1>
            <p className="text-sm md:text-[24px] max-w-3xl mb-6">
              Join a growing network of passionate educators, and get paid to
              share your knowledge.
            </p>
            <a
              href="https://forms.gle/WA4dCNUeGSzWsrpF7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-[20px] md:text-[25px] px-4 md:px-8 py-2 rounded-md mb-8 hover:bg-amber-400">
                Apply Now
              </button>
            </a>

            {/* Benefits Card */}
            <div className="bg-white bg-opacity-90 text-black p-4 rounded-xl shadow-lg w-full max-w-sm mx-auto text-center mt-4">
              <h2 className="text-[24px] font-semibold mb-4">Benefits:</h2>
              <ul className="list-none space-y-2 text-md font-medium text-left">
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-600 mt-1" />
                  <span>Flexible teaching schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-600 mt-1" />
                  <span>Access to a wide learner base</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-600 mt-1" />
                  <span>Personalized support from our team</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheck className="text-green-600 mt-1" />
                  <span>Competitive payouts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection_P;
