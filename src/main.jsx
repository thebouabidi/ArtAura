// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./output.css";  // This imports the Tailwind styles
import App from "./App.jsx";




createRoot(document.getElementById("root")).render(
  <>
    <App />
    </>
  
);
