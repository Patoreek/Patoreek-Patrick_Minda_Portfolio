import React from "react";

import classes from "./Projects.module.scss";

import image1 from "../../images/Opera-house.jpg";
import image2 from "../../images/sydney-harbour.jpg";
import image3 from "../../images/Beach-path.jpg";

import NextBtn from "../NextBtn/NextBtn";

import { ReactComponent as LiveSVG } from "../../images/live.svg";

import { DiGithubFull, DiGithubBadge } from "react-icons/di";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const Projects = () => {
  return (
    <div className={classes.projectsBg}>
      <div className={classes.projectsContainer} id="projects">
        <h3 className={classes.projectsHeader}>Projects</h3>
        <div className={classes.cardsContainer}>
          {/* LOCUS CARD */}
          <div
            className={classes.card}
            data-aos="flip-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div className={classes.card__Front}>
              <div
                className={`${classes.imageContainer} ${classes.imageContainer__red}`}
              >
                <img src={image1}></img>
              </div>
              <div className={classes.titleContainer}>
                <h3>Locus</h3>
              </div>
              <div className={classes.listContainer}>
                <ul>
                  <li>Dive site Locator</li>
                  <li>Add, edit divesites</li>
                  <li>Comment and rate the sites</li>
                  <li>Log in and view profiles</li>
                </ul>
              </div>
            </div>
            <div className={`${classes.card__Back} ${classes.card__Back__red}`}>
              <div className={classes.technologyContainer}>
                <h3 className={classes.technologyHeader}>Technologies used</h3>
                <div className={classes.techListContainer}>
                  <ul>
                    <li> M - MongoDB</li>
                    <li> E - Express.js </li>
                    <li> R - React</li>
                    <li> N - Node.js</li>
                  </ul>
                </div>
              </div>
              <div className={classes.githubBtnContainer}>
                <a
                  href="https://github.com/Patoreek/locus_frontend"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={classes.githubBtn}
                >
                  <DiGithubFull
                    className={`${classes.githubNameIcon} ${classes.githubNameIcon__red}`}
                  />
                  <DiGithubBadge
                    className={`${classes.githubLogoIcon} ${classes.githubLogoIcon__red}`}
                  />
                </a>
              </div>
              <div className={classes.liveBtnContainer}>
                {/* CHANGE THIS TO a TAG WHEN THERE IS A LIVE VERSION OR THERE IS ANOTHER PROJECT */}
                <div
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`${classes.liveBtn} ${classes.liveBtn__disabled}`}
                >
                  <span
                    className={`${classes.liveText} ${classes.liveText__red} ${classes.liveText__disabled} `}
                  >
                    Live
                  </span>
                  <LiveSVG
                    className={`${classes.liveIcon} ${classes.liveIcon__red} ${classes.liveIcon__disabled}`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* BRIGHTE CARD */}
          <div
            className={classes.card}
            data-aos="flip-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <div className={classes.card__Front}>
              <div
                className={`${classes.imageContainer} ${classes.imageContainer__blue}`}
              >
                <img src={image2}></img>
              </div>
              <div className={classes.titleContainer}>
                <h3>Brighte</h3>
              </div>
              <div className={classes.listContainer}>
                <ul>
                  <li>Landing Page</li>
                  <li>Simple Design</li>
                  <li>1 to 1 Build</li>
                  <li>Assets provided</li>
                </ul>
              </div>
            </div>
            <div
              className={`${classes.card__Back} ${classes.card__Back__blue}`}
            >
              <div className={classes.technologyContainer}>
                <h3 className={classes.technologyHeader}>Technologies used</h3>
                <div className={classes.techListContainer}>
                  <ul>
                    <li> Adobe XD </li>
                    <li> Responsive Design</li>
                    <li> Flexbox</li>
                    <li> CSS Grids</li>
                  </ul>
                </div>
              </div>
              <div className={classes.githubBtnContainer}>
                <div
                  className={`${classes.githubBtn} ${classes.githubBtn__disabled}`}
                >
                  {" "}
                  {/* CHANGE THIS TO a TAG WHEN THERE IS A GITHUB REPO THATS PUBLIC / ANOTHER PROJECT */}
                  <DiGithubFull
                    className={`${classes.githubNameIcon} ${classes.githubNameIcon__blue} ${classes.githubNameIcon__disabled}`}
                  />
                  <DiGithubBadge
                    className={`${classes.githubLogoIcon} ${classes.githubLogoIcon__blue} ${classes.githubLogoIcon__disabled}`}
                  />
                </div>
              </div>
              <div className={classes.liveBtnContainer}>
                <a
                  href="https://brighte.com.au/tradies/?fbclid=IwAR13xSzBVRglSwmP8RtCweExEnOjxgd1una6GhmuS1nydIohbQIGLBlenbg"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={classes.liveBtn}
                >
                  <span
                    className={`${classes.liveText} ${classes.liveText__blue}`}
                  >
                    Live
                  </span>
                  <LiveSVG
                    className={`${classes.liveIcon} ${classes.liveIcon__blue}`}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* MOMENTO CARD */}
          <div
            className={classes.card}
            data-aos="flip-up"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <div className={classes.card__Front}>
              <div
                className={`${classes.imageContainer} ${classes.imageContainer__green}`}
              >
                <img src={image3}></img>
              </div>
              <div className={classes.titleContainer}>
                <h3>MOMENTO</h3>
              </div>
              <div className={classes.listContainer}>
                <ul>
                  <li>Memory Card Game</li>
                  <li>3 Difficulties</li>
                  <li>Emoji faces to remember</li>
                  <li>Quite a challenging game</li>
                </ul>
              </div>
            </div>
            <div
              className={`${classes.card__Back} ${classes.card__Back__green}`}
            >
              <div className={classes.technologyContainer}>
                <h3 className={classes.technologyHeader}>Technologies used</h3>
                <div className={classes.techListContainer}>
                  <ul>
                    <li> React Application</li>
                    <li> Advanced CSS</li>
                    <li> CSS grids / Flexbox</li>
                    <li> Third party packages used</li>
                  </ul>
                </div>
              </div>

              <div className={classes.githubBtnContainer}>
                <a
                  href="https://github.com/Patoreek/Momento"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={classes.githubBtn}
                >
                  <DiGithubFull
                    className={`${classes.githubNameIcon} ${classes.githubNameIcon__green}`}
                  />
                  <DiGithubBadge
                    className={`${classes.githubLogoIcon} ${classes.githubLogoIcon__green}`}
                  />
                </a>
              </div>
              <div className={classes.liveBtnContainer}>
                {/* //TODO: ADD LIVE URL TO THIS a TAG.*/}
                <a
                  href="https://momentogame.netlify.app"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={classes.liveBtn}
                >
                  <span
                    className={`${classes.liveText} ${classes.liveText__green}`}
                  >
                    Live
                  </span>
                  <LiveSVG
                    className={`${classes.liveIcon} ${classes.liveIcon__green}`}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.moreBtnContainer}>
          <a
            href="https://github.com/Patoreek?tab=repositories"
            target="_blank"
            rel="noreferrer noopener"
            className={classes.moreProjectsBtn}
          >
            <span>See more projects</span>
          </a>
        </div>

        <NextBtn linkTo="contact" offset={100} />
      </div>
    </div>
  );
};

export default Projects;
