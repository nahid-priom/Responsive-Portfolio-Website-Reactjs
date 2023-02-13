import "./AboutContentStyle.css";
import React from 'react'
import { Link } from "react-router-dom";
import pro4 from "../assets/pro4.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a react front-end developper. I create responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
        <img src= {pro4} alt="image4" />
        </div>

    </div>
  )
}

export default AboutContent;