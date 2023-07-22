import React, { Component } from "react";
import "./Navbar.css";

import { BiHomeCircle, BiDonateHeart } from "react-icons/bi";
import { AiOutlineInsertRowAbove } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { HiOutlineAcademicCap, HiOutlineMail } from "react-icons/hi";
import { FaServicestack } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { IoMdCloseCircle } from "react-icons/io";
// import { GrGallery } from "react-icons/gr";
import { MdPermMedia } from "react-icons/md";

import { Sidebar } from "./";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menucollapse: true,
    };
  }
  menuIconClick = () => {
    this.setState({ menucollapse: !this.state.menucollapse });
  };
  render() {
    const { menucollapse } = this.state;
    return (
      <>
        <Sidebar menucollable={menucollapse} />

        <div className="header">
          <div className="u-logo-and-u-name">
            <Link to="/" className="logo-display">
              <img
                className="logo-display"
                src="../../assets/img/u-logo1.jpeg"
                alt="logo is not display"
              />
            </Link>

            <div className="u-name">
              <span style={{ display: "block" }}>
                उम्मीद राजकीय इंजीनियरिंग कॉलेज सोनभद्र
              </span>
              <span>Umeed Rajkiya Engineering College Sonbhadra</span>
            </div>
          </div>
          <div className="c-logo">
            <Link to="/" className="logo-display">
              <img
                className="picture"
                src="../../assets/img/college logo.jfif"
                alt="logo is not display"
              />
            </Link>
          </div>
        </div>
        <div className="navbar-header">
          <li className="first leaf">
            <Link to="/">
              <span className="icon">
                <BiHomeCircle />
              </span>

              <span>Home</span>
            </Link>
          </li>
          <li className="leaf">
            <Link to="/educator/umeed">
              <span className="icon">
                <HiOutlineAcademicCap />
              </span>
              <span>Educator</span>
            </Link>
          </li>
          <li className="leaf">
            <Link to="/">
              <span className="icon">
                <RiAdminFill />
              </span>
              <span>Login</span>
            </Link>
            <ul className="expanded">
              <Link to="/">
                <li className="expanded-item">Admin</li>
              </Link>

              <Link to="/login">
                <li className="expanded-item">Student</li>
              </Link>
            </ul>
          </li>
          <li className="leaf">
            <Link to="/">
              <span className="icon">
                <HiOutlineAcademicCap />
              </span>
              <span>Academics</span>
            </Link>
            <ul className="expanded">
              <Link to="/academics/class9">
                <li className="expanded-item">Class 9</li>
              </Link>
              <Link to="/academics/class10">
                <li className="expanded-item">Class 10</li>
              </Link>
              <Link to="/academics/class11">
                <li className="expanded-item">Class 11</li>
              </Link>
              <Link to="/academics/class12">
                <li className="expanded-item">Class 12</li>
              </Link>
            </ul>
          </li>
          <li className="leaf">
            <Link to="/">
              <span className="icon">
                <FaServicestack />
              </span>
              <span>Facilites</span>
            </Link>
            <ul className="expanded">
              <Link to="/academics/jeemain">
                <li className="expanded-item">Jee main</li>
              </Link>
              <Link to="/academics/JNV">
                <li className="expanded-item">Navoda</li>
              </Link>
              <Link to="/academics/CHS">
                <li className="expanded-item">CHS</li>
              </Link>
              <Link to="/academics/polytechnic">
                <li className="expanded-item">Polytechnic</li>
              </Link>
            </ul>
          </li>
          <li className="leaf">
            <Link to="/">
              <span className="icon">
                <MdPermMedia />
              </span>
              <span>Gallery</span>
            </Link>
            <ul className="expanded">
              <Link to="/umeedday">
                <li className="expanded-item">Umeed Day</li>
              </Link>
              <Link to="/independenceday">
                <li className="expanded-item">15 August</li>
              </Link>
              <Link to="/republicday">
                <li className="expanded-item">26 January</li>
              </Link>
              <Link to="/christmasday">
                <li className="expanded-item">25 December</li>
              </Link>
            </ul>
          </li>

          <li className="leaf">
            <Link to="/umeed/donation">
              <span className="icon">
                <BiDonateHeart />
              </span>
              <span>Donation</span>
            </Link>
          </li>
          <li className="leaf">
            <Link to="/contact">
              <span className="icon">
                <HiOutlineMail />
              </span>
              <span>ContactUs</span>
            </Link>
          </li>
          <li className="leaf">
            <Link to="/about">
              <span className="icon">
                <AiOutlineInsertRowAbove />
              </span>
              <span>AboutUs</span>
            </Link>
          </li>
        </div>
        <div className="mobile-nav">
          {menucollapse ? (
            <button
              style={{ backgroundColor: "black" }}
              className="close-open"
              onClick={this.menuIconClick}
            >
              <span className="close-open-size">
                <VscThreeBars />
              </span>
            </button>
          ) : (
            <button
              style={{ backgroundColor: "black" }}
              className="close-open"
              onClick={this.menuIconClick}
            >
              <span className="close-open-size open-close-size ">
                <IoMdCloseCircle />
              </span>
            </button>
          )}
        </div>
      </>
    );
  }
}

export default NavBar;
