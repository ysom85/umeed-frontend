import React, { Component } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { BiHomeCircle, BiDonateHeart } from "react-icons/bi";
import { AiOutlineInsertRowAbove } from "react-icons/ai";

import { RiAdminFill } from "react-icons/ri";
import { HiOutlineAcademicCap, HiOutlineMail } from "react-icons/hi";
import { FaServicestack } from "react-icons/fa";

import { MdPermMedia } from "react-icons/md";

class Sidebar extends Component {
  render() {
    const { menucollable } = this.props;

    return (
      <div>
        <ProSidebar collapsed={menucollable}>
          <Menu iconShape="square">
            <MenuItem icon={<BiHomeCircle />}>Home</MenuItem>

            <MenuItem icon={<HiOutlineAcademicCap />}>
              Educator
              <Link to="/educator/umeed" />
            </MenuItem>
            <SubMenu icon={<RiAdminFill />} title="Login">
              <MenuItem>
                Admin
                <Link to="/" />
              </MenuItem>
              <MenuItem>
                Student
                <Link to="/login" />
              </MenuItem>
            </SubMenu>
            <SubMenu icon={<HiOutlineAcademicCap />} title="Academics">
              <MenuItem>
                Class 9
                <Link to="/academics/class9" />
              </MenuItem>
              <MenuItem>
                Class 10
                <Link to="/academics/class10" />
              </MenuItem>
              <MenuItem>
                Class 11
                <Link to="/academics/class11" />
              </MenuItem>
              <MenuItem>
                Class 12
                <Link to="/academics/class12" />
              </MenuItem>
            </SubMenu>
            <SubMenu icon={<FaServicestack />} title="Facilites">
              <MenuItem>
                jee main
                <Link to="/academics/jeemain" />
              </MenuItem>
              <MenuItem>
                Navoda
                <Link to="/academics/JNV" />
              </MenuItem>
              <MenuItem>
                CHS
                <Link to="/academics/CHS" />
              </MenuItem>
              <MenuItem>
                Polytechnic
                <Link to="/academics/polytechnic" />
              </MenuItem>
            </SubMenu>
            <SubMenu icon={<MdPermMedia />} title="Gallery">
              <MenuItem>
                Children Day
                <Link to="/umeedday" />
              </MenuItem>
              <MenuItem>
                independence Day
                <Link to="/independenceday" />
              </MenuItem>
              <MenuItem>
                Republic Day
                <Link to="/republicday" />
              </MenuItem>
              <MenuItem>
                christmas Day
                <Link to="/christmasday" />
              </MenuItem>
            </SubMenu>
            <MenuItem icon={<BiDonateHeart />}>
              Donation
              <Link to="/umeed/donation" />
            </MenuItem>
            <MenuItem icon={<HiOutlineMail />}>
              ContactUs
              <Link to="/contact" />
            </MenuItem>
            <MenuItem icon={<AiOutlineInsertRowAbove />}>
              AboutUs
              <Link to="/about" />
            </MenuItem>
          </Menu>
        </ProSidebar>
      </div>
    );
  }
}

export default Sidebar;
