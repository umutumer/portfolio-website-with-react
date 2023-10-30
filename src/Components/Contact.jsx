import React from "react";
import "../Styles/Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
  const instagramURL = "https://www.instagram.com/umutumer/";
  const githubURL = "https://github.com/umutumer/";
  const linkedinURL = "https://www.linkedin.com/in/umutumer/";
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="contact">
      <div className="contact-title">
        <h3>Contact Me</h3>
      </div>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-location">
            <FaLocationDot className="contact-icon" />
            <span>Kırsehir/Turkey</span>
          </div>
          <div className="contact-mail">
            <GrMail className="contact-icon" /> 
            <span>utumer6@gmail.com</span>
          </div>
          <div className="comtact-icons">
            <button
              className="contact-btn"
              onClick={() => openInNewTab(githubURL)}
            >
              <FiGithub className="contact-icon" />
            </button>
            <button
              className="contact-btn"
              onClick={() => openInNewTab(instagramURL)}
            >
              <BiLogoInstagramAlt className="contact-icon" />
            </button>
            <button
              className="contact-btn"
              onClick={() => openInNewTab(linkedinURL)}
            >
              <FaLinkedinIn className="contact-icon" />
            </button>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="FullName" />
            <input type="email" placeholder="E-mail" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message..."
            ></textarea>
            <button className="contact-form-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
