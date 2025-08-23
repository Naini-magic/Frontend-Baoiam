import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import "../../index.css";
// Import images properly (recommended approach)
import Akshat from "../../assets/Home/TeamSection/1.webp";
import Akash from "../../assets/Home/TeamSection/2.webp";
import Gautami from "../../assets/Home/TeamSection/3.png";
import Dev from "../../assets/Home/TeamSection/4.webp";
import Siddhart from "../../assets/Home/TeamSection/5.webp";
import Sudhanshu from "../../assets/Home/TeamSection/6.webp";
import Virat from "../../assets/Home/TeamSection/22.png";
import Virender from "../../assets/Home/TeamSection/8.webp";
import Toshika from "../../assets/Home/TeamSection/9.webp";
import Bonnya from "../../assets/Home/TeamSection/10.webp";
import Madhav from "../../assets/Home/TeamSection/21.png";
import Ayush from "../../assets/Home/TeamSection/12.webp";
import Nakshatra from "../../assets/Home/TeamSection/13.png";
import Archana from "../../assets/Home/TeamSection/16.png";
import Neeraj from "../../assets/Home/TeamSection/25.png";
import Mohini from "../../assets/Home/TeamSection/14.png";

import HeadingImage from "../Lines/HeadingImages";


const TeamSection = () => {
  const gradients = [
  "bg-[linear-gradient(180deg,#1C1C1C_0%,#FFFFFF00_40%)] bg-white",
];

  const solidColors = [
    "bg-[#1B1B1B]",
  ];

  const members = [
    {
      name: "Siddhart Tomar",
      position: "Founder & CEO",
      linkedin: " https://www.linkedin.com/in/siddharth-tomar-6b7b981b9",
      image: Siddhart,
    },
    {
      name: "Virender Singh",
      position: "Ops Head",
      linkedin: "linkedin.com/in/virender-singh-139854211",
      image: Virender,
    },
    {
      name: "Virat Locham",
      position: "Sales Head",
      linkedin: "linkedin.com/in/virat-locham-0020b1144",
      image: Virat,
    },
    {
      name: "Toshika Bagga",
      position: "HR Manager",
      linkedin: " https://www.linkedin.com/in/toshika-bagga-901aaa215",
      image: Toshika,
    },

    {
      name: "Sudhanshu Mohan",
      position: "Co-founder",
      linkedin: " https://www.linkedin.com/in/sudhanshu-mohan-aab37522a",
      image: Sudhanshu,
    },

    {
      name: "Bonnya Kar",
      position: "Community Partner",
      linkedin: "linkedin.com/in/bonnya-kar🏳‍🌈🏳‍⚧-333274276",
      image: Bonnya,
    },
    {
      name: "Madhav Sharma",
      position: "Sr. Legal Advisor",
      linkedin: "https://www.linkedin.com/in/Madhav-profile",
      image: Madhav,
    },
    
    {
      name: "Akash Raut",
      position: "HR Executive",
      linkedin: "linkedin.com/in/akash-raut-a58688170",
      image: Akash,
    },

    {
      name: "Mohini",
      position: "HR Intern",
      linkedin: "linkedin.com/in/mohini-0b1a5b1b6",
      image: Mohini,
    },

    {
      name: "Akshat Tiwari",
      position: "Product Manager",
      linkedin: "https://www.linkedin.com/in/akshat-tiwari-092560213",
      image: Akshat,
    },
    {
      name: "Dev Kumar",
      position: "Product Manager",
      linkedin: "https://www.linkedin.com/in/dev-kumar-974b90313/",
      image: Dev,
    },

    {
      name: "Nakshatra Joshi",
      position: "Software Developer",
      linkedin: "https://www.linkedin.com/in/nakshatra-joshi-97a773212",
      image: Nakshatra,
    },

    {
      name: "Gautami Potdar",
      position: "UI/UX Developer",
      linkedin: "https://www.linkedin.com/in/gautami-potdar",
      image: Gautami,
    },

    {
      name: "Archana Singh",
      position: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/archana-singh-453456249",
      image: Archana,
    },

    {
      name: "Neeraj Singh",
      position: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/neeraj-singh-58379a1ba",
      image: Neeraj,
    },
    
  ];



  const renderMemberCard = (member, index) => (
     <div
    key={`${member.name}-${index}`}
    className={`flex-shrink-0 w-48 sm:w-56 md:w-64 mx-2 sm:mx-3 md:mx-4 flex flex-col items-center p-4 sm:p-5 md:p-6 ${
      gradients[index % gradients.length]
    } rounded-lg`}
  >
      <div className="text-center w-full mb-4 sm:mb-5 md:mb-6">
        <h1 className="font-bold text-sm sm:text-base md:text-xl text-gray-200">
          {member.name}
        </h1>
        <p className="text-gray-200 mt-1 text-xs sm:text-sm md:text-base">
          {member.position}
        </p>
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 sm:mt-2 inline-block text-blue-600 hover:text-blue-800"
          >
            <FaLinkedin className="text-lg sm:text-xl md:text-2xl" />
          </a>
        )}
      </div>

      <div
        className={`w-[150px] h-[180px] sm:w-[180px] sm:h-[220px] md:w-[230px] md:h-[280px] overflow-hidden rounded-full ${
          solidColors[index % solidColors.length]
        } flex items-start justify-center pt-2 sm:pt-3 md:pt-4`}
      >
        <img
          className="w-[150px] h-[180px] sm:w-[180px] sm:h-[220px] md:w-[230px] md:h-[300px] mt-2 sm:mt-3 overflow-hidden object-cover rounded-full"
          src={member.image}
          alt={member.name}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white py-6 sm:py-8 md:py-10 pb-10 sm:pb-12 md:pb-14 px-4 sm:px-6 lg:px-8 font-['Poppins']">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
        <HeadingImage title="Our" highlight="Team"/>
        <p className="text-base sm:text-xl md:text-[24px] text-black mx-auto">
          Experts who guide, Mentors who matter. We teach what you own.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden h-[300px] sm:h-[350px] md:h-[450px]">
        <div className="absolute flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-shrink-0"
          >
            {members.map((member, index) => renderMemberCard(member, index))}
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-shrink-0"
          >
            {members.map((member, index) => renderMemberCard(member, index))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;