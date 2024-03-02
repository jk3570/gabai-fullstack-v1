import React from "react";

const CallToAction = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 w-screen h-screen ">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-20 ">
          Let's stop <span className="text-azure">discrimination!</span>
        </h1>
        <p className="pb-9 text-2xl px-5">
          Creating a safe space for everyone, where they can get the help they
          need against workplace discrimination.
          <br />
          GabAi helps you and the many others to shout their voices and be
          heard!
        </p>
        <button className="bg-azure hover:bg-blue-700 text-white font-bold p-3.5 rounded-lg  h-55 w-[15rem]">
          Join now!
        </button>
      </div>
    </div>
  );
};

export default CallToAction;