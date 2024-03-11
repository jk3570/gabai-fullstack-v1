import React from "react";
import "animate.css";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import { AuthContextProvider } from './context/authContext'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorkerRegistration.register();
