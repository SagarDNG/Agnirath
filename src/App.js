import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Vision from "./components/Vision";
import Team from "./components/Team";
import Competitions from "./components/Competitions";
import Sponsers from "./components/Sponsers";
import Contact from "./components/Contact";

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>

      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Vision />
        <Team />
        <Competitions />
        <Sponsers />
        <Contact />
      </div>
      <div className="mobile-css">
        <h1>Team Agnirath, IITM</h1>
        <h3>A solar car competitive team, IIT Madras, India</h3>
        <p>Kindly view it in PC, Site will soon be mobile friendly too...</p>
      </div>
    </>
  );
}

export default App;
