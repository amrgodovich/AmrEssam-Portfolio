import React from "react";
import "./hero.css";
import heroImage from "../../assets/amr.jpg";

const Hero = () => {
    return (
     <div className="hero">
        {/* <img src={heroImage} alt="Hero Image" /> */}
        <h1><span>I'm Amr Essam,</span> Computer Engineer</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora illum molestiae exercitationem a praesentium ad aliquam similique quae vero magnam, odio nihil quasi eius eum ea, accusamus nisi ab et.</p>
        <div className="hero-action">
            <div className="hero-contacts">Contact Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
     </div>
        )}


export default Hero;