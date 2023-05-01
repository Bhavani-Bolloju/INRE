import React from 'react';
import classes from './NavLink.module.scss';
import { Link } from 'react-scroll';

function NavLink({to, text }) {
  return (
    <li className={classes['nav-link']}>
    <Link
        activeClass={classes["active"]}
        spy={true}
        smooth={true}
        offset={-160}
        duration={900}
        to={to }
    >
        { text}
      </Link>
  </li>
  );
}

export default NavLink;
