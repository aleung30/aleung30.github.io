import { Navbar } from "./components/Navbar";
import { Element } from "react-scroll";

import About from "./components/About";
import Hero from "./components/Hero";

import Contact from "./components/Contact";
import  Experience  from "./components/Experience";
import Projects from "./components//Projects";
import Interests from "./components//Interests";


function App() {


  return (
    <div className=" bg-[#F0F4F8]">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Interests />
       

    </div>
    
    
   
  )
}

export default App
