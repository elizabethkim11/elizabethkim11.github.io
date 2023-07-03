import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import "./App.css";
import resume from "./resume.pdf";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://github.com/elizabethkim11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="footer-icon" />
        </a>
        <a
          href="https://linkedin.com/in/elizabethkim11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="mailto:elizabethkim03@gmail.com">
          <FaEnvelope className="footer-icon" />
        </a>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <FaFileAlt className="footer-icon" />
        </a>
      </div>
      <p className="footer-text">Made with React and 🫶🏼 by Elizabeth Kim</p>
      <p
        className="footer-text"
        style={{ fontSize: ".9rem", fontStyle: "italic" }}
      >
        Last updated 7/3/2023
      </p>
    </footer>
  );
}

export default Footer;
