import React, { useState } from "react";
import "../../assets/styles/Navbar.css";
import { Link } from "react-scroll";

function Navbar() {

  const [isMobile, setMobile] = useState(false)
  isMobile? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
  return (
    <>
      <div className="navigation-wrapper">
        <h4><Link smooth={true} duration={500} to="home">{"<SS />"}</Link></h4>

        <ul  className={isMobile?"nav-links-mobile" : "nav-menu"}>
        
          <li><Link smooth={true} duration={500} to="about">About</Link></li>
          <li><Link smooth={true} duration={500} to="work">Work</Link></li> 
          <li><Link smooth={true} duration={500} to="testimonials">Testimonials</Link></li>
          <li><Link smooth={true} duration={500} to="experience">Experience</Link></li>          <li className="divider">|</li>
          <li>
            <button className="btn-download">Download CV</button>
          </li>
        </ul>
        <button onClick={()=>setMobile(!isMobile)} className="hamburger-menu">
          {isMobile ?  <i class="fa-solid fa-xmark fa-2xl"></i> : <i class="fa-solid fa-bars fa-2xl"></i>}
          
        </button>
      </div>
    </>
  );
}

export default Navbar;
