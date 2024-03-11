// Modules
import React from "react";
import Helmet from "react-helmet";
import { useAuthContext } from "../hooks/useAuthContext";

// Components
import Sect1 from "../components/landingPage/sect1";
import Sect2 from "../components/landingPage/sect2";
import Sect3 from "../components/landingPage/sect3";
import Sect4 from "../components/landingPage/sect4";
import Developers from "../components/landingPage/developers";
import FAQ from "../components/landingPage/faq";

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
      <div class="w-full relative max-w-4xl px-5 lg:px-0 center mx-auto">
        <section id="home">
          {/* 1st section of landing page */}
          <Sect1 />
        </section>

        <section id="about">
          {/* 2nd section of landing page */}
          <Sect2 />
        </section>

        <section>
          {/* 3rd section of landing page */}
          <Sect3 />
        </section>

        <section>
          {/* 5th section of landing page */}
          <Developers />
        </section>

        <section>
          {/* 5th section of landing page */}
          <FAQ />
        </section>

        <section>
          {/* 4th section of landing page */}
          <Sect4 />
        </section>
      </div>
      {/* 
      Logout button */}
      {user && <button onClick={handleLogout}>Logout</button>}
    </>
  );
}

export default LandingPage;
