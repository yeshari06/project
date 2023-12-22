import "./resume.css"
import React from "react"
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";


function Resume () {
  return (
    <>
      <div className="resume">
        <div className="head">
          <div className="profile">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <h1>HARIHARAN.</h1>
          <h3>FRONT-END-DEVELOPER.</h3>
        </div>

        <div className="main">
          <div className="lside">
            <h2>PERSONAL DETAILS:</h2>
            <p>
              <MdEmail />
              yesharri44@gmail.com.
            </p>
            <p>
              <IoCall />
              9344312115.
            </p>
            <h2>LANGUAGE SKILLS:</h2>
            <ul>
              <li>Tamil-mother tongue</li>
              <li>English-intermediate</li>
            </ul>

            <h2>SOFTSKILLS:</h2>
            <ul>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Time Management</li>
              <li>Self-Motivated</li>
            </ul>
          </div>
          <div className="rside">
            <h2>CARRER OBJECTIVE:</h2>
            <p className="one">
              Resourceful and dedicated with excelllent leadership qualities and
              great communication skills which helps the firm to achieve my
              golas.
            </p>
            <h2>EDUCATION:</h2>

            <h4>Dipolma Electrical & Electronics Engineerging.</h4>
            <p>2015-2017</p>
            <p>Periyar centenury polytechnic college,thanjavur</p>
            <p>lateral entry-80%</p>

            <h4>Higher secondary</h4>
            <p>2014-2015</p>
            <p>sri shanmuka matric higher secondary school,mannargudi</p>
            <h2>SKILLS:</h2>
            <ul>
              <li>HTML/CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACT</li>
            </ul>
            <h2>DECLARATION:</h2>
            <p>
              
              i hereby declare that the information above is true up to my
              knowledge.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume