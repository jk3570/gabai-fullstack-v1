import React from "react";
import { useAuthContext } from "./hooks/useAuthContext";

//import { useAuthContext } from './hooks/useAuthContext'

//Modules
import Helmet from "react-helmet";

//icons
import { BsMoon } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

//images
import Logo from "./img/Logo.png";

//Components and Pages
import "./css/nav.css";
import Admin from "./pages/admin/dashboard";
import CasesList from "./pages/admin/cases";
import FeedbacksList from "./pages/admin/feedbacks";
import Footer from "./components/footer";
import LandingPage from "./pages/landingPage";
import Results from "./pages/search/results";
import Search from "./pages/search/search";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/signedIn/profile";


import Terms from "./components/terms";
import UserList from "./pages/admin/users";
import Chat from "./pages/chat/chat";
import Testing from "./pages/testing/testing";

//Modules
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

//CSS
import "./css/App.css";

//Login Popup Component

function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Navigation Bar  */}
      <nav className="sticky top-0 z-50 bg-white h-[3.875rem] w-full px-[1.25rem] font-bold border-b-2 border-azure-500">
        {/* Brand Name */}
        <Link to="/">
          <div onClick={scrollToTop} className="">
            <img src={Logo} alt="Logo" style={{ height: "25px" }} />
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex flex-row items-center text-md gap-x-5">
          {/* Login Btn */}
          <Login />

          {/* Search Icon */}
          <Link to="/search">
            <FaSearch className="text-2xl" />
          </Link>

          {/* Toggle night mode */}
          <BsMoon className="text-2xl" />
        </div>
      </nav>
    </>
  );
}

const App = () => {
  const { user } = useAuthContext();
  return (
    <>
      <Helmet>
        <title>GabAI</title>
      </Helmet>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/*  Landing Page Route  
                <Route path="/" element={<Home />} />
              */}

          {/* Search Route */}
          <Route path="/search" element={<Search />} />
          <Route path="/searchResults" element={<Results />} />
          <Route path="ToC" element={<Terms />} />
          {/*  Admin Page Route  */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/cases" element={<CasesList />} />
          <Route path="/admin/feedbacks" element={<FeedbacksList />} />
          {/* Chat Interface */}
          <Route path="/chat" element={<Chat />} />
          {/* Testing Route for testing components */}
          <Route path="/testing" element={<Testing />} />
          {/* Testing Route for testing components */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

const Home = () => {
  return (
    <>
      {/* Main Content */}
      <div className="flex flex-col">
        {/* Landing Page here!!! */}
        <div className="flex flex-col items-center justify-center">
          <LandingPage />
        </div>
      </div>
    </>
  );
};

export default App;
