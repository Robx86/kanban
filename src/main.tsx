import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/styles/globals.css";
import NavBar from "./components/ui/NavBar/NavBar.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <NavBar>
        <App />
      </NavBar>
    </>
  </React.StrictMode>
);
