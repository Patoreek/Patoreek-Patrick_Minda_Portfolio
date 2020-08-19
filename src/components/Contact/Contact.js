
import React from 'react';

import classes from './Contact.module.scss';

import { 
    FaLinkedin,
    FaGithubSquare,  
} from 'react-icons/fa';

import {
    IoIosMail,
    IoIosArrowDropup,
} from 'react-icons/io';

import { Link } from 'react-scroll';


const Contact = () => {



    return (
        <div className={classes.contact} id="contact">
                <div className={classes.headerContainer}>
                    <h1 className={classes.contactHeader}> Get in touch with me</h1>
                </div>

                <div className={classes.formContainer}>
                    <h2 className={classes.formContainer__header}> Send a message</h2>

                    <form className={classes.form}>
                       
                                <input  type="text" 
                                        name="name" 
                                        placeholder="Name"
                                        className={classes.form__nameInput} />
                    

                       
                            <input  type="email"
                                    name="email"  
                                    placeholder="Email"
                                    className={classes.form__emailInput} />
                    
                            <textarea   className={classes.form__messageInput}
                                        placeholder="Message">
                            </textarea>
                       
                        <input type="submit" value="Send Message" className={classes.form__submit} />
                    </form>

                    <div className={classes.image}>
                        <div className={classes.links}>
                            <a href="https://www.linkedin.com/in/patrick-minda-2318a5143/"  target="_blank" rel="noreferrer noopener">
                                <FaLinkedin className={classes.links__linkedInIcon} />
                            </a>
                            <a href="https://github.com/Patoreek" target="_blank" rel="noreferrer noopener" >
                            <FaGithubSquare className={classes.links__githubIcon} />
                            </a>
                            <a href="mailto:patrick.minda@hotmail.com">
                            <IoIosMail className={classes.links__emailIcon} />
                            </a>
                        </div>

                        <h4 className={classes.image__collabText}>Interested in collaborating?</h4>
                        <h4 className={classes.image__newDev}>Searching for a new developer?</h4>
                    </div>

                </div>

                <div className={classes.topBtnContainer}>
                    <div className={classes.topBtnBg}>
                        <Link to='banner'
                            smooth={true}
                            spy={true}
                            duration={1500}
                            offset={0}
                        >
                        <IoIosArrowDropup className={classes.topBtn}/>
                        </Link>
                    </div>
                </div>

                        

            </div>
    );
};

export default Contact;