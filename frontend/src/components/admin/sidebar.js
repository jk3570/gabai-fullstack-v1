//icon sets
import { FaUsers } from "react-icons/fa6";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { VscFeedback } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="w-[20vw] bg-gray-700 h-screen p-5">
        <div className="my-5 text-white">
          <h1 className="font-bold text-2xl">Admin Dashboard</h1>
          <br />
          <div className="my-[10rem]"></div>
          <nav className="flex flex-col gap-10 list-none items-start text-white">
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