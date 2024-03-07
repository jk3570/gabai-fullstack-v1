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
      question: "What is workplace discrimination?",
      answer:
        "Discrimination in the workplace occurs when an individual receives unjust treatment or harassment due to their protected characteristics, which may include age, sex, gender identity, sexual orientation, race, ethnicity, religion, disability, marital status, or pregnancy, among other things.",
    },
    {
      question: "What laws protect me from discrimination?",
      answer:
        "People in the Philippines are protected from discrimination in the workplace by laws such as the Republic Act No. 7277 (Magna Carta for Disabled Persons), the Republic Act No. 7877 (Anti-Sexual Harassment Act), and the Republic Act No. 6725 (Anti-Racial Discrimination Act).",
    },
    {
      question: "What happens to employers who discriminate?",
      answer:
        "According to the Philippine Labor Code (Presidential Decree No. 442), employers who practice discrimination may be subject to fines, punishments, or other negative outcomes. In addition, they might have to pay the victims' expenses and put policies in place to stop discrimination in the future.",
    },
    {
      question: "Where can I get help if I face discrimination?",
      answer:
        "Government organisations such as the Department of Labor and Employment (DOLE), the National Labor Relations Commission (NLRC), and the Commission on Human Rights (CHR), can help you if you are the victim of workplace discrimination.",
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
