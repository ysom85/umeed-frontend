import React, { Component } from "react";
import "./Contact.css";
import { NavBar, Footer, Googlemap } from "./";
import { HiOutlineMail } from "react-icons/hi";

class Contact extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div>
          <div className="contact-wrapper">
            <div className="contact-header">
              <h1></h1>
            </div>
          </div>
          <div className="contact-main-content">
            <div className="contact-item">
              <h3>
                <span className="icon">
                  <HiOutlineMail />
                </span>
                Email
              </h3>
              <p>Kuldeepy10459@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>Mobile</h3>
              <p>7317761049</p>
            </div>
            <div className="contact-item">
              <h3>Address</h3>
              <p>
                Ambedkar park <br />
                Musahi Churk sonbhadra
              </p>
            </div>
            <div className="contact-item">
              {" "}
              <h3>Website</h3>
              <p>www.umeedrec.in</p>
            </div>
          </div>
        </div>
        <Googlemap />
        <Footer />
      </>
    );
  }
}
export default Contact;
