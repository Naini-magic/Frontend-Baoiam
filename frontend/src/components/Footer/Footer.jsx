// import React from 'react';
// import logo from '../../assets/logoLight.png';
// import { FaFacebookF,  FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube,FaArrowRight  } from "react-icons/fa";
// import applelogo from '../../assets/Footer/Footer2/apple-1.png'; // Assuming you have a download image
// import googlelogo from '../../assets/Footer/Footer2/google-1.png'; // Assuming you have a download image

// const Footer = () => {
//   return (

//     <footer className="bg-gray-900 text-white ">

//         <div className="flex flex-row">

//         {/* Left Section */}
//         <div className="mr-20 p-6 max-w-md  ml-10">
//             <img src={logo} alt="Baoiam Logo" className="h-[70px] w-[91px]" />
//           <p className="  text-base text-justify ">
//             Follow us for the latest updates, career insights, and program launches.
//           </p>
//             <div className="flex space-x-4 mt-4">
//                 <a href="https://www.facebook.com/baoiam" target="_blank" rel="noopener noreferrer"  className="bg-gray-800 p-3 square-full text-white hover:bg-orange-500 transition-colors"> <FaFacebookF size={20} /> </a>
//                 <a href="https://www.instagram.com/baoiam" target="_blank" rel="noopener noreferrer"  className="bg-gray-800 p-3 square-full text-white hover:bg-orange-500 transition-colors"> <FaInstagram size={20} /> </a>
//                 <a href="https://www.instagram.com/baoiam" target="_blank" rel="noopener noreferrer"  className="bg-gray-800 p-3 square-full text-white hover:bg-orange-500 transition-colors"><FaLinkedinIn size={20}/></a>
//                  <a href="https://www.instagram.com/baoiam" target="_blank" rel="noopener noreferrer"  className="bg-gray-800 p-3 square-full text-white hover:bg-orange-500 transition-colors"><FaTwitter size={20}/></a>
//                 <a href="https://www.linkedin.com/company/baoiam" target="_blank" rel="noopener noreferrer"  className="bg-gray-800 p-3 square-full text-white hover:bg-orange-500 transition-colors"><FaYoutube size={20}/></a>
//                 </div>

//         </div>

//      <div className="p-8 text-sm  mx-auto">
//         <h5>TOP 4 CATAGORY</h5>
//      <ul className="mt-2 space-y-6">
//           <li className=" text-gray-500  ">Udsan 90</li>
//           <li className=" text-gray-500">Success Fusion Program</li>
//           <li className=" text-gray-500">Pay after Placement</li>
//           <li className=" text-gray-500">Pride Fusion</li>
//         </ul>

//     </div>

//      <div className="p-8 text-sm max-w-6xl mx-auto">
//   <h5>QUICK LINKS</h5>
//   <ul className="mt-4 space-y-6 text-gray-500">
//     {[
//       { label: "About", href: "#" },
//       { label: "Become Instructor", href: "#" },
//       { label: "Contact", href: "#" },
//       { label: "GCEP", href: "#" },
//     ].map((item, index) => (
//       <li key={index}>
//         <a
//           href={item.href}
//           className="group inline-flex items-center justify-between transition-all duration-200 hover:text-white hover:underline hover:decoration-orange-500"
//         >
//           <span>{item.label}</span>
//           <FaArrowRight
//             className="ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
//           />
//         </a>
//       </li>
//     ))}
//   </ul>
// </div>

//  <div className="p-8 text-sm max-w-6xl mx-auto">
//   <h5>SUPPORT</h5>
//   <ul className="mt-4 space-y-6 text-gray-500">
//     <li><a href='' className="hover:underline hover:decoration-orange-500 hover:text-white ">Help Center</a></li>
//     <li><a href='' className="hover:underline hover:decoration-orange-500 hover:text-white">FAQS</a></li>
//     <li><a href='' className="hover:underline hover:decoration-orange-500 hover:text-white">Term & Condition</a></li>
//     <li><a href='' className="hover:underline hover:decoration-orange-500 hover:text-white">Privcy & Policy</a></li>
//   </ul>
// </div>

