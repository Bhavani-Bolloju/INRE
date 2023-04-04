import React from "react";
import classes from "./Header.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  return (
    <header id="home" className={classes.header}>
      <h1>
        making your <span> real estate </span>purchase journey faster and
        transparent
      </h1>
    </header>
  );
}

export default Header;
