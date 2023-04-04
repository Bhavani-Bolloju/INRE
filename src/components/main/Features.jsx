import React, { useState } from "react";
import classes from "./Features.module.scss";

import image1 from "../Images/feature-image-1.png";
import image2 from "../Images/features-image-2.png";
import image3 from "../Images/feature-image-3.png";
import FeatureBox from "../ui-components/FeatureBox";

function Features() {
  const [activeFeature, setActiveFeature] = useState("2");

  const featureActiveHandler = function (value) {
    setActiveFeature(value);
  };

  return (
    <section id="offerings" className={classes["section-features"]}>
      <h2 className="heading-secondary">our offerings</h2>
      <p className={classes["section-features__text"]}>
        This whole purchase journey can be divided into three stages. For more
        details, <a href="#">Click Here</a>
      </p>
      <div className="section-cards">
        <div className="section-card--1">
          <FeatureBox
            contentHeading="background verification"
            image={image1}
            text="Assuring your capital is in safe hands, we provide detailed
            verification reports of the project and developer. These are
            customized and detailed..."
            buttonText="Contact us"
            number="1"
            heading="Pre-Booking"
            onActive={featureActiveHandler}
            active={activeFeature}
          />
        </div>
        <div className="section-card--2">
          <FeatureBox
            contentHeading="Virtual site visit"
            image={image2}
            text="It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV..."
            buttonText="Contact us"
            number="2"
            heading="Post-Booking & Pre-Registration"
            onActive={featureActiveHandler}
            active={activeFeature}
          />
        </div>

        <div className="section-card--3">
          <FeatureBox
            contentHeading="Title diligence"
            image={image3}
            text="Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of..."
            buttonText="contact us"
            number="3"
            heading="Post-Registration"
            onActive={featureActiveHandler}
            active={activeFeature}
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