//     <div className="p-8 text-sm max-w-6xl mx-auto">
//         <h5>DOWNLOAD OUR APP</h5>
//          <a href="https://play.google.com/store" target="_blank">
//       <img src={googlelogo } className='h-12 w-40 mt-4'/>
//     </a>

//     <a href="https://play.google.com/store" target="_blank">
//       <img src={applelogo } className='h-14 w-40 mt-4'/>
//     </a>

//     </div>

//       </div>

//  <hr className="w-full border-t border-gray-700 mt-2" />

// <div className="ml-10 px-6 py-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
//   {/* Copyright */}
//   <p >
//     © 2021 - Designed by <span className="text-gray-200">Baoiam.</span> All rights reserved.
//   </p>

//   {/* Language Selector */}
//   <div className="mr-8">
//     <label htmlFor="language" className="text-gray-400"></label>
//     <select
//       id="language"
//       name="language"
//       className="bg-gray-800 text-white px-8 py-3  rounded border border-gray-600"
//     >
//       <option>English</option>
//       <option>Hindi</option>
//       <option>Marathi</option>
//       <option>Bengali</option>
//     </select>
//   </div>
// </div>

//     </footer>
//   );
// };

// export default Footer;

import logo from "../../assets/logoLight.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import applelogo from "../../assets/Footer/Footer2/apple.png"; // Assuming you have a download image
import googlelogo from "../../assets/Footer/Footer2/google.png"; // Assuming you have a download image

