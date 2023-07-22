import React, { Component } from "react";
import { Achievercrousel } from "./";
import "./Achiever.css";
class Achiever extends Component {
  render() {
    return (
      <div>
        <div className="Achiever-Header">
          <h2>Selected Student</h2>
        </div>
        <div className="Achiever-main-containt">
          <Achievercrousel />
        </div>
      </div>
    );
  }
}

export default Achiever;
