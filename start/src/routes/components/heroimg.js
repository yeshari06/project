import "./herostyle.css";
import React from 'react';
import {Link} from "react-router-dom"
import IntroImg from "./image.jpg";

function HeroImg  (){
  return (
    <>
      <div className="hero">
        <div className="mask">
          <img src={IntroImg} className="intoimg" alt=""></img>
        </div>
        <div className="content">
          <p>HI' I AM FREE LAUNCHER</p>
          <h1>React Developer</h1>
        

          <Link to="./project" className="btn">
            PROJECT
          </Link>
          <Link to="./contact" className="btn btn-light">
            contact
          </Link>
        </div>
        </div>
    
    </>
  );
}

export default HeroImg