//modules
import React from "react";
import { Helmet } from "react-helmet";

//components and pages
import AdminSidebar from "../../../components/admin/sidebar";
import UserDemographics from "../../../components/admin/demographics";
import AdminCounter from "../../../components/admin/counter";

//icon sets

//CSS
import "../../../css/admin-dashboard.css";

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

        <div id="main-content" className="flex flex-col w-full">
          {/* Contents */}
          <div>
            <h1>Welcome, {name}!</h1>
          </div>

          {/* Shows the Number of Users, Cases, etc. */}

          <AdminCounter />

          <br />
          <div className=" max-w-4xl flex justify-center self-center mx-auto">
            <UserDemographics />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
