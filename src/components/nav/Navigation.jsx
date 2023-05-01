import React from "react";
import classes from "./Navigation.module.scss";

import NavLink from "../ui-components/NavLink";

function Navigation() {
  return (
    <nav className={classes.nav}>
      <div className={classes["nav-container"]}>
        <div className={classes["nav-logo"]}>
          <h1>INRE</h1>
          <span>innovation in reality</span>
        </div>
        <ul className={classes["nav-list"]}>
          <NavLink to='home' text='home'/>
          <NavLink to='offerings' text='our offerings'/>
          <NavLink to='team' text='our team'/>
          <NavLink to='blogs' text='blogs'/>
          <NavLink to='contact' text='contact us'/>
        </ul>
        <button className={classes["register-btn"]}>register now</button>
      </div>
    </nav>
  );
}

export default Navigation;
