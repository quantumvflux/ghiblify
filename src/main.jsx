import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Characters from "./pages/Characters";
import About from "./pages/About";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
