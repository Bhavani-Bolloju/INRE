import React from "react";
import classes from "./Team.module.scss";
import Card from "../ui-components/Card";
import team1 from "../Images/Team-1.png";
import team2 from "../Images/Team-2.png";
import team3 from "../Images/Team-3.png";

function Team() {
  return (
    <section id="team" className={classes["section-team"]}>
      <h2 className="heading-secondary">our team members</h2>
      <div className="section-cards">
        <div className="section-card--1">
          <Card image={team1}>
            <h3 className={classes["team-member-name"]}>Brajest Pathak</h3>
            <p className={classes["team-member-role"]}>
              A Chartered Accountant & Company Secretary, has over a decade of
              experience in managing realty focused venture capital funds, and
              was heading Azure Capital Advisors Private Limited. He has also
              been...
            </p>
            <p className={classes["view-more"]}>
              <a href="#">view more..</a>
            </p>
          </Card>
        </div>
        <div className="section-card--2">
          <Card image={team2}>
            <h3 className={classes["team-member-name"]}>Deepak shukla</h3>
            <p className={classes["team-member-role"]}>
              Deepak Shukla has completed his B.Tech (hons.) from the Indian
              Institute of Technology (IIT) Kharagpur and obtained an MBA from
              the Indian Institute of Management (IIM) Ahmedabad, India.
            </p>
            <p className={classes["view-more"]}>
              <a href="#">view more..</a>
            </p>
          </Card>
        </div>
        <div className="section-card--3">
          <Card image={team3}>
            <h3 className={classes["team-member-name"]}>Alok kumar</h3>
            <p className={classes["team-member-role"]}>
              Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25
              years of experience in management responsibilities in top tier
              companies including Infosys, Infosys BPO and Azure Capital.
              Co-Founded Azure Capital, a Real
            </p>
            <p className={classes["view-more"]}>
              <a href="#">view more..</a>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Team;
