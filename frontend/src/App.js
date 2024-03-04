import React from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import { useState, useEffect } from 'react';

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
import Navbar from "./components/navbar";

import Terms from "./components/terms";
import UserList from "./pages/admin/users";
import Chat from "./pages/chat/chat";
import Testing from "./pages/testing/testing";

//Modules
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

//CSS
import "./css/App.css";

//Login Popup Component

const toggle = () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
};

const App = () => {
  const { user } = useAuthContext();
  return (
    <>
      <Helmet>
        <title>GabAI</title>
      </Helmet>

      <BrowserRouter>
        <Navbar />
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
