import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Vision from "./components/Vision";
import Team from "./components/Team";
import competitions from "./components/competitions";
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
      <competitions />
      <Sponsers />
      <Contact />
    </div>
  );
}

export default App;
