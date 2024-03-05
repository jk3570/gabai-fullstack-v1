import "../../css/faq.css";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Faq = () => {
  const [showDescriptions, setShowDescriptions] = useState([]);

  const toggleDesc = (index) => {
    setShowDescriptions((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const faqs = [
    {
      question: "What is GabAI?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur vero cupiditate labore. Veniam debitis eius quibusdam, doloribus similique odio unde possimus nesciunt ab beatae, architecto at sit, consequatur labore?",
    },
    {
      question: "What is GabAI?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur vero cupiditate labore. Veniam debitis eius quibusdam, doloribus similique odio unde possimus nesciunt ab beatae, architecto at sit, consequatur labore?",
    },
    {
      question: "What is GabAI?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur vero cupiditate labore. Veniam debitis eius quibusdam, doloribus similique odio unde possimus nesciunt ab beatae, architecto at sit, consequatur labore?",
    },
    {
      question: "What is GabAI?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur vero cupiditate labore. Veniam debitis eius quibusdam, doloribus similique odio unde possimus nesciunt ab beatae, architecto at sit, consequatur labore?",
    },
    // Add more FAQ items here
  ];

  const box = "border-2 border-azure-500 p-3 rounded-xl my-3";

  return (
    <div className="h-auto my-2">
      <center>
        <h1 className="font-bold">Frequently Asked Questions</h1>
      </center>
      <br />
      {faqs.map((faq, index) => (
        <div key={index} className={box}>
          <div onClick={() => toggleDesc(index)}>
            <div className="flex justify-between items-center">
              <h2 className="font-bold">{faq.question}</h2>
              <div className="font-bold">
                {showDescriptions[index] ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>

            <p
              className={`faq-description ${
                showDescriptions[index] ? "open" : ""
              }`}
            >
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
