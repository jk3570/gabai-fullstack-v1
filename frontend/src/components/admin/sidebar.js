//icon sets
import { FaUsers } from "react-icons/fa6";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { VscFeedback } from "react-icons/vsc";
import { RxDashboard } from "react-icons/rx";

import { Link } from "react-router-dom";
import "../../css/admin-sidebar.css";

const open = () => {
  document.getElementById("sidebar").style.width = "320px";
};

const close = () => {
  document.getElementById("sidebar").style.width = "0";
};

function Sidebar() {
  return (
    <>
      <div id="open-sidebar">
        <div className="justify-center" onClick={open} id="burger">
          &#9776;
        </div>
      </div>

      <div id="sidebar">
        <div className="my-5 text-white ">
          <div className="flex justify-end px-10">
            <span onClick={close} className="text-2xl">
              &times;
            </span>
          </div>

          <h1 className="font-bold text-2xl">Admin Dashboard</h1>
          <br />
          <div className="my-[10rem]"></div>
          <nav className="flex flex-col gap-10 list-none items-start text-white">
            <li>
              <Link
                to="/signed-in/admin"
                className="flex flex-row gap-2 text-2xl"
              >
                <RxDashboard className="text-3xl" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className="flex flex-row gap-2 text-2xl">
                <FaUsers className="text-3xl" />
                Users
              </Link>
            </li>

            <li>
              <Link to="/admin/cases" className="flex flex-row gap-2 text-2xl">
                <LiaBalanceScaleSolid className="text-3xl" />
                Cases
              </Link>
            </li>

            <li>
              <Link
                to="/admin/feedbacks"
                className="flex flex-row gap-2 text-2xl"
              >
                <VscFeedback className="text-3xl" />
                Feedbacks
              </Link>
            </li>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
