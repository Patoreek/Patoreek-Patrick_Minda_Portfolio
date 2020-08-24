import React, { useState } from "react";

import classes from "./Contact.module.scss";

import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

import { IoIosMail, IoIosArrowDropup } from "react-icons/io";

import { Link } from "react-scroll";

import "aos/dist/aos.css"; // You can also use <link> for styles

import emailjs from "emailjs-com";

const Contact = () => {
  const [emailSuccess, setEmailSuccess] = useState(false);

  const [name, setName] = useState();

  const [email, setEmail] = useState();

  const [message, setMessage] = useState();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail_patrick",
        "Portfolio Email Template",
        e.target,
        "user_wGoVRA0NWKDdlPkrp6XbF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className={classes.contactBg}>
      <div className={classes.contact} id="contact">
        <div className={classes.headerContainer}>
          <h1 className={classes.contactHeader}> Get in touch with me</h1>
        </div>

        <div
          className={classes.formContainer}
          data-aos="fadeIn"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <h2 className={classes.formContainer__header}> Send a message</h2>

          <form className={classes.form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className={classes.form__nameInput}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className={classes.form__emailInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              className={classes.form__messageInput}
              placeholder="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <input
              type="submit"
              value="Send Message"
              className={classes.form__submit}
            />
            {emailSuccess ? (
              <span className={classes.form__sentText}> Message sent.</span>
            ) : (
              ""
            )}
          </form>

          <div className={classes.image}>
            <div className={classes.links}>
              <a
                href="https://www.linkedin.com/in/patrick-minda-2318a5143/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin className={classes.links__linkedInIcon} />
              </a>
              <a
                href="https://github.com/Patoreek"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithubSquare className={classes.links__githubIcon} />
              </a>
              <a href="mailto:patrick.minda@hotmail.com">
                <IoIosMail className={classes.links__emailIcon} />
              </a>
            </div>

            <h4 className={classes.image__collabText}>
              Interested in collaborating?
            </h4>
            <h4 className={classes.image__newDev}>
              Searching for a new developer?
            </h4>
          </div>
        </div>

        <div className={classes.topBtnContainer}>
          <div className={classes.topBtnBg}>
            <Link
              to="banner"
              smooth={true}
              spy={true}
              duration={1500}
              offset={0}
            >
              <IoIosArrowDropup className={classes.topBtn} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
