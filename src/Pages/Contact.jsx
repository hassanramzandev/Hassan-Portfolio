// ============================================================
// File Name : Contact.jsx
// Folder    : src/pages
// ============================================================

import PageTransition from "../ComponentsTemp/PageTransition";
import {
  FaEnvelope,
  FaPaperPlane,
  FaDownload,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {

  // Form Reference
  const form = useRef();

  // Send Email Function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jzv5fz6",
        "template_kys5bqe",
        form.current,
        "lyEhKHgTvN8fAmLMY"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message!");
        }
      );
  };

  return (
    <PageTransition>
      <section className="contact">

        <h1>Contact</h1>

        <p>
          Open to Frontend Developer roles. Let's connect to build seamless
          digital experiences and contribute to your team's success.
        </p>

        {/* Mobile Quick Links */}

        <div className="mobile-contact-links">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yourname@gmail.com"
            className="mobile-link"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>

          <a
            href="https://wa.me/923706471437"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-link"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>

          <a
            href="/Hassan Ramzan _ CV.pdf"
            download
            className="mobile-link"
          >
            <FaDownload />
            <span>Download CV</span>
          </a>

        </div>

        <h2 className="contact-title">
          Get in Touch
        </h2>

        {/* Contact Form */}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <div className="input-row">

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />

          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
                    <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            <FaPaperPlane />
            Send Message
          </button>

        </form>

        {/* Map Title */}

        <h2 className="contact-title">
          Map
        </h2>

        {/* Google Map */}

        <iframe
          title="Location"
          src="https://www.google.com/maps?q=Faisalabad&output=embed"
          loading="lazy"
        ></iframe>

      </section>
    </PageTransition>
  );
}

export default Contact;