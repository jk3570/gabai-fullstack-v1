//modules
import React from "react";
import { Helmet } from "react-helmet";

//components and pages
import AdminSidebar from "../../components/admin/sidebar";
import UserDemographics from "../../components/admin/demographics";

//icon sets

import { LiaBalanceScaleSolid } from "react-icons/lia";
import { VscFeedback } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa";

const totalNoStyle =
  "flex flex-row border-2 rounded-xl h-[8rem] w-[20rem] p-3 justify-between items-center border-black";

function AdminDashboard() {
  const name = "Admin";
  const userCount = 0;
  const caseCount = 0;
  const feedbackCount = 0;

  return (
    <>
      <Helmet>
        {/* Title of the Page */}
        <title>Admin Dashboard - GabAI</title>
      </Helmet>

      <div className="flex flex-row h-screen">
        <div>
          <AdminSidebar />
        </div>

        <div className="flex flex-col w-full h-screen justify-center align-center ">
          {/* Contents */}
          <div>
            <h1>Welcome, {name}!</h1>
          </div>

          {/* Shows the Number of Users, Cases, etc. */}
          <div className="flex flex-row gap-1 items-center justify-center self-center w-[75vw]">
            {/* Start */}
            <div className={totalNoStyle}>
              <div>
                {/* User Count */}
                Total No. of Users
                <br />
                <span className="text-5xl">{userCount}</span>
              </div>
              <div>
                <FaRegUser className="text-7xl" />
              </div>
            </div>
            {/* End */}

            {/* Start */}
            <div className={totalNoStyle}>
              <div>
                {/* Case Count */}
                Total No. of Cases
                <br />
                <span className="text-5xl">{caseCount}</span>
              </div>
              <div>
                <LiaBalanceScaleSolid className="text-7xl" />
              </div>
            </div>
            {/* End */}

            {/* Start */}
            <div className={totalNoStyle}>
              <div>
                {/* Feedback Count */}
                Total No. of Feedback
                <br />
                <span className="text-5xl">{feedbackCount}</span>
              </div>
              <div>
                <VscFeedback className="text-7xl" />
              </div>
            </div>
            {/* End */}
          </div>

          <div>
            <UserDemographics />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
