import React from "react";
import classes from "./About.module.scss";
import about from "../Images/about-image.jpg";
import { OutlineButton } from "../ui-components/Button";

function About() {
  return (
    <section id="home" className={classes["section-about"]}>
      <div className={classes["section-about__image"]}>
        <img src={about} alt="about " />
      </div>
      <div className={classes["section-about__content"]}>
        <h2 className="heading-secondary">Who we are</h2>
        <p className={classes["text"]}>
          The Indian real estate sector is resilient despite global headwinds.
          Returns are impressive and the sector is expected to reach US$ 1
          trillion in market size by 2030 (Niti Aayog report, 2021). However,
          the whole real estate purchase journey is very tedious and takes more
          than 2 years on average. Further, as the ticket size of this
          investment is large, security and trust become quite critical.
          Problems compound when you are currently away from your purchase
          destination. If you are experiencing difficulties in the real estate
          purchase journey, we are here to make it fast and transparent.
        </p>
        <OutlineButton>contact now</OutlineButton>
      </div>
    </section>
  );
}

export default About;
