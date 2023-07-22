import React, { Component } from "react";
import "./About.css";
import { NavBar, Footer } from "./";
class About extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div>
          <div className="sectiona">
            <div className="containera" align="row-wise">
              <div className="content-sectiona">
                <div className="image-sectiona">
                  <div className="centered1">A MISSION</div>
                  <div className="centered2">WITH A VISION</div>
                  <div className="centered3">educating childs since 2019</div>
                </div>
                <div className="title">
                  <h1>ABOUT US</h1>
                </div>
                <div className="content">
                  <p>
                    Umeed, established in July 2017 is a registered society that
                    provide services for children and young adults with
                    developmental difficulties.This foundation provides quality
                    intervention for the children while also promoting increased
                    societal awareness and sensitivity towards their needs. The
                    founder of Umeed is himself a student of Rajkiya engineering
                    college sonbhadra Er.Ajit Kushwaha (Software Engineer at HCL
                    Technologies). And this was the motivating source towards
                    starting of Umeed as he found it very difficult to find
                    services under one roof that would cater to the needs of her
                    child.
                  </p>
                  <p>
                    {" "}
                    Thus in order to fulfill this aspiration has brought
                    together a great team of educators and behaviour therapists
                    etc under one roof so that Umeed is able to cater to all
                    deviant needs of our children .
                  </p>
                </div>
              </div>
              <div className="diva1">
                <h3>Every child receives basic quality education</h3>
              </div>
              <div className="diva2">
                <h3>
                  Education is the most powerful weaopen You can use to change
                  the World
                </h3>
              </div>
              <div className="diva3">
                <h3>
                  Build a world in which every child has the right to survival,
                  protection, development, and participation
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="about-grid-container">
            <div className="about-grid-item">
              <h1>OUR Mission</h1>
              <p>
                Our mission is to make this world a better place where every
                body lives happily with harmony by caring sharing with love for
                each other and promoting the universal brotherhood of mankind.
                We strive to eradicate poverty, illiteracy every other problem
                on the Earth, so that we give the coming generations a better
                world to live by wiping every tear and removing all the
                sorrows....only with a desire to see a smile on every child's
                face...!!!
              </p>
            </div>
            <div className="about-grid-item">
              <h1>OUR Vision</h1>
              <p>
                Our mission is to make this world a better place where every
                body lives happily with harmony by caring sharing with love for
                each other and promoting the universal brotherhood of mankind.
                We strive to eradicate poverty, illiteracy every other problem
                on the Earth, so that we give the coming generations a better
                world to live by wiping every tear and removing all the
                sorrows....only with a desire to see a smile on every child's
                face...!!!
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;
