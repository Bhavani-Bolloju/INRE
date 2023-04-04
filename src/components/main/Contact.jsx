import React from "react";
import classes from "./Contact.module.scss";
import contact from "../Images/contact.jpg";

function Contact() {
  return (
    <section id="contact" className={classes["section-contact"]}>
      <div className={classes["contact-container"]}>
        <div className="section-boxes">
          <h3>get in touch with us to connect</h3>
          <form>
            <h4>contact us</h4>
            <input type="text" placeholder="full name" />
            <input type="email" placeholder="email address" />
            <input type="tel" placeholder="phone number" />
            <input type="text" placeholder="country" />
            <input type="text" placeholder="stages" />
            <button>submit</button>
          </form>
          <div className={classes["contact-image"]}>
            <img src={contact} alt="contact" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
