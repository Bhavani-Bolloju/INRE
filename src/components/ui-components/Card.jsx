import React from "react";
import classes from "./Card.module.scss";

function Card(props) {
  return (
    <div className={classes.card}>
      <img src={props.image} alt="image" />
      <div>{props.children}</div>
    </div>
  );
}

export default Card;
