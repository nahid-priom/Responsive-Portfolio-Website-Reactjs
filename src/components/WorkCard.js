import "./WorkCardStyle.css";
import pro1 from "../assets/project2.jpg";
import pro2 from "../assets/project1.jfif";
import pro3 from "../assets/project3.jpg";

import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src= {pro1} alt="image2" />
                <h2 className="project-title">E-commerce Website</h2>
                <div className="pro-details">
                    <p>For retailers, this should be interpreted as such: if you currently do not have an ecommerce website, you may be preventing yourself from hitting revenue goals and reaching your full potential.</p>
                    <div className="pro-btns">
                        <NavLink to="https://github.com/priom1258" className= "btn">View</NavLink>
                        <NavLink to="https://github.com/priom1258" className= "btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src= {pro2} alt="image2" />
                <h2 className="project-title">Tour & Travels Website</h2>
                <div className="pro-details">
                    <p>Tourism is travel for pleasure or business; also the theory and practice of touring, the business of attracting, accommodating, and entertaining tourists, and the business of operating tours.</p>
                    <div className="pro-btns">
                        <NavLink to="https://github.com/priom1258" className= "btn">View</NavLink>
                        <NavLink to="https://github.com/priom1258" className= "btn">Source</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src= {pro3} alt="image2" />
                <h2 className="project-title">E-commerce Website</h2>
                <div className="pro-details">
                    <p>An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with danger such as traveling, exploring, skydiving, mountain climbing.</p>
                    <div className="pro-btns">
                        <NavLink to="https://github.com/priom1258" className= "btn">View</NavLink>
                        <NavLink to="https://github.com/priom1258" className= "btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard;