import React from "react";
import "../../assets/styles/Hero.css";
import pic from "../../assets/images/pic.jpeg";
import {  FaRegCircle} from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiGithub , FiTwitter, FiFigma} from "react-icons/fi";

function Hero() {
  return (
    <>
      <div className="hero-wrapper">
        <div className="container row">
          <div className="left">
            <div className="content">
              <span className="heading">Hi, I’m Sagar 👋</span>
              <span className="desc">
                I'm a full stack developer (React.js & Node.js) with a focus on
                creating (and occasionally designing) exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over 7 years, I still love it as if it was something new.
              </span>
            </div>
            <div className="content-smaller">
              <span className="location">
                <HiOutlineLocationMarker className="plane"/> <span className="gutter"></span> Ahmedabad , India
              </span>
              <span className="work">
                <FaRegCircle className="dot"/> <span className="gutter"></span> Available for new projects
              </span>
            </div>
            <div className="actions">
              <span className="github"><FiGithub/></span>
              <span className="twitter"><FiTwitter/></span>
              <span className="figma"><FiFigma/></span>

            </div>
          </div>
          <div className="right">
            <div className="right-image">
              <img className="profile-pic" src={pic} alt="profile-pic"></img>
              <div className="background-block"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
