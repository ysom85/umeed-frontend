import React, { Component } from "react";
import "./Donation.css";
import { FaHandshake } from "react-icons/fa";
import { NavBar, Footer } from "./";
class Donation extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div>
          <header>
            <h1>
              UMEED <span>DONATION</span>
            </h1>
          </header>
          <section className="donate-section">
            <div className="donate-text">
              <h1>
                We Need Your Support To <br />
                <span>FEED & EDUCATE</span>
              </h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi atque veritatis officia! Eligendi quia similique esse
                harum repudiandae culpa quis dignissimos? Molestias velit
                assumenda numquam eum iure sunt, impedit laboriosam.
              </p>
            </div>
            {/* <div className="donate-contentbox">
            <div className="donate-login-box" id="registration">
              <div className="donate-heading">
                <h2>DONATE NOW</h2>
              </div>
              <div className="donate-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores error ratione ?
              </div> */}
            {/* <form action="" method="POST" className="donate-form_section">
                <input
                  type="text"
                  name="first-name"
                  required=""
                  placeholder="First Name"
                />

                <input
                  type="text"
                  name="last-name"
                  required=""
                  placeholder="Last Name"
                />

                <input
                  type="email"
                  name="email"
                  required=""
                  placeholder="E-mail"
                />

                <input
                  type="text"
                  name="number"
                  required=""
                  placeholder="Phone"
                />

                <input
                  type="text"
                  name="amount"
                  required="ACCOUNT"
                  placeholder="Amount"
                />

                <div className="donate-submit">
                  <button>CLICK NOW</button>
                </div>
              </form> */}
            {/* </div> */}
            {/* </div> */}
          </section>
          <div className="donate-lower">
            <div className="donate-helping_children">
              <div className="donate-image">
                <i className="donate-fa-solid ">
                  <FaHandshake />
                </i>
              </div>
              <h2>Helping Children</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                cumque aut veritatis maiores provident itaque, possimus eos!
                Consectetur molestias cumque, ex quam deserunt qui soluta
                laborum. Aut hic dolores a. Dolores, sunt.
              </p>
            </div>
            <div className="donate-studentedu">
              <div className="donate-image">
                <i className="donate-fa-solid ">
                  <FaHandshake />
                </i>
              </div>
              <h2>Helping Children</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                cumque aut veritatis maiores provident itaque, possimus eos!
                Consectetur molestias cumque, ex quam deserunt qui soluta
                laborum. Aut hic dolores a. Dolores, sunt.
              </p>
            </div>
            <div className="donate-forbetterliving">
              <div className="donate-image">
                <i className="donate-fa-solid ">
                  <FaHandshake />
                </i>
              </div>
              <h2>Helping Children</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                cumque aut veritatis maiores provident itaque, possimus eos!
                Consectetur molestias cumque, ex quam deserunt qui soluta
                laborum. Aut hic dolores a. Dolores, sunt.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Donation;
