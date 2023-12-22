import './navstyle.css'
import React, {useState} from 'react'
import {Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

function NavBar  () {


  const[click,setClick]=useState(false);
  const humburgerClick=()=>
    setClick(!click)
   
    const [color, setColor] = useState(false);

    const changeColor = () => {
      if (window.scrollY >=1000) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);
    
   
  
  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <Link to="./">
          <h1 className="heading">Portfolio.</h1>
        </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="../">Home</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
         
        <div className="humburger" onClick={humburgerClick}>
          {click ? (
            <FiX
              size={20}
              style={{ color: "white", width: "30px", height: "30px" }}
            />
          ) : (
            <FiMenu
              size={20}
              style={{ color: "white", width: "30px", height: "30px" }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default NavBar