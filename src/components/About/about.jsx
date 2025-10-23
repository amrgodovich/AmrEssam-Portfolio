import React from "react";
import "./about.css";
import themepattern from "../../assets/theme_pattern.svg";
import prof_pic from "../../assets/amr.jpg";

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={themepattern} alt="" />
            </div>
        <div className="about-content">
            <div className="about-left">
                <img src={prof_pic} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p></p>
                    <p></p>
                </div>
                <div className="about-skills">
                <div className="about-skill"><p>HTML</p> <hr style={{width: "70%"}} /></div>
                <div className="about-skill"><p>CSS</p> <hr style={{width: "60%"}} /></div>
                <div className="about-skill"><p>JavaScript</p> <hr style={{width: "80%"}} /></div>
                <div className="about-skill"><p>React</p> <hr style={{width: "90%"}} /></div>
                </div>
            </div>
        </div>
        </div>
        )
    }

export default About;