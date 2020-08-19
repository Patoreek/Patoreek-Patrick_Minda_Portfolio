import React, { useState } from 'react';

import ReactTypingEffect from 'react-typing-effect';
import ContactModal from '../Modals/ContactModal/ContactModal';
import NextBtn from '../NextBtn/NextBtn';

import video from '../../videos/LPageOpt.mp4';
import { ReactComponent as ChatIcon } from '../../images/bubbles3.svg';
import { ReactComponent as DownloadIcon } from '../../images/file-text2.svg';

import { Link } from 'react-scroll';

import ResumePDF from '../../resume/Patrick_Minda_Resume_Portfolio.pdf';

import classes from './Banner.module.scss';


const Banner = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const modalHandler =() => {
        console.log("bt pressed");
        setModalOpen(true);
    }

    return (
            <div className={classes.Banner} id="banner">
         
                <div className={classes.bgVideoContainer}>
                    <video className={classes.video} autoPlay muted loop>
                        <source src={video} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={classes.nameSloganContainer}>
                    
                    {modalOpen ? <ContactModal closeModal={setModalOpen(false)} /> : null }

                    {/* <ReactTypingEffect
                            text="Patrick Minda." //text=["Hello.", "World!"]
                            speed="75"
                            typingDelay="500"
                            eraseDelay="1000000"
                            className={classes.nameText}
                        /> */}
                    <h1 className={classes.nameText}>Patrick Minda</h1>

                    <p className={classes.roleText}>
                        <ReactTypingEffect
                            text={"Jnr. Fullstack Javascript Developer"} //text=["Hello.", "World!"]
                            speed="60"
                            typingDelay="2500"
                            eraseDelay="1000000"
                        />
                    </p>
                   
                    <p className={classes.locationText}>
                    <span className={classes.basedInText}>Based in</span> <span className={classes.sydneyText}>Sydney</span>, <span className={classes.australiaText}>Australia</span>
                    </p>
                </div>
                
                <div className={classes.buttonsContainer}>
            
                        <div className={classes.buttonLabel}><span>Contact me</span></div>
                        {/* <div className={classes.contactButton} onClick={modalHandler}>
                            <ChatIcon className={classes.icon}/>
                        </div> */}
                        <Link to='contact'
                            smooth={true}
                            spy={true}
                            duration={1500}
                            offset={100}
                            className={classes.contactButton}
                        >
                              <ChatIcon className={classes.icon}/>
                        </Link>
                 
                    
                        <div className={classes.buttonLabel}><span>Resume PDF</span></div>
                        <a href={ResumePDF} target="_blank" rel="noopener noreferrer" download>
                        <div className={classes.downloadButton}>
                            <DownloadIcon className={classes.icon}/>
                        </div>
                        </a>
                    
                </div>

                <NextBtn linkTo="bio"/>

            </div>
    );
};

export default Banner;