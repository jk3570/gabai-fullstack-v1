import { Link } from "react-router-dom";

import "../../css/sideNav.css";

const OpenSideNav = () => {
  document.getElementById("sidenav").style.width = "300px";
};

const CloseSideNav = () => {
  document.getElementById("sidenav").style.width = "0";
};

const sidenav = () => {
  return (
    <>
      <span className="text-2xl" onClick={OpenSideNav}>
        &#9776;
      </span>

      <div id="sidenav" className="list-none fixed z-10 bg-white h-screen w-0">
        <li onClick={CloseSideNav}>&times;</li>
        <li>
          <Link to="/signed-in">Home</Link>
        </li>
        <li>
          <Link to="/signed-in/search">Search</Link>
        </li>
        <li>
          <Link to="/signed-in/chat">Chat</Link>
        </li>
      </div>
    </>
  );
};

export default sidenav;
