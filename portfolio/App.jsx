import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "../src/pages/about";
import Skills from "../src/pages/skills";
import Project from "../src/pages/project";
import Contact from "../src/pages/contact";
import "./App.css";

function App()
{
 
 return(
    <div className="portfolio">

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project/>
      <Contact />
      <Footer />

    </div>
  )
}

export default App;