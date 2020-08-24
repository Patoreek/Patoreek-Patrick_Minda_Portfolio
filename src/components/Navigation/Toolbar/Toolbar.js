import React, { useState, useEffect } from "react";

import classes from "./Toolbar.module.scss";

import { Link } from "react-scroll";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Toolbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [mobNav, setMobNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const bannerHeight = document.getElementById("banner").offsetHeight;

      const isTop = window.scrollY < bannerHeight; /* 832px */

      //console.log('[Toolbar] height of banner is ' + bannerHeight);
      /* console.log(window.scrollY); */
      if (isTop !== true) {
        setScrolled(true);
        /* console.log(isTop); */
      } else {
        setScrolled(false);
        /* console.log(isTop); */
      }
    });
  }, []);

  const toggleMobileNav = () => {
    setMobNav(!mobNav);
  };

  return (
    <div>
      {scrolled ? <div className={classes.invisNav}></div> : ""}

      <nav
        className={
          scrolled
            ? [classes.toolbar, classes.scrolled].join(" ")
            : classes.toolbar
        }
        id="toolbar"
      >
        <Link
          to="banner"
          smooth={true}
          spy={true}
          duration={1500}
          offset={-65}
          className={classes.navLink}
        >
          Home
        </Link>

        <Link
          to="bio"
          smooth={true}
          spy={true}
          duration={1500}
          offset={-20}
          className={classes.navLink}
        >
          Bio
        </Link>

        <Link
          to="skills"
          smooth={true}
          spy={true}
          duration={1500}
          offset={45}
          className={classes.navLink}
        >
          Skills
        </Link>

        <Link
          to="projects"
          smooth={true}
          spy={true}
          duration={1500}
          offset={140}
          className={classes.navLink}
        >
          Projects
        </Link>

        <Link
          to="contact"
          smooth={true}
          spy={true}
          duration={1500}
          offset={0}
          className={classes.navLink}
        >
          Contact
        </Link>
      </nav>

      <nav
        className={
          scrolled
            ? [classes.mobileNav, classes.scrolled].join(" ")
            : classes.mobileNav
        }
      >
        <GiHamburgerMenu
          className={classes.navToggleBtn}
          onClick={toggleMobileNav}
        />
      </nav>

      <div
        className={
          mobNav
            ? [classes.mobileToolbar, classes.openNav].join(" ")
            : classes.mobileToolbar
        }
        id="mobileToolbar"
      >
        <IoMdClose className={classes.navCloseBtn} onClick={toggleMobileNav} />
        {/* //TODO: BANNER */}
        <Link
          to="banner"
          smooth={true}
          spy={true}
          duration={1500}
          offset={-65}
          className={classes.navLink}
          onClick={toggleMobileNav}
        >
          Home
        </Link>

        {/* //TODO: BIO */}
        <Link
          to="bio"
          smooth={true}
          spy={true}
          duration={1500}
          offset={-20}
          className={classes.navLink}
          onClick={toggleMobileNav}
        >
          Bio
        </Link>

        {/* //TODO: SKILLS */}
        <Link
          to="skills"
          smooth={true}
          spy={true}
          duration={1500}
          offset={45}
          className={classes.navLink}
          onClick={toggleMobileNav}
        >
          Skills
        </Link>

        {/* //TODO: PROJECTS */}
        <Link
          to="projects"
          smooth={true}
          spy={true}
          duration={1500}
          offset={140}
          className={classes.navLink}
          onClick={toggleMobileNav}
        >
          Projects
        </Link>

        {/* //TODO: CONTACT */}
        <Link
          to="contact"
          smooth={true}
          spy={true}
          duration={1500}
          offset={0}
          className={classes.navLink}
          onClick={toggleMobileNav}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Toolbar;
