import { useState } from "react";
import { FaPlus, FaTimes, FaArrowRight } from "react-icons/fa";

const FAQ_C = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

 const faqData = [
  {
    question: "1. What is this Data Science course all about?",
    answer: `This course takes you from the basics to advanced concepts of working with data. You’ll learn how to collect, clean, and analyze data, uncover patterns, and solve real-world problems using tools like Python, SQL, and machine learning—all in a practical, beginner-friendly way.`,
  },
  {
    question: "2. Who should take this course?",
    answer: `Anyone curious about data or looking to start a tech career. No prior experience in coding or data is needed—we start from scratch and guide you step by step.`,
  },
  {
    question: "3. Will I get help finding a job after the course?",
    answer: `Yes! We’ll support you with resume building, mock interviews, and help you connect with companies looking for data-savvy professionals.`,
  },
  {
    question: "4. How long does it take to finish?",
    answer: `Most learners complete it in 3 to 6 months, depending on how much time you can commit. It’s flexible enough to fit alongside work or studies.`,
  },
  {
    question: "5. Do I get a certificate?",
    answer: `Absolutely. On successful completion, you’ll receive a certificate that proves you have job-ready skills employers value.`,
  },
  {
    question: "6. Will I work on real projects?",
    answer: `Yes, you’ll work on real-world datasets and projects to gain hands-on experience. These projects will make your resume and portfolio stand out.`,
  },
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
        className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-900 font-medium focus:outline-none transition sm:text-[20px]"
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
          <div className="bg-gray-100 mt-3 border-gray-200 p-4 rounded-lg flex items-center justify-between">
            <p className="text-[16px] font-medium">
              Enrollment Process for the Program
            </p>
            <button className="flex items-center justify-center rounded-full bg-white p-4">
              <FaArrowRight className="text-[16px]" />
            </button>
          </div>
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
          Frequently Asked Questions
        </h2>
        <p className="text-center mb-8 text-[12px] sm:text-[18px]">
          Still you have any questions? Contact our Team via
          <br />
          <a href="mailto:support@baoiam.com">support@baoiam.com</a>
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

export default FAQ_C;
