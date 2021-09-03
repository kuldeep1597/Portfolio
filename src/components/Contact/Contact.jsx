import React from "react";
import FooterLink from "../FooterLink/FooterLink";
import Header from "../Header/Header";
import "./Contact.css";
import contactVector from "./../../assets/contact_anime.png";
import github from "./../../assets/gh.png";
import linkedin from "./../../assets/li.png";
import instagram from "./../../assets/in.png";

const Contact = () => {
  return (
    <div className="section-container">
      <Header
        heading="Get in touch."
        details="Feel free to drop me an email."
      />

      <div className="contact-form-container">
        <form
          className="contact-form"
          action="https://formspree.io/f/myyllklb"
          method="POST"
        >
          <input
            type="email"
            placeholder="Your Email ID"
            name="_replyto"
            className="input-box email-input"
            autoComplete="off"
          />

          <textarea
            type="text"
            placeholder="Your Message"
            name="message"
            className="input-box body-input"
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Email
          </button>
        </form>
      </div>

      <div className="social-icons-container">
        <a
          href="https://github.com/kuldeep1597"
          target="_blank"
          className="social-icon"
        >
          <img src={github} alt="social" />
        </a>
        <a
          href="https://www.linkedin.com/in/kuldeep-chahar-4173b4174/"
          target="_blank"
          className="social-icon"
        >
          <img src={linkedin} alt="social" />
        </a>
        <a
          href="https://www.instagram.com/kuldeep15764/"
          target="_blank"
          className="social-icon"
        >
          <img src={instagram} alt="social" />
        </a>
      </div>

      <FooterLink phrase="Read more " toAdress="/about" link="about me." />

      <div className="vector-frame">
        <img src={contactVector} alt="vector" className="about-vector" />
      </div>
    </div>
  );
};

export default Contact;
