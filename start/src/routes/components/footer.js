import "./footer.css";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GiVibratingSmartphone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="item">
            <div className="contact">
              <div className="frst-text">lets contact</div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7AIRiWPiEwbJt4JZ_mvnH6KizbitC8Kma6--8bs2JVFpV2gr3lfHC8Rry_RpGx3-a-R0&usqp=CAU"
                alt=""
                className="intro"
              />
              <div className="network-linkss">
                <span className="second-text">connect with us</span>
                <ul className="network-media">
                  <li>
                    <FaFacebook />
                  </li>
                  <li>
                    <FaLinkedin />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                </ul>
              </div>
            </div>
            <div className="sub">
              <h4 className="third-text">Contact us</h4>
              <table className="align">
                <tr className="ten">
                  <td>
                    <CiLocationOn
                      size={20}
                      style={{
                        width: "100px",
                        height: "50px",
                        markerStart: "20px",
                      }}
                    />
                  </td>
                  <td>4,Thavamani nagar,Mannargudi.</td>
                </tr>
                <tr>
                  <td>
                    <GiVibratingSmartphone
                      size={20}
                      style={{
                        width: "100px",
                        height: "40px",
                        markerStart: "20px",
                      }}
                    />
                  </td>
                  <td>9344312115</td>
                </tr>
                <tr>
                  <td>
                    <MdEmail
                      size={20}
                      style={{
                        width: "100px",
                        height: "40px",
                        markerStart: "20px",
                      }}
                    />
                  </td>
                  <td> yesharri@gmail.com</td>
                </tr>
                <tr>
                  <td>
                    <FaLinkedin
                      size={20}
                      style={{
                        width: "100px",
                        height: "40px",
                        markerStart: "20px",
                      }}
                    />
                  </td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