// Reusable link section component
const FooterLinksSection = ({ heading, items }) => {
  return (
    <div className="text-sm font-['Poppins']">
      <h5 className="text-white mb-6">{heading}</h5>
      <ul className="space-y-2 text-gray-500">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="group inline-flex items-center justify-between transition-all duration-200 hover:text-white hover:underline hover:decoration-orange-500"
            >
              <span>{item.label}</span>
              <FaArrowRight className="ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const footerData = [
    {
      heading: "TOP 4 CATEGORY",
      items: [
        { label: "Udaan 90", href: "#" },
        { label: "Success Fusion Program", href: "#" },
        { label: "Pay after Placement", href: "#" },
        { label: "Pride Fusion", href: "#" },
      ],
    },
    {
      heading: "QUICK LINKS",
      items: [
        { label: "About", href: "#" },
        { label: "Become Instructor", href: "#" },
        { label: "Contact", href: "#" },
        { label: "GCEP", href: "#" },
      ],
    },
    {
      heading: "SUPPORT",
      items: [
        { label: "Help Center", href: "#" },
        { label: "FAQS", href: "#" },
        { label: "Terms & Condition", href: "#" },
        { label: "Privacy  Policy", href: "#" },
      ],
    },
  ];

  return (
    // <footer className="text-gray-500 px-28 pt-5 bg-[#1D2026] font-['Poppins']">
    //   {/* Top Footer */}
    //   <div className="flex flex-wrap justify-between gap-8 ">
    //     {/* Logo + Social */}
    //     <div className="max-w-sm">
    //       <img
    //         src={logo}
    //         alt="Baoiam Logo"
    //         className="h-[70px] w-[91px] mb-1"
    //       />
    //       <p className="text-base text-justify mb-4">
    //         Follow us for the latest updates, career insights, and program
    //         launches.
    //       </p>
    //       <div className="flex space-x-3">
    //         {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube].map(
    //           (Icon, i) => (
    //             <a
    //               key={i}
    //               href="#"
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className={`p-3 text-white transition-colors ${
    //                 Icon === FaLinkedinIn
    //                   ? "bg-orange-500 hover:bg-orange-600"
    //                   : "bg-[#363B4766] hover:bg-orange-500"
    //               }`}
    //             >
    //               <Icon size={18} />
    //             </a>
    //           )
    //         )}
    //       </div>
    //     </div>

    //     {/* Dynamic Sections */}
    //     {footerData.map((section, index) => (
    //       <FooterLinksSection
    //         key={index}
    //         heading={section.heading}
    //         items={section.items}
    //       />
    //     ))}

    //     {/* App Download */}
    //     <div className="text-sm">
    //       <h5 className="text-white mb-6">DOWNLOAD OUR APP</h5>
          
    //       <a href="https://play.google.com/store" target="_blank">
    //         <img src={applelogo} alt="App Store" className="h-[58px] w-40" />
    //       </a>
    //       <a href="https://play.google.com/store" target="_blank">
    //         <img
    //           src={googlelogo}
    //           alt="Google Play"
    //           className="h-[58px] w-40 mt-4"
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   {/* Divider */}
    //   <div className="-mx-28 mt-18">
    //     <hr className="w-full border-t border-gray-700" />
    //   </div>

    //   {/* Bottom Footer */}
    //   <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
    //     <p>
    //       © 2021 - Designed by <span className="text-gray-200">Baoiam.</span>{" "}
    //       All rights reserved.
    //     </p>

    //     <div>
    //       <select
    //         name="language"
    //         className="bg-[#1D2026]  py-2 border-[#363B47] border-[1px] flex justify-between w-[140px] p-2 text-gray-500"
    //       >
    //         <option>English</option>
    //         <option>Hindi</option>
    //         <option>Marathi</option>
    //         <option>Bengali</option>
    //       </select>
    //     </div>
    //   </div>
    // </footer>
  
  <footer className="text-gray-500 px-4 md:px-28 pt-5 bg-[#1D2026] font-['Poppins']">
  {/* Top Footer */}
  <div className="flex flex-wrap justify-between gap-8">
    {/* Logo + Social */}
    <div className="max-w-sm">
      <img
        src={logo}
        alt="Baoiam Logo"
        className="h-[72px] w-[100px] mb-1"
      />
      <p className="text-base text-justify mb-4">
        Follow us for the latest updates, career insights, and program
        launches.
      </p>
      <div className="flex space-x-3">
        {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube].map(
          (Icon, i) => (
            <a
              key={i}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 text-white transition-colors 
                bg-[#363B4766] hover:bg-orange-500
              `}
            >
              <Icon size={18} />
            </a>
          )
        )}
      </div>
    </div>

    {/* Dynamic Sections */}
    {footerData.map((section, index) => (
      <FooterLinksSection
        key={index}
        heading={section.heading}
        items={section.items}
      />
    ))}

    {/* App Download */}
    <div className="text-sm">
      <h5 className="text-white mb-6">DOWNLOAD OUR APP</h5>
      
      <a href="https://play.google.com/store" target="_blank">
        <img src={applelogo} alt="App Store" className="h-[58px] w-40" />
      </a>
      <a href="https://play.google.com/store" target="_blank">
        <img
          src={googlelogo}
          alt="Google Play"
          className="h-[58px] w-40 mt-4"
        />
      </a>
    </div>
  </div>

  {/* Divider */}
  <div className="-mx-4 md:-mx-28 mt-18">
    <hr className="w-full border-t border-gray-700" />
  </div>

  {/* Bottom Footer */}
  <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4 pb-12">
    <p>
      © 2021 - Designed by <span className="text-gray-200">Baoiam.</span>{" "}
      All rights reserved.
    </p>

    <div>
      <select
        name="language"
        className="bg-[#1D2026] py-2 border-[#363B47] border-[1px] flex justify-between w-[140px] p-2 text-gray-500"
      >
        <option>English</option>
        <option>Hindi</option>
        <option>Marathi</option>
        <option>Bengali</option>
      </select>
    </div>
  </div>
</footer>

  
  );
};

export default Footer;
