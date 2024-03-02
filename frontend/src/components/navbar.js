//CSS
import "../css/nav.css";

//Images and Icons
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png";
import { BsMoon } from "react-icons/bs";

// Components
import SignIn from "./sign-in/signIn";
import SideNav from "./sideNav";

const toggle = () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
};

function Header() {
  return (
    <>
      {/* Navigation Bar  */}
      <nav
        className="py-3 w-full px-[20%] 
      font-bold border-b-2 border-azure fixed z-10 bg-white
      flex flex-row justify-between items-center
      max-lg:flex-col
      max-md:px-2 max-md:h-16
      max-md:flex-row
      "
      >
        {/* Brand Name */}
        <Link to="/">
          <div className="">
            <img src={Logo} alt="Logo" style={{ height: "25px" }} />
          </div>
        </Link>
        <div
          className="links flex flex-row items-center gap-x-5
        max-md:hidden
        "
        >
          <ul className="flex flex-row gap-20 text-xl">
            <li
              className="hover:ease-in-out duration-300 
            hover:bg-azure 
            hover:text-white"
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className="hover:ease-in-out duration-300 
            hover:bg-azure 
            hover:text-white"
            >
              <Link to="/Search">Search</Link>
            </li>
            <li
              className="hover:ease-in-out duration-300 
            hover:bg-azure 
            hover:text-white"
            >
              Chat
            </li>
          </ul>
        </div>
        {/* Search Bar */}
        <div
          className="flex flex-row items-center text-md gap-x-5
        max-lg:hidden
        "
        >
          {/* Login Btn */}
          <SignIn />

          {/* Toggle Night Mode */}

          <BsMoon onClick={toggle} />
        </div>

        <div className="sidenav hidden max-md:inline-block">
          <SideNav />
        </div>
      </nav>
    </>
  );
}

export default Header;