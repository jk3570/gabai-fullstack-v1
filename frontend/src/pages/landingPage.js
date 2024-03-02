// Modules
import React from "react";
import Helmet from "react-helmet";
import { useAuthContext } from "../hooks/useAuthContext";

// Components
import Sect1 from "../components/landingPage/sect1";
import Sect2 from "../components/landingPage/sect2";
import Sect3 from "../components/landingPage/sect3";
import Sect4 from "../components/landingPage/sect4";

function LandingPage() {
  const { user, dispatch } = useAuthContext();

  const handleLogout = () => {
    // Remove user from local storage
    localStorage.removeItem('user');
    // Dispatch logout action
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <>
      <Helmet>
        <title>GabAI</title>
      </Helmet>
      <section>
        {/* 1st section of landing page */}
        <Sect1 />
      </section>

      <section>
        {/* 2nd section of landing page */}
        <Sect2 />
      </section>

      <section>
        {/* 3rd section of landing page */}
        <Sect3 />
      </section>

      <section>
        {/* 4th section of landing page */}
        <Sect4 />
      </section>
{/* 
      Logout button */}
      {user && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </>
  );
}

export default LandingPage;
