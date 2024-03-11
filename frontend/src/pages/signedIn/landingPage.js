// Modules
import React from "react";
import Helmet from "react-helmet";
import { useAuthContext } from "../../hooks/useAuthContext";

// Components
import Search from "../search/search";
import Sect2 from "../../components/landingPage/sect2";

function LandingPage() {
  const { user, dispatch } = useAuthContext();

  const handleLogout = () => {
    // Remove user from local storage
    localStorage.removeItem("user");
    // Dispatch logout action
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <Helmet>
        <title>GabAI</title>
      </Helmet>
      <section id="home">
        {/* 1st section of landing page */}
        <Search></Search>
      </section>

      <section id="about">
        {/* 2nd section of landing page */}
        <Sect2 />
      </section>

      {/* 
      Logout button */}
      {user && <button onClick={handleLogout}>Logout</button>}
    </>
  );
}

export default LandingPage;
