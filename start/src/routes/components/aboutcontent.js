import React from 'react'
import "./aboutcontent.css"
import { Link } from 'react-router-dom'

function AboutContent ()  {
  return (
    <>
      <div className="about">
        <div className="left">
          <h1> HariHaran</h1>
          <p>I am a front-end-developer,responsive create website.</p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjBfjXygwbbLp1boBt_DX1OWTaQP9GPmI_A&usqp=CAU"
                alt="react"
                className="img"
              />
            </div>
            <div className="img-stack bottom">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-inXkQ7HVMkfb61qOR1gMPiRt7RKTQIdILA&usqp=CAU"
                alt="react"
                className="img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutContent