import React, { useState } from "react";
import "../../assets/styles/Navbar.css";

function Navbar() {

  const [isMobile, setMobile] = useState(false)
  return (
    <>
      <div className="navigation-wrapper">
        <h4>{"<SS />"}</h4>

        <ul  className={isMobile?"nav-links-mobile" : "nav-menu"}>
          <li>About</li>
          <li>Work</li> 
          <li>Testimonials</li>
          <li>Contact</li>
          <li className="divider">|</li>
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
