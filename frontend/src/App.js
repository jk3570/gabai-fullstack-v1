import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import "./css/App.css";
import "animate.css";

import Navbar from "./components/navbar";
import SignedInNavbar from "./components/signedIn/signedin-navbar";
import Footer from "./components/footer";
import Home from "./pages/landingPage";

import Login from "./components/login";
import Signup from "./components/signup";
import Search from "./pages/search/search";
import Results from "./pages/search/results";
import Terms from "./components/terms";
import Admin from "./pages/admin/signedIn/dashboard";
import NotAdmin from "./pages/admin/dashboard";
import UserList from "./pages/admin/signedIn/users";
import CasesList from "./pages/admin/signedIn/cases";
import FeedbacksList from "./pages/admin/signedIn/feedbacks";
import Chat from "./pages/chat/chat";
import Testing from "./pages/testing/testing";
import Profile from "./components/profile";
import SignedIn from "./pages/signedIn/landingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        {/* Landing Routes and User */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchResults" element={<Results />} />
        <Route path="ToC" element={<Terms />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/cases" element={<CasesList />} />
        <Route path="/admin/feedbacks" element={<FeedbacksList />} />
        {/* <Route path="/chat" element={<Chat />} /> */}

        {/* <Route path="/signed-in" element={<SignedIn />} /> */}
        {/* <Route path="/search" element={<Search />} /> */}
        <Route path="/testing" element={<Testing />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

// const NavbarOrSignedInNavbar = () => {
//   const location = useLocation();

//   // Check if the current route is '/signed-in', then render SignedInNavbar, otherwise render Navbar
//   if (
//     location.pathname === "/signed-in" ||
//     location.pathname === "/signed-in/admin" ||
//     location.pathname === "/signed-in/admin/users" ||
//     location.pathname === "/signed-in/admin/cases" ||
//     location.pathname === "/signed-in/admin/feedbacks" ||
//     location.pathname === "/signed-in/chat" ||
//     location.pathname === "/signed-in/search"
//   ) {
//     return <SignedInNavbar />;
//   } else {
//     return <Navbar />;
//   }
// };

export default App;
