import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home/Home";
import AppFooter from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <AppFooter />
    </div>
  );
};

export default App;
