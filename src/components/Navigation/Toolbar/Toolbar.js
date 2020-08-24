import React, { useState, useEffect } from "react";

import classes from "./Toolbar.module.scss";

import { Link } from "react-scroll";

const Toolbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
    </div>
  );
};

export default Toolbar;
