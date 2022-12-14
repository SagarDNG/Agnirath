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
  );
}

export default App;
