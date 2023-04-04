import React from "react";
import classes from "./Footer.module.scss";
import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { AiOutlineFacebook, AiOutlineMail } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

function Footer() {
  return (
    <footer className={classes.footer}>
      <h4 className={classes["footer-logo"]}>
        <span className={classes["name"]}>INRE</span>
        <span className={classes["title"]}>innovation in reality</span>
      </h4>
      <nav className={classes["footer-links__company"]}>
        <h4>company</h4>
        <ul>
          <li>Home</li>
          <li>our offerings</li>
          <li>our team</li>
          <li>contact us</li>
        </ul>
      </nav>
      <nav className={classes["footer-links__useful"]}>
        <h4>useful links</h4>
        <ul>
          <li>blogs</li>
          <li>FAQ's</li>
        </ul>
      </nav>

      <address className={classes["company-info"]}>
        <div>
          <AiOutlineMail className={classes["email"]}></AiOutlineMail>
          <p className={classes["email-title"]}>Email:</p>
          <p className={classes["email-address"]}>support@inreglobal.com</p>
        </div>
        <div>
          <FiPhoneCall className="tele"></FiPhoneCall>
          <p className={classes["phone-title"]}>Phone</p>
          <p className={classes["phone-num"]}>+91 | 7019305889</p>
        </div>
      </address>

      <p className={classes["copyrights"]}>
        Copyright 2023. Designed by INRE Global
      </p>
      <nav className={classes["social-links"]}>
        <ul>
          <li>
            <CiLinkedin />
            <span>linkedIn</span>
          </li>
          <li>
            <CiTwitter />
            <span>twitter</span>
          </li>
          <li>
            <FaInstagram />
            <span>instagram</span>
          </li>
          <li>
            <AiOutlineFacebook />
            <span>facebook</span>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
