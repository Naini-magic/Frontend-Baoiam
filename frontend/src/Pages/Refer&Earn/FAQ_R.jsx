import { useState } from "react";
import { FaPlus, FaTimes, FaArrowRight } from "react-icons/fa";

const FAQ_R = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

const faqData = [
  {
    question: "How do I start referring people?",
    answer:
      "Log into your account, look for “Refer & Earn,” and turn it on. That’s all it takes.",
  },
  {
    question: "Will I get a code to send to others?",
    answer:
      "Yes. As soon as you activate the feature, your personal referral code will show up on your screen.",
  },
  {
    question: "Can I share my code with anyone?",
    answer:
      "You can send it to anyone who hasn’t signed up yet. It won’t work for someone who already has an account.",
  },
  {
    question: "What does the person I refer receive?",
    answer:
      "When they sign up and buy a course using your code, they’ll get a discount right away.",
  },
  {
    question: "What do I get in return?",
    answer:
      "You’ll earn a reward every time someone makes a purchase through your code. It goes straight to your account.",
  },
  {
    question: "How many people can I refer?",
    answer: "There’s no limit. Share it with as many people as you’d like.",
  },
  // {
  //   question: "Where do I check what I’ve earned?",
  //   answer:
  //     "Your referral earnings show up in your dashboard. You can check anytime.",
  // },
  // {
  //   question: "Can I see who used my referral code?",
  //   answer:
  //     "Yes. Your dashboard keeps track of how many people signed up using your link and what you’ve earned from them.",
  // },
  // {
  //   question: "Do the rewards disappear if I don’t use them?",
  //   answer:
  //     "No. They stay in your account until you decide to use them. There’s no time limit.",
  // },
  // {
  //   question: "What if someone forgets to enter my code?",
  //   answer:
  //     "If the code isn’t used during sign-up or checkout, it can’t be applied afterward. Make sure they add it right away.",
  // },
];


  const leftFaqs = faqData.slice(0, 3);
  const rightFaqs = faqData.slice(3);

     const renderFAQItem = (item, index) => (
    <div
      key={index}
      className={`rounded-lg text-[18px] font-med overflow-hidden shadow-sm transition-all duration-300 p-2 mb-4 ${
        openIndex === index ? "bg-white shadow" : "bg-white"
      }`}
      style={{ minHeight: openIndex === index ? "auto" : "80px" }}
    >
      <button
        onClick={() => toggleIndex(index)}
        className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-900 font-medium focus:outline-none transition text-[16px] sm:text-[20px]"
      >
        <span>{item.question}</span>
        {openIndex === index ? (
          <span className="w-[44px] h-[44px] p-[10px] rounded-[6px] bg-[#FFF4E5] flex items-center justify-center">
            <FaTimes className="text-gray-600 sm:text-xl" />
          </span>
        ) : (
          <span className="w-[44px] h-[44px] p-[10px] rounded-[6px] bg-[#FFF4E5] flex items-center justify-center">
            <FaPlus className="text-gray-600 sm:text-xl" />
          </span>
        )}
      </button>
      {openIndex === index && (
        <div className="px-5 pb-4 text-gray-700 text-sm border-t border-gray-300">
          <p className="mb-3 mt-4 sm:text-[18px]">{item.answer}</p>
          {/* <div className="bg-gray-100 mt-3 border-gray-200 p-2 sm:p-4 rounded-lg flex items-center justify-between">
            <p className="text-[12px]  sm:text-[16px] font-medium">
              Enrollment Process for the Program
            </p>
            <button className="flex items-center justify-center rounded-full bg-white p-4">
              <FaArrowRight className="text-[11px] sm:text-[16px]" />
            </button>
          </div> */}
          {item.button && (
            <a
              href={item.button.link}
              className="inline-flex items-center text-blue-600 hover:underline text-sm font-medium mt-3"
            >
              {item.button.text}
              <span className="ml-2">→</span>
            </a>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full lg:mb-16 p-8 font-['Poppins'] ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[24px] md:text-4xl font-bold text-gray-900 mb-3 text-center">
          Still have of being  {" "}
          <span className="text-orange-500">a Doubts?</span>
        </h2>
        <p className="text-center mb-8 text-[12px] sm:text-[18px]">
         We have answered some of the frequently asked questions for you!
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="md:w-1/2">
            {leftFaqs.map((item, index) => renderFAQItem(item, index))}
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            {rightFaqs.map((item, index) => renderFAQItem(item, index + 3))}
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button className="mt-4 px-5 py-2 border rounded-md bg-gray-200 border-gray-300 hover:bg-gray-100 transition">
            See All FAQ’s
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ_R;
