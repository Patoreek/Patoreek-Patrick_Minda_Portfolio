import React, { useState, useEffect } from "react";

import "aos/dist/aos.css"; // You can also use <link> for styles

import classes from "./Skills.module.scss";

import {
  FaReact,
  FaNode,
  FaSass,
  FaFigma,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";

import {
  DiJavascript,
  DiJqueryLogo,
  DiBootstrap,
  DiNpm,
  DiCss3,
  DiMysql,
  DiMongodb,
  DiPhp,
  DiPhotoshop,
  DiGit,
} from "react-icons/di";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { ReactComponent as CommunincationLogo } from "../../images/talk.svg";
import { ReactComponent as ProblemSolveLogo } from "../../images/idea.svg";
import { ReactComponent as LearnLogo } from "../../images/learn.svg";
import { ReactComponent as SelfManageLogo } from "../../images/selfManage.svg";

import NextBtn from "../NextBtn/NextBtn";

const Skills = () => {
  const [face, setFace] = useState(1);

  const [classFace, setClassFace] = useState(classes.showFront);

  /* 
        1 - Front   || Frontend
        2 - Right   || Backend
        3 - Bottom  || Style
        4 - Left    || Design
        5 - Top     || Version Control
        6 - Bottom  || Wordpress or NPM
    */

  //let classFace = classes.showLeft;

  const prevBtnHandler = () => {
    if (face === 1) {
      setFace(6);
    } else {
      setFace((face) => face - 1);
    }
  };

  const nextBtnHandler = () => {
    if (face === 6) {
      setFace(1);
    } else {
      setFace((face) => face + 1);
    }
  };

  useEffect(() => {
    //console.log(face);

    if (face === 1) {
      //console.log("SHOULD SHOW FRONT");
      setClassFace(classes.showFront);
    } else if (face === 2) {
      //console.log("SHOULD SHOW RIGHT");
      setClassFace(classes.showRight);
    } else if (face === 3) {
      //console.log("SHOULD SHOW BACK");
      setClassFace(classes.showBack);
    } else if (face === 4) {
      //console.log("SHOULD SHOW LEFT");
      setClassFace(classes.showLeft);
    } else if (face === 5) {
      //console.log("SHOULD SHOW TOP");
      setClassFace(classes.showTop);
    } else if (face === 6) {
      //console.log("SHOULD SHOW BOTTOM");
      setClassFace(classes.showBottom);
    }
  }, [face]);

  return (
    <div className={classes.skillsBg}>
      <div className={classes.skillsContainer} id="skills">
        <div className={classes.skillsHeader}>
          <h2>Skills</h2>
        </div>

        <div
          className={classes.cubeContainer}
          data-aos="zoom-in-right"
          data-aos-delay="200"
          data-aos-duration="1250"
        >
          <div className={classes.scene}>
            <div className={`${classes.cube} ${classFace}`}>
              <div className={`${classes.cubeFace} ${classes.faceFront}`}>
                <span className={classes.cubeText}>
                  {/* Front */}
                  <FaReact className={classes.reactIcon} />
                </span>
              </div>
              <div className={`${classes.cubeFace} ${classes.faceRight}`}>
                <span className={classes.cubeText}>
                  {/* Back */}
                  <FaNode className={classes.nodeIcon} />
                </span>
              </div>
              <div className={`${classes.cubeFace} ${classes.faceBack}`}>
                <span className={classes.cubeText}>
                  {/* Right */}
                  <FaSass className={classes.sassIcon} />
                </span>
              </div>
              <div className={`${classes.cubeFace} ${classes.faceLeft}`}>
                <span className={classes.cubeText}>
                  {/* Left */}
                  <FaFigma className={classes.figmaIcon} />
                </span>
              </div>
              <div className={`${classes.cubeFace} ${classes.faceTop}`}>
                <span className={classes.cubeText}>
                  {/* Top */}
                  <FaGithub className={classes.githubIcon} />
                </span>
              </div>
              <div className={`${classes.cubeFace} ${classes.faceBottom}`}>
                <span className={classes.cubeText}>
                  {/* Bottom */}
                  <FaWordpress className={classes.wordpressIcon} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${classes.prevBtn}`}
          data-aos="fadeIn"
          data-aos-delay="1000"
          data-aos-duration="750"
        >
          <button className={`${classes.btn}`} onClick={prevBtnHandler}>
            <span className={classes.btnIcon}>
              <IoIosArrowBack className={classes.prevIcon} />
            </span>
          </button>
        </div>

        <div
          className={`${classes.nextBtn}`}
          data-aos="fadeIn"
          data-aos-delay="1000"
          data-aos-duration="750"
        >
          <button className={`${classes.btn}`} onClick={nextBtnHandler}>
            <span className={classes.btnIcon}>
              <IoIosArrowForward className={classes.nextIcon} />
            </span>
          </button>
        </div>

        <div
          className={classes.skillsBoxGridCell}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1250"
        >
          <div className={classes.skillsBoxContainer}>
            <div className={classes.skillsBoxHeader}>
              {face === 1 && <h3>Frontend</h3>}
              {face === 2 && <h3>Backend</h3>}
              {face === 3 && <h3>Styling</h3>}
              {face === 4 && <h3>Design</h3>}
              {face === 5 && <h3>Version Control</h3>}
              {face === 6 && <h3>Wordpress</h3>}
            </div>
            {face === 1 && (
              <div className={classes.technologiesContainer}>
                <DiJavascript
                  className={`${classes.techIcon} ${classes.techJSIcon}`}
                />
                <DiJqueryLogo
                  className={`${classes.techIcon} ${classes.techJQIcon}`}
                />
                <DiBootstrap
                  className={`${classes.techIcon} ${classes.techBSIcon}`}
                />
                <DiNpm
                  className={`${classes.techIcon} ${classes.techNPMIcon}`}
                />
              </div>
            )}
            {face === 2 && (
              <div className={classes.technologiesContainer}>
                <DiMysql
                  className={`${classes.techIcon} ${classes.techSqlIcon}`}
                />
                <DiMongodb
                  className={`${classes.techIcon} ${classes.techMongoIcon}`}
                />
                <DiPhp
                  className={`${classes.techIcon} ${classes.techPhpIcon}`}
                />
                <DiNpm
                  className={`${classes.techIcon} ${classes.techNPMIcon}`}
                />
              </div>
            )}
            {face === 3 && (
              <div className={classes.technologiesContainer}>
                <DiCss3
                  className={`${classes.techIcon} ${classes.techCSSIcon}`}
                />
              </div>
            )}
            {face === 4 && (
              <div className={classes.technologiesContainer}>
                <DiPhotoshop
                  className={`${classes.techIcon} ${classes.techPSIcon}`}
                />
              </div>
            )}
            {face === 5 && (
              <div className={classes.technologiesContainer}>
                <DiGit
                  className={`${classes.techIcon} ${classes.techGitIcon}`}
                />
              </div>
            )}
            {face === 6 && (
              <div className={classes.technologiesContainer}>
                <DiPhp
                  className={`${classes.techIcon} ${classes.techPhpIcon}`}
                />
              </div>
            )}
            <div className={classes.descriptionContainer}>
              {face === 1 && ( //* FRONTEND DESCRIPTION
                <p>
                  Ability to design and style websites with React as my
                  preferred framework. I take advantage of packages available
                  for the framework to further my projects. Able to connect to a
                  REST API and build complex applications.
                </p>
              )}
              {face === 2 && ( //* BACKEND DESCRIPTION
                <p>
                  Experience in both SQL and MongoDB. Node.js being the
                  preffered technology but also have experience in PHP.
                  Express.js and Mongoose to build sophisicated MERN
                  applications. Experience in REST and GraphQL.
                </p>
              )}
              {face === 3 && ( //* SASS DESCRIPTION
                <p>
                  Consistantly learning more techniques and skills to design and
                  style my website cleaner and more gorgeous than ever before.
                  Using all the most up to date techniques such as Sass,
                  flexbox, and CSS grids.
                </p>
              )}
              {face === 4 && ( //* DESIGN DESCRIPTION
                <p>
                  Experience in both Photoshop and Figma. Know my way around the
                  applications to create whatever I imagine. Comfortable using
                  these software for my design needs.
                </p>
              )}
              {face === 5 && ( //* VERSION CONTROL DESCRIPTION
                <p>Ability to use Git and Github for version control.</p>
              )}
              {face === 6 && ( //* WORDPRESS DESCRIPTION
                <p>
                  Experience building custom Wordpress themes. Comfortable
                  navigating and using PHP and all of Wordpress functionalities.
                  Powerful and an enjoyable technology.
                </p>
              )}
            </div>
          </div>
        </div>

        <div
          className={classes.traitsContainer}
          data-aos="zoom-out-up"
          data-aos-duration="1000"
        >
          <div className={classes.traitsBox1}>
            <CommunincationLogo
              className={`${classes.traitLogo} ${classes.traitLogo__comm}`}
            />
            <h3 className={classes.traitHeader}>Communication</h3>
            <p className={classes.traitDescription}>
              Clear and Precise communication. Great at listening and
              effectively follow instructions. Able to be a team player.
            </p>
          </div>

          <div className={classes.traitsBox2}>
            <ProblemSolveLogo
              className={`${classes.traitLogo} ${classes.traitLogo__scaled} ${classes.traitLogo__solve}`}
            />
            <h3 className={classes.traitHeader}>Problem Solving</h3>
            <p className={classes.traitDescription}>
              Enjoy the challenges of difficult problems. Able to think outside
              the box and find solutions in a timely manner. Consistent learning
              allows more complex problems to solve which help builds this
              skill.
            </p>
          </div>
          <div className={classes.traitsBox3}>
            <SelfManageLogo
              className={`${classes.traitLogo} ${classes.traitLogo__manage}`}
            />
            <h3 className={classes.traitHeader}>Self-Managable</h3>
            <p className={classes.traitDescription}>
              Able to work independantly. Self-learn and put in extra work to
              create projects that are to the best of my ability. Can manage my
              time effectively and keep on top of tasks.
            </p>
          </div>
          <div className={classes.traitsBox4}>
            <LearnLogo
              className={`${classes.traitLogo} ${classes.traitLogo__scaled} ${classes.traitLogo__learn}`}
            />
            <h3 className={classes.traitHeader}>Desire to learn</h3>
            <p className={classes.traitDescription}>
              Learning new technologies and building projects allows for my
              skillset as a web developer to sharpen. I always strive to learn
              the latest and greatest techniques from all aspects of web
              development.
            </p>
          </div>
        </div>

        <NextBtn
          linkTo="projects"
          color="#9b9b9b"
          offset={125}
          scrollOffset={140}
        />
      </div>
    </div>
  );
};

export default Skills;
