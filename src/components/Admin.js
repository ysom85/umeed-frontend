import React, { Component } from "react";

import "./Admin.css";
import {
  Adminsidebar,
  Ragistratonf,
  AddTeacher,
  StudentRagistraton,
  PostNotification,
  StudentweeklyMaterial,
} from "./";

class Admin extends Component {
  render() {
    const MYcomponent = this.props.myComponent;
    return (
      <div id="page">
        <header>
          <div className="admin-head-name">
            <h3>Umeed Admin Panel</h3>
          </div>
        </header>
        <nav>
          <Adminsidebar />
        </nav>
        <main>
          <MYcomponent />
        </main>
      </div>
    );
  }
}

export default Admin;
