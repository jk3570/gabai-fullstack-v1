import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar";
import SignedInNavbar from "./components/signedIn/navbar";
import Footer from "./components/footer";
import Home from "./pages/landingPage";
import Login from "./components/login";
import Signup from "./components/signup";
import Search from "./pages/search/search";
import Results from "./pages/search/results";
import Terms from "./components/terms";
import Admin from "./pages/admin/dashboard";
import UserList from "./pages/admin/users";
import CasesList from "./pages/admin/cases";
import FeedbacksList from "./pages/admin/feedbacks";
import Chat from "./pages/chat/chat";
import Testing from "./pages/testing/testing";
import Profile from "./components/signedIn/profile";
import SignedIn from "./pages/signedIn/landingPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarOrSignedInNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/searchResults" element={<Results />} />
        <Route path="ToC" element={<Terms />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/cases" element={<CasesList />} />
        <Route path="/admin/feedbacks" element={<FeedbacksList />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signed-in" element={<SignedIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const NavbarOrSignedInNavbar = () => {
  const location = useLocation();

  // Check if the current route is '/signed-in', then render SignedInNavbar, otherwise render Navbar
  if (location.pathname === "/signed-in") {
    return <SignedInNavbar />;
  } else {
    return <Navbar />;
  }
};

export default App;
