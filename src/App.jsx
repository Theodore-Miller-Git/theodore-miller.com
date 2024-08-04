import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Pages/Home/Home";
import { About } from "./components/Pages/About/About";
import { Projects } from "./components/Pages/Projects/Projects";
import { Experience } from "./components/Pages/Experience/Experience";
import { Resume } from "./components/Pages/Resume/Resume";
import { Contact } from "./components/Pages/Contact/Contact";



function App() {
  return (
    <Router>
    <div className={styles.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
