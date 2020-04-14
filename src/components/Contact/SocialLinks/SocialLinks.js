import React from 'react';

import classes from './socialLinks.module.css';
import './socialLinks.css';

import { FaFacebook,
    FaTwitter,
    FaGithub,
    FaLinkedin
    } from "react-icons/fa";

import { IoIosMail } from "react-icons/io";

const SocialLinks = (props) => {
    return (
        <div style={props.styleLinks}>
        <div className={classes.iconContainer} >
            <a href="https://www.facebook.com/patrick.minda"
               target="_blank"
               rel="noopener noreferrer" >
            <FaFacebook className="facebookIcon"/>
            </a>
        </div>
        
        <div className={classes.iconContainer}>
            <a href="https://twitter.com/PatrickMinda1"
               target="_blank"
               rel="noopener noreferrer">
            <FaTwitter className="twitterIcon"/>
            </a>
        </div>


        <div className={classes.iconContainer}>
            {/* OPEN MAILBOX AND GET READY TO SEND EMAIL*/}
            <IoIosMail className="outlookIcon" />
        </div>

        <div className={classes.iconContainer}>
            <a href="https://github.com/Patoreek"
               target="_blank"
               rel="noopener noreferrer">
            <FaGithub className="githubIcon"/>
            </a>
        </div>
        
        <div className={classes.iconContainer}>
            <a href="https://www.linkedin.com/in/patrick-minda-2318a5143/"
               target="_blank"
               rel="noopener noreferrer">
            <FaLinkedin className="linkedinIcon"/>
            </a>
        </div>

    </div>
    );
};

export default SocialLinks;