import React, { useState } from "react";
import classes from "./FeatureBox.module.scss";
import { OutlineButton } from "./Button";

function FeatureBox({
  heading,
  text,
  buttonText,
  image,
  number,
  contentHeading,
  onActive,
  active,
}) {
  return (
    <div className={classes["section-feature__box"]}>
      <h3
        className={`${classes[`feature-box__heading`]} 
        ${classes[active === number ? "active" : ""]}
        `}
        onClick={() => onActive(number)}
      >
        <span className={classes["box-heading__num"]}>{number}</span>
        <span className={classes["box-heading__text"]}>{heading}</span>
      </h3>
      <div className={classes["feature-box"]}>
        <div className={classes["feature-box__content"]}>
          <img src={image} alt="" />
          <h4>{contentHeading}</h4>
          <p>{text}</p>
          <OutlineButton>{buttonText}</OutlineButton>
        </div>
      </div>
    </div>
  );
}

export default FeatureBox;
