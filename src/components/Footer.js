import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { BsFacebook, BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { IoMdCall } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-content left">
              <h3>Umeed Rajkiya Engineering College Sonbhadra</h3>
              <div className="address address-size">
                <span className="icon">
                  <ImLocation2 />
                </span>
                Umeed Rajkiya Engineering College <br />
                &nbsp;&nbsp;&nbsp;&nbsp;churk Sonbhadra 231206
              </div>
              <div className="address address-size">
                <span className="icon">
                  <IoMdCall />
                </span>
                7317761049
              </div>
              <div className="address address-size">
                <span className="icon">
                  <GrMail />
                </span>
                umeed@gmail.com
              </div>
            </div>
            <div className="footer-content link">
              <h3>FollowUs</h3>
              <ExternalLink href="https://www.facebook.com/umeedrecsonbhadra/">
                <span className="icon">
                  <BsFacebook />
                </span>
              </ExternalLink>
              <ExternalLink href="http://www.linkedin.com/company/recsonbhadraumeed/">
                <span className="icon">
                  <BsLinkedin />
                </span>
              </ExternalLink>
              <ExternalLink href="https://www.linkedin.com/company/recsonbhadraumeed/">
                <span className="icon">
                  <BsInstagram />
                </span>
              </ExternalLink>
              <ExternalLink href="https://www.youtube.com/channel/UC1wJjWPKh308oF6-eUveDig">
                <span className="icon">
                  <BsYoutube />
                </span>
              </ExternalLink>
            </div>
          </div>
          <div className="footer-copyright address-size">
            © Copyright Umeed, Designed and Maintained UmeedTeam. <br />
            All rights reserved | Terms & Conditions | Privacy Policy |
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
