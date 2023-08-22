import React from "react";
import NavbarLarge from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";
import Work from "../Work/Work";
import Review from "../Review/Review";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div id="home">
      <NavbarLarge />
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Work/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default Home;
