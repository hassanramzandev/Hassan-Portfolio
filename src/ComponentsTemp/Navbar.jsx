// ============================================================
// File Name : Navbar.jsx
// Folder    : src/components
// ============================================================

import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserCircle,
  FaFilePdf,
} from "react-icons/fa";

function Navbar() {
  const [infoOpen, setInfoOpen] = useState(false);

  function downloadCV() {
    window.open("/Hassan-CV.pdf", "_blank");
  }

  return (
    <nav className="navbar">

      {/* Logo */}
      <h2 className="logo">
        Hassan Portfolio
      </h2>

      {/* Navigation */}
      <ul className="nav-links">

        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/skills">
            Skills
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects">
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact">
            <span class="desktop-show">Message</span>
            <span class="mobile-show">Contact</span>
          </NavLink>
        </li>

      </ul>

      {/* Right Side */}
      <div className="nav-right">

        <button
          className="personal-btn"
          onClick={() => setInfoOpen(!infoOpen)}
        >
          <FaUserCircle />
            Contact
        </button>

        {infoOpen && (
          <div className="personal-dropdown">

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hassanramzan319040@gmail.com">
              <span className="circle-icon">
                <FaEnvelope />
              </span>
              Email
            </a>

            <a
              href="https://wa.me/92706471437"
              target="_blank"
              rel="noreferrer"
            >
              <span className="circle-icon">
                <FaWhatsapp />
              </span>
              WhatsApp
            </a>

            <a href="tel:+92706471437">
              <span className="circle-icon">
                <FaPhoneAlt />
              </span>
              Call
            </a>

            <a
              href="https://www.google.com/maps?q=Kot+Addu"
              target="_blank"
              rel="noreferrer"
            >
              <span className="circle-icon">
                <FaMapMarkerAlt />
              </span>
              Location
            </a>

            <button
              className="dropdown-btn"
              onClick={downloadCV}
            >
              <span className="circle-icon">
                <FaFilePdf />
              </span>
              Download CV
            </button>

          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;