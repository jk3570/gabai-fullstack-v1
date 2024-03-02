//images
import Search from "../../img/SearchIcon.png";
import PWA from "../../img/PhoneDesktop.png";
import Convo from "../../img/Message.png";

function sect3() {
  return (
    <div className="mt-20 flex flex-col justify-center items-center text-3xl text-center text-black h-auto">
      <h1 className="justify-center text-center text-6xl font-bold">
        <span className="font-bold text-azure">GabAi </span> Main Features
      </h1>

      <br />

      <div className=" flex flex-row justify-center items-center gap-8 max-md:flex-col w-screen">
        <div className=" w-[30rem] h-[30rem] flex flex-col justify-center items-center landing-section shadow-lg">
          <div className="flex justify-center items-center ">
            <img
              className="h-22 w-20 object-cover rounded-full"
              src={Convo}
              alt=""
            />
          </div>
          <h3 className="mt-9">
            <b>Conversation AI</b>
            </h3>
            <p className="mt-7 text-lg"> You can engage in real-time text-<br />
            based conversition
          </p>
        </div>

        <div className=" w-[30rem] h-[30rem] flex flex-col justify-center items-center landing-section shadow-lg">
          <div className="flex justify-center items-center">
            <img
              className="h-22 w-20 object-cover rounded-full"
              src={Search}
              alt=""
            />
          </div>
          <br />
          <h3>
          <b>Search Engine</b>
          </h3>

          <p className="mt-7 text-lg">
            You can look up information about workplace discrimination
          </p>
        </div>

        <div className=" w-[30rem] h-[30rem] flex flex-col justify-center items-center landing-section shadow-lg">
          <div className="flex justify-center items-center">
            <img
              className="h-22 w-20 object-cover rounded-full"
              src={PWA}
              alt=""
            />
          </div>
          <h3 class="mt-7">
          <b>Progresive Web Application</b>
          </h3>
          <p className="mt-7 text-lg">GabAi can be installed on cross-platforms</p>
        </div>
      </div>
    </div>
  );
}

export default sect3;