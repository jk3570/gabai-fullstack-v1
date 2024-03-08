//CSS
import "../css/nav.css";

import { useState, useEffect } from "react";

//Images and Icons
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png";
import { BsMoon } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

// Components
// import SignIn from "./SignIn";
import SideNav from "./SideNav";
import Login from "./login";
import Profile from "./profile";

const toggle = () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
};

function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [navbarHeight, setNavbarHeight] = useState("py-10"); // Initial navbar padding

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > 50) {
        // If scrolled down, update navbar padding
        setNavbarHeight("py-5");
      } else {
        // If scrolled to the top, revert to original navbar padding
        setNavbarHeight("py-10");
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navigation Bar  */}
      <nav
        className={`sticky top-0 z-50 bg-white h-[3.875rem] w-full font-bold border-b-2 border-azure-500 transition-all duration-300 ${navbarHeight}`}
      >
        {/* Brand Name */}
        <div className="w-full max-w-4xl flex justify-between items-center">
          <Link to="/">
            <div onClick={scrollToTop} className="">
              <img src={Logo} alt="Logo" style={{ height: "25px" }} />
            </div>
          </Link>

          <div className="nav max-md:hidden">
            <nav className="flex flex-row gap-x-10 list-none">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <Link to="/chat">Chat</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex flex-row items-center text-md gap-x-5">
            {/* Login Btn */}
            <Login />
            <span className="flex flex-row gap-x-5 max-md:hidden">
              {/* Search Icon */}
              <Link to="/search">
                <FaSearch className="text-2xl" />
              </Link>

              {/* Toggle night mode */}
              <BsMoon className="text-2xl" onClick={toggle} />
            </span>

            <span className="hidden max-md:flex">
              <SideNav></SideNav>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
