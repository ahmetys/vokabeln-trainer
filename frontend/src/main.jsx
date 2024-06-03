import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/style.css";
import { BrowserRouter } from "react-router-dom";
import { WordListProvider } from "./context/WordListContext.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UserProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <WordListProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WordListProvider>
  </UserProvider>
);
