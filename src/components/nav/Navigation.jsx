import React from "react";
import classes from "./Navigation.module.scss";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <nav className={classes.nav}>
      <div className={classes["nav-container"]}>
        <div className={classes["nav-logo"]}>
          <h1>INRE</h1>
          <span>innovation in reality</span>
        </div>
        <ul className={classes["nav-list"]}>
          <li>
            <Link
              activeClass={classes["active"]}
              spy={true}
              smooth={true}
              offset={-150}
              duration={900}
              to="home"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              activeClass={classes["active"]}
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              to="offerings"
            >
              our offerings
            </Link>
          </li>
          <li>
            <Link
              activeClass={classes["active"]}
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              to="team"
            >
              our team
            </Link>
          </li>
          <li>
            <Link
              activeClass={classes["active"]}
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              to="blogs"
            >
              blogs
            </Link>
          </li>
          <li>
            <Link
              activeClass={classes["active"]}
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              to="contact"
            >
              contact us
            </Link>
          </li>
        </ul>
        <button className={classes["register-btn"]}>register now</button>
      </div>
    </nav>
  );
}

export default Navigation;
