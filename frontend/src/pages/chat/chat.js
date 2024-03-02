import { BsArrowRight } from "react-icons/bs";

function chat() {
  return (
    <div className="chat h-screen">
      <div id="chat-container">
        <form action="">
          <input
            type="text"
            name=""
            id=""
            className="p-2 border-2 border-azure-500 rounded-md"
            placeholder="Type a message..."
          />
          <button type="submit" className="p-2 bg-azure-500 rounded-md">
            Send
            <BsArrowRight className="text-white" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default chat;
