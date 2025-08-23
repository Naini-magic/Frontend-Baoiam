import React, { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import lightLogo from "../../assets/Home/Navbar/logoLight.webp";
import giftbox from "../../assets/Home/Navbar/gift.gif";
import { NavLink, Link, Links, useNavigate } from "react-router-dom";

import avatar1 from "../../assets/Home/Navbar/1.png";
import avatar2 from "../../assets/Home/Navbar/2.png";
import avatar3 from "../../assets/Home/Navbar/3.png";
import avatar4 from "../../assets/Home/Navbar/4.png";
import avatar5 from "../../assets/Home/Navbar/5.png";
import avatar6 from "../../assets/Home/Navbar/6.png";
import avatar7 from "../../assets/Home/Navbar/7.png";
import avatar8 from "../../assets/Home/Navbar/8.png";
import avatar9 from "../../assets/Home/Navbar/9.png";
import avatar10 from "../../assets/Home/Navbar/10.png";
import avatar11 from "../../assets/Home/Navbar/11.png";
import avatar12 from "../../assets/Home/Navbar/12.png";

const profileImages = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
];

const Navbar = ({ onSignUpClick, isLoggedIn, onLogout }) => {
  const [isKickstarterHovered, setIsKickstarterHovered] = useState(false);
  const [isCompanyHovered, setIsCompanyHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [mobileKickstarterOpen, setMobileKickstarterOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [openSubcategory, setOpenSubcategory] = useState(null);
  const navigate = useNavigate(); 
  const [showProfileDropdown, setShowProfileDropdown] = useState(false); 
  const [isProgramsHovered, setIsProgramsHovered] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  const kickstarterCourses = {
    "Success Fusion Program": [
      "Data Science",
      "Data Analysis",
      "Digital Marketing",
      "UI/UX & Prototyping",
      "AI basics for beginners",
      "Entrepreneurship",
    ],
    "Udaan 90": [
      "SEO",
      "Graphic Designing",
      "Video Editing",
      "Social Media Marketing",
      "Front-End Dev",
      "Java",
      "Excel",
      "Python",
      "Cyber Security",
      "Marketing",
      "Soft Skills",
      "Product Design",
      "AI & ML",
      "Startup",
      "Public Speaking",
    ],
    "AI & ML": [
      "Deep Learning with TensorFlow & PyTorch",
      "Prompt Engineering",
      "Generative AI",
      "Natural Language Processing",
      "Applied Machine Learning",
    ],
  };

  const handleLogout = () => {
    onLogout();
    setShowProfileDropdown(false);
    navigate("/");
  };

  const [profileImage] = useState(() => {
    const randomIndex = Math.floor(Math.random() * profileImages.length);
    return profileImages[randomIndex];
  });

  return (
    <>
      <nav className="sticky top-[20px] z-50 mx-auto mt-[20px] max-w-[1340px] h-[80px] bg-[#FFFAF7] rounded-[50px] shadow-md flex items-center justify-between px-[20px] sm:pr-[40px] sm:pl-[40px] font-['Poppins']">
        {/* Left */}
        <div className="flex items-center sm:ml-5 hover:border hover:rounded-lg hover:border-gray-300">
          <Link to="/">
            <img
              src={lightLogo}
              alt="Baoiam"
              className="h-[55px] w-[85px] sm:h-[60px] sm:w-[95px] md:h-[70px] md:w-[115px] p-1"
            />
          </Link>
        </div>

        {/* Center Desktop Menu */}
        <div className="hidden md:flex justify-center items-center">
          <ul className="flex space-x-[33px] text-black text-[18px] ml-4">
            <li className="relative inline-block">
              <NavLink
                to="/PAP"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 underline decoration-orange-500 underline-offset-4"
                    : "hover:text-orange-500"
                }
              >
                PAP
              </NavLink>
            </li>
            <li
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsKickstarterHovered(true)}
              onMouseLeave={() => {
                setIsKickstarterHovered(false);
                setSelectedCategory(null);
              }}
            >
              <span className="flex items-center hover:text-orange-500">
                Kickstarter courses
                {isKickstarterHovered ? (
                  <FaChevronUp className="ml-2 text-black" size={14} />
                ) : (
                  <FaChevronDown className="ml-2 text-black" size={14} />
                )}
              </span>

              {isKickstarterHovered && (
                <div className="absolute text-black py-2 w-66 rounded shadow-lg z-20 border border-gray-100 bg-white">
                  {Object.entries(kickstarterCourses).map(
                    ([category, subcategories]) => (
                      <div key={category} className="border-b border-gray-200">
                        <button
                          className="flex justify-between items-center w-full px-2 py-2 hover:bg-gray-100 text-[16px]"
                          onClick={() =>
                            setSelectedCategory(
                              selectedCategory === category ? null : category
                            )
                          }
                        >
                          {category}
                          <span>
                            {selectedCategory === category ? (
                              <FaChevronUp size={14} />
                            ) : (
                              <FaChevronDown size={14} />
                            )}
                          </span>
                        </button>
                        {selectedCategory === category && (
                          <ul className="px-4 py-1">
                            {subcategories.map((sub, index) => (
                              <li
                                key={index}
                                className="py-1 pl-2 hover:bg-orange-500 hover:text-white cursor-pointer rounded text-[14px]"
                              >
                                {sub}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
            </li>

            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setIsProgramsHovered(true)}
              onMouseLeave={() => setIsProgramsHovered(false)}
            >
              <span className="flex items-center hover:text-orange-500">
                Programs
                {isProgramsHovered ? (
                  <FaChevronUp className="ml-2 text-black" size={14} />
                ) : (
                  <FaChevronDown className="ml-2 text-black" size={14} />
                )}
              </span>

              {isProgramsHovered && (
                <ul className="absolute bg-white text-black py-2 w-56 rounded shadow-lg z-10 text-[16px]">
                  <Link to="/Udaan90">
                    <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                      Udaan 90
                    </li>
                  </Link>
                  <Link to="/Successfusion">
                    <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                      Success Fusion
                    </li>
                  </Link>
                  <Link to="/AIML">
                    <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                      AI & ML
                    </li>
                  </Link>
                </ul>
              )}
            </li>

            <li className="relative inline-block">
              <NavLink
                to="/pride"
                className={({ isActive }) =>
                  isActive
                    ? `relative inline-block font-poppins font-normal text-[18px] leading-none
                      text-orange-500 underline decoration-orange-500 underline-offset-4`
                    : `relative inline-block font-poppins font-normal text-[18px] leading-none
                      bg-clip-text text-transparent
                      bg-gradient-to-r from-[#110028] via-[#F1EAF9] to-[#8A38F5] to-75%
                      bg-[length:400%_auto]
                      animate-gradient
                      hover:text-orange-500`
                }
              >
                Pride
              </NavLink>
            </li>

            <li className="relative inline-block">
              <NavLink
                to="/refer&earn"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center gap-2 text-orange-500 underline decoration-orange-500 underline-offset-4"
                    : "flex items-center gap-2 hover:text-orange-500"
                }
              >
                <img
                  src={giftbox}
                  alt="Referral Animation"
                  className="w-5 h-6"
                />
                <span>Refer & Earn</span>
              </NavLink>
            </li>

            {/* <li className="hover:text-orange-500">Success Stories</li> */}

            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setIsCompanyHovered(true)}
              onMouseLeave={() => setIsCompanyHovered(false)}
            >
              <span className="flex items-center hover:text-orange-500">
                Company
                {isCompanyHovered ? (
                  <FaChevronUp className="ml-2 text-black" size={14} />
                ) : (
                  <FaChevronDown className="ml-2 text-black" size={14} />
                )}
              </span>

              {isCompanyHovered && (
                <ul className="absolute bg-white text-black py-2 w-48 rounded shadow-lg z-10 text-[16px]">
                  <Link to="/aboutUs">
                    <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                      About Us
                    </li>
                  </Link>
                  <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                    Success Stories
                  </li>
                  <li className="px-4 py-2 hover:bg-orange-500 hover:text-white">
                    Press
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block">
            <IoMoon className="w-6 h-6 text-gray-800" />
          </button>

          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-[80px]  rounded-full object-cover"
                />
              </button>
              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white"
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white"
                    onClick={() => setShowProfileDropdown(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-500 hover:text-white"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={onSignUpClick}
              className="hidden md:inline-block bg-orange-500 text-white px-[20px] py-1 rounded-full text-16vw hover:text-orange-500 hover:bg-orange-50 border-2 border-orange-500"
            >
              Sign up
            </button>
          )}

          {/* Hamburger for mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-8 h-8 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[100px] left-0 w-full  shadow-lg rounded-xl z-40">
          <ul className="flex flex-col space-y-4 p-6 text-black text-[16px] font-['Poppins'] bg-[#FFFAF7] ">
            <NavLink
              to="/PAP"
              className="flex items-center gap-2 hover:text-orange-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <li className="hover:text-orange-500">PAP</li>
            </NavLink>
            {/* Kickstarter courses dropdown for mobile */}
            <li>
              <div
                className="flex items-center hover:text-orange-500 cursor-pointer"
                onClick={() => setMobileKickstarterOpen(!mobileKickstarterOpen)}
              >
                Kickstarter courses
                {mobileKickstarterOpen ? (
                  <FaChevronUp className="ml-2" size={14} />
                ) : (
                  <FaChevronDown className="ml-2" size={14} />
                )}
              </div>
              {mobileKickstarterOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {Object.entries(kickstarterCourses).map(
                    ([category, subcategories]) => (
                      <div key={category}>
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() =>
                            setOpenSubcategory(
                              openSubcategory === category ? null : category
                            )
                          }
                        >
                          {category}
                          {openSubcategory === category ? (
                            <FaChevronUp className="ml-2" size={12} />
                          ) : (
                            <FaChevronDown className="ml-2" size={12} />
                          )}
                        </div>
                        {openSubcategory === category && (
                          <ul className="ml-4 mt-1 space-y-1">
                            {subcategories.map((sub, index) => (
                              <li
                                key={index}
                                className="py-1 pl-2 hover:text-orange-500"
                              >
                                {sub}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
            </li>
            {/* Programs dropdown for mobile */}
            <li>
              <div
                className="flex items-center hover:text-orange-500 cursor-pointer"
                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
              >
                Programs
                {mobileProgramsOpen ? (
                  <FaChevronUp className="ml-2" size={14} />
                ) : (
                  <FaChevronDown className="ml-2" size={14} />
                )}
              </div>
              {mobileProgramsOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <Link to="/Udaan90" onClick={() => setMobileMenuOpen(false)}>
                    <li className="hover:text-orange-500">Udaan 90</li>
                  </Link>
                  <Link
                    to="/Successfusion"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <li className="hover:text-orange-500">Success Fusion</li>
                  </Link>
                  <Link to="/AIML" onClick={() => setMobileMenuOpen(false)}>
                    <li className="hover:text-orange-500">AI & ML</li>
                  </Link>
                </ul>
              )}
            </li>

            {/* Pride with gradient effect */}
            <li>
              <NavLink
                to="/pride"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 underline decoration-orange-500 underline-offset-4"
                    : "bg-clip-text text-transparent bg-gradient-to-r from-[#110028] via-[#F1EAF9] to-[#8A38F5] to-75% bg-[length:400%_auto] animate-gradient hover:text-orange-500"
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Pride
              </NavLink>
            </li>

            <NavLink
              to="/refer&earn"
              className="flex items-center gap-2 hover:text-orange-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <li className="flex items-center gap-2">
                <img
                  src={giftbox}
                  alt="Referral Animation"
                  className="w-5 h-6"
                />
                <span>Refer & Earn</span>
              </li>
            </NavLink>

            {/* <li className="hover:text-orange-500">Success Stories</li> */}

            {/* Company dropdown for mobile */}
            <li>
              <div
                className="flex items-center hover:text-orange-500 cursor-pointer"
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              >
                Company
                {mobileCompanyOpen ? (
                  <FaChevronUp className="ml-2" size={14} />
                ) : (
                  <FaChevronDown className="ml-2" size={14} />
                )}
              </div>
              {mobileCompanyOpen && (
                <ul className="ml-4 mt-2 space-y-2">
                  <Link to="/aboutUs">
                    <li className="hover:text-orange-500">About Us</li>
                  </Link>
                  <li className="hover:text-orange-500">Success Stories</li>
                  <li className="hover:text-orange-500">Press</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
