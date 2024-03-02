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

        <div>
          {/* Contents */}
          <div>
            <h1>Welcome, {name}!</h1>
          </div>

          {/* Shows the Number of Users, Cases, etc. */}
          <div className="flex flex-row gap-1 items-center justify-center w-[75vw] text-azure">
            {/* Start */}
            <div className="flex flex-row border-2 rounded-xl border-azure-400 h-[8rem] w-[20rem] p-3 justify-between items-center">
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
            <div className="flex flex-row border-2 rounded-xl border-azure-400 h-[8rem] w-[20rem] p-3 justify-between items-center">
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
            <div className="flex flex-row border-2 rounded-xl border-azure-400 h-[8rem] w-[20rem] p-3 justify-between items-center">
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
