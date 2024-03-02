import React, { useState } from "react";
import SexDemog from "./sexDemog";
import LocationDemog from "./locationDemog";
import AgeDemog from "./ageDemog";

function UserDemographics() {
  const [currentPage, setCurrentPage] = useState("sex"); // Default page

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="flex flex-col bg-gray-300 w-auto h-auto mx-10 my-5 rounded-xl">
        <div className="flex flex-col w-full p-1 my-4 ">
          <ul className="flex flex-row justify-between gap-1 items-start text-white">
            <li
              className="border-2 w-full border-white p-1 rounded-xl cursor-pointer active:bg-azure-400 focus:bg-azure-400"
              onClick={() => handleClick("sex")}
            >
              Sex
            </li>
            <li
              className="border-2 w-full border-white p-1 rounded-xl cursor-pointer active:bg-azure-400 focus:bg-azure-400"
              onClick={() => handleClick("age")}
            >
              Age
            </li>
            <li
              className="border-2 w-full border-white p-1 rounded-xl cursor-pointer 
              active:bg-azure-400
               focus:bg-azure-400"
              onClick={() => handleClick("location")}
            >
              Location
            </li>
          </ul>
        </div>

        {/* TODO: Graph */}

        {currentPage === "sex" && <SexDemog />}
        {currentPage === "location" && <LocationDemog />}
        {currentPage === "age" && <AgeDemog />}
      </div>
    </div>
  );
}

export default UserDemographics;
