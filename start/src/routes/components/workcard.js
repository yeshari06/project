import React from 'react'
import "./workcard.css"
import { NavLink } from 'react-router-dom'

function WorkCard() {
  return (
    <>
      <div className="workcontainer">
        <h1 className="project-heading">Project</h1>
        <div className="project-container">
          <div className="project-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAqbeP44tl6wZeamV4IX-rQw8YYppNUqW6AQ&usqp=CAU" />
            <h2 className="project-title"></h2>
            <div className="pro-details">
              <p>this is text</p>
              <div className="pro-btns">
                <NavLink to="url.com" className="btn">
                  view
                </NavLink>
                <NavLink to="url.com" className="btn">
                  source
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkCard