import { useState } from "react";
import { FaPlus, FaTimes, FaArrowRight } from "react-icons/fa";

const FAQ_Pap = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

const faqData = [
  {
    question: "What is the Software Development Course (SDC)?",
    answer:
      "A Software Development course, in simple words, teaches you how to design and build applications using programming languages like Java, Python, and frameworks like React or Node.js. You'll gain hands-on experience in writing clean code, debugging, and deploying software solutions. This course is ideal for beginners and professionals looking to upskill and start a career in software development."
  },
  {
    question: "Is this a certified course?",
    answer:
      "Yes, after successful completion, you'll receive a certification that demonstrates your proficiency in software development and is recognized by leading tech companies."
  },
  {
    question: "Does this course require prior coding experience?",
    answer:
      "No prior coding knowledge is required. The course starts with the fundamentals of programming and gradually covers advanced concepts, making it suitable for absolute beginners."
  },
  {
    question: "Does this course have real-time projects too?",
    answer:
      "Yes, you'll work on real-world projects like developing websites, building mobile apps, and creating APIs. These projects will help you build a strong portfolio to showcase your skills to potential employers."
  },
  {
    question: "Will Baoiam help me with interviews?",
    answer:
      "Yes! We offer resume reviews, interview preparation, mock sessions, and guaranteed interview opportunities. When you enroll in our course, it's our responsibility to make you 100% job ready and place you with the best package."
  },
  {
    question: "How does the Pay After Placement (PAP) model work at Baoiam?",
    answer:
      "Enroll in the programme and pay only an upfront training fee of ₹4999. In PAP we offer resume reviews, interview preparation, mock sessions, and guaranteed interview opportunities where you have to pay the full price of ₹30,000 after getting placement from our programme. The programme includes assessments, assignments, attendance, mock interviews, progress, and module completion. After completion of the programme, we will assist you with placement."
  },
  // {
  //   question: "How much do I pay after placement?",
  //   answer:
  //     "Pay after Placement is a programme where you have to pay an upfront training fee of ₹4999. After being placed through our programme, you have to pay a total of ₹30,000."
  // },
  // {
  //   question: "What if I don't get placed?",
  //   answer:
  //     "If you don't get placed from our programme, you don't have to pay us any fee except the initial training fee of ₹4999."
  // },
  // {
  //   question: "Do I need to pay anything before starting?",
  //   answer:
  //     "Yes, You have to pay an upfront fee for training, which is just ₹4999."
  // },
  // {
  //   question: "Do I need to have prior experience or technical knowledge?",
  //   answer:
  //     "No, it's not mandatory to have any prior experience or technical knowledge. Our programme is designed to assist you from basic to professional level. Just have some enthusiasm and keen mindset to learn."
  // },
  // {
  //   question: "How long is the course duration?",
  //   answer:
  //     "The course duration typically ranges from 6 to 9 months, depending on the track and intensity you choose."
  // },
  // {
  //   question: "Does this course provide placement assistance?",
  //   answer:
  //     "Yes, placement support is included with guidance on resume building, technical interviews, and connecting you with hiring partners in the software industry."
  // }
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
          <div className="bg-gray-100 mt-3 border-gray-200 p-2 sm:p-4 rounded-lg flex items-center justify-between">
            <p className="text-[12px]  sm:text-[16px] font-medium">
              Enrollment Process for the Program
            </p>
            <button className="flex items-center justify-center rounded-full bg-white p-4">
              <FaArrowRight className="text-[11px] sm:text-[16px]" />
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
         <hr className="w-full  border-t-[2px] border-gray-100 mb-6" />
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
          <button className="mt-4 px-5 py-2 border rounded-md bg-gray-200 border-gray-300 hover:bg-gray-100 transition hover:font-medium">
            See All FAQ’s
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ_Pap;
