import React, { useState } from 'react';
import Navbar from '../../components/Home/Navbar.jsx';
import AuthModal from "../../components/Auth/AuthModal.jsx"
import ContactForm from "../../Pages/ContactForm";

import img1 from "../../assets/AboutUs/img1.jpg";


const Header = () => {
  const [showModal, setShowModal] = useState(false);
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
    <div className="bg-white text-[#333] mb-4">
      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />

      <div className="w-full h-auto mx-auto shadow-md overflow-hidden">
        <div className="relative h-[80vh]">
          {/* Fixed Navbar */}
          <div className="fixed top-0 left-0 w-full z-30">
            <Navbar 
              onSignUpClick={() => setIsAuthModalOpen(true)}
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
            />
          </div>

          {/* Rest of your existing Header content */}
               <div className="relative w-full h-full">
            <img
              src={img1}
              alt="Header"
              className="w-full h-full object-cover block"
            />

            {/* Orange Gradient */}
            <div className="absolute inset-0 bg-[#FF7C27] opacity-50"></div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>

          {/* Centered Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4 mt-12">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Giving Students Opportunities,  <br className="hidden sm:block" />
              Experience and Skills
            </h1>

            <p className="mt-4 sm:mt-6 max-w-md sm:max-w-xl text-sm sm:text-base md:text-lg">
              We emphasize hands-on learning that promotes genuine <br className="hidden sm:block" />
              developement and professional success.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full  hover:text-orange-500 hover:bg-amber-100 border-orange-500 transition duration-200 w-full sm:w-auto">
                Apply Now →
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-600 transition duration-200 w-full sm:w-auto"
              onClick={() => setShowModal(true)}>
                Talk to our Counsellor
              </button>
              {showModal && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50"
                    onClick={() => setShowModal(false)}
                  >
                    <div
                      className="relative max-w-xl w-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ContactForm onClose={() => setShowModal(false)} />
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;