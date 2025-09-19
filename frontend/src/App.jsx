import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import "@fontsource/philosopher/400.css";
import "@fontsource/philosopher/700.css";
import Treatments from "./pages/treatments";

import About from "./pages/About";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </div>
  );
};

export default App;
