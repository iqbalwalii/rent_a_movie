import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <img src="/assets/images/waves.svg" alt="curve"></img>
      <div className="main_footer">
        <div className="footer_sections logo">
          <img src="/assets/images/logo.png" alt="logo" />
        </div>
        <div className="footer_sections services">
          <h4>SERVICES</h4>
          <a href="#"> Request Movie </a>
          <a href="#"> Movie Removal</a>
          <a href="#"> Report </a>
        </div>
        <div className="footer_sections links">
          <h4>IMPORTANT LINKS</h4>
          <a href="#">Sign In </a>
          <a href="#">Sign Up</a>
          <a href="#">Contact </a>
          <a href="#">Movies </a>
        </div>
        <div className="footer_sections contact">
          <h4>CONTACT US </h4>
          <a href="#">Partner With Us </a>
          <a href="#">Be a Brand Ambassador </a>
          <a href="#">iqbal@dropoutdevs.com </a>
        </div>
        <div className="copyright">
          <h4>COPYRIGHT &copy; DropoutDevs 2021</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
