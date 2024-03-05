import "../../css/faq.css";
import { useState } from "react";

const Faq = () => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDesc = () => {
    const description = document.getElementById("description");
    if (!showDescription) {
      description.style.display = "block";
      const height = description.scrollHeight + "px";
      description.style.height = height;
    } else {
      description.style.height = "0";
      setTimeout(() => {
        description.style.display = "none";
      }, 300); // Adjust the duration to match your CSS transition duration
    }
    setShowDescription(!showDescription);
  };

  const box = "border-2 border-azure-500 p-3 rounded-xl";

  return (
    <div className="h-screen my-2">
      <center>
        <h1 className="font-bold">Frequently Asked Questions</h1>
      </center>
      <br />
      <div className={box}>
        <div onClick={toggleDesc}>
          <h2
            className={`font-bold transition-all duration-300 ${
              showDescription ? "show-description" : ""
            }`}
          >
            What is GabAI?
          </h2>

          <p
            id="description"
            className={`transition-all duration-300 ${
              showDescription ? "show-description" : ""
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            consequatur vero cupiditate labore. Veniam debitis eius quibusdam,
            doloribus similique odio unde possimus nesciunt ab beatae,
            architecto at sit, consequatur labore?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
