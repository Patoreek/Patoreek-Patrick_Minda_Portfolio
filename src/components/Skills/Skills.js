import React, {useState, useEffect} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import classes from './Skills.module.scss';

import { FaReact,
         FaNode,
         FaSass,
         FaFigma,
         FaGithub,
         FaWordpress} from 'react-icons/fa';

import { DiJavascript,
         DiJqueryLogo,
         DiBootstrap,
         DiNpm,
         DiCss3,
         DiMysql,
         DiMongodb,
         DiPhp,
         DiPhotoshop,
         DiGit
        } from 'react-icons/di';


import {ReactComponent as CommunincationLogo} from '../../images/talk.svg';
import {ReactComponent as ProblemSolveLogo} from '../../images/idea.svg';
import {ReactComponent as LearnLogo} from '../../images/learn.svg';
import {ReactComponent as SelfManageLogo} from '../../images/selfManage.svg';


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
        if (face === 1){
            setFace(6);
        } else {
            setFace(face => face - 1);
        }
    }

    const nextBtnHandler = () => {
        if (face === 6){
            setFace(1);
        } else {
            setFace(face => face + 1);
        }
    }

    useEffect(() => {
        console.log(face);

        if (face === 1) {
            console.log('SHOULD SHOW FRONT');
            setClassFace(classes.showFront);
        } 
        else if (face === 2) {
            console.log('SHOULD SHOW RIGHT');
            setClassFace(classes.showRight);
        }
        else if (face === 3) {
            console.log('SHOULD SHOW BACK');
            setClassFace(classes.showBack);
        }
        else if (face === 4) {
            console.log('SHOULD SHOW LEFT');
            setClassFace(classes.showLeft);
        }
        else if (face === 5) {
            console.log('SHOULD SHOW TOP');
            setClassFace(classes.showTop);
        }
        else if (face === 6) {
            console.log('SHOULD SHOW BOTTOM');
            setClassFace(classes.showBottom);
        }


    }, [face]);



    return (
        <div className={classes.skillsContainer} id="skills">
            
                <div className={classes.skillsHeader}>
                    <h2>Skills</h2>
                </div>
                
                <div className={classes.cubeContainer}
                    data-aos="zoom-in-right"
                    data-aos-delay="200"
                    data-aos-duration="1250">
                    <div className={classes.scene}>
                        <div class={`${classes.cube} ${classFace}`}>
                            <div class={`${classes.cubeFace} ${classes.faceFront}`}>
                                <span className={classes.cubeText}>
                                    {/* Front */}
                                    <FaReact className={classes.reactIcon}/>
                                </span>
                            </div>
                            <div class={`${classes.cubeFace} ${classes.faceRight}`}>
                                <span className={classes.cubeText}>
                                    {/* Back */}
                                    <FaNode className={classes.nodeIcon}/>
                                </span>
                            </div>
                            <div class={`${classes.cubeFace} ${classes.faceBack}`}>
                                <span className={classes.cubeText}>
                                    {/* Right */}
                                    <FaSass className={classes.sassIcon}/>
                                </span>
                            </div>
                            <div class={`${classes.cubeFace} ${classes.faceLeft}`}>
                                <span className={classes.cubeText}>
                                    {/* Left */}
                                    <FaFigma className={classes.figmaIcon}/>
                                </span>
                            </div>
                            <div class={`${classes.cubeFace} ${classes.faceTop}`}>
                                <span className={classes.cubeText}>
                                    {/* Top */}
                                    <FaGithub className={classes.githubIcon}/>
                                </span>
                            </div>
                            <div class={`${classes.cubeFace} ${classes.faceBottom}`}>
                                <span className={classes.cubeText}>
                                    {/* Bottom */}
                                    <FaWordpress className={classes.wordpressIcon}/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>       

                <div className={`${classes.prevBtn}`}
                    data-aos="fadeIn"
                    data-aos-delay="1000"
                    data-aos-duration="750">
                    <button className={`${classes.btn}`} onClick={prevBtnHandler}><span className={classes.btnIcon}> &#8592; </span></button>
                </div>

                <div className={`${classes.nextBtn}`}
                    data-aos="fadeIn"
                    data-aos-delay="1000"
                    data-aos-duration="750">
                    <button className={`${classes.btn}`} onClick={nextBtnHandler}><span className={classes.btnIcon}> &#8594; </span></button>
                </div>

                <div className={classes.skillsBoxGridCell}
                    data-aos="fade-up"
                    data-aos-delay="1500"
                    data-aos-duration="1000">
                    <div className={classes.skillsBoxContainer}>
                    <div className={classes.skillsBoxHeader}>
                        {face === 1 && (
                            <h3>Frontend</h3>
                        )}
                        {face === 2 && (
                            <h3>Backend</h3>
                        )}
                        {face === 3 && (
                            <h3>Styling</h3>
                        )}
                        {face === 4 && (
                            <h3>Design</h3>
                        )}
                        {face === 5 && (
                            <h3>Version Control</h3>
                        )}
                        {face === 6 && (
                            <h3>Wordpress</h3>
                        )}
                    </div>
                        {face === 1 && (
                            <div class = {classes.technologiesContainer}>
                                <DiJavascript className={`${classes.techIcon} ${classes.techJSIcon}`}/>
                                <DiJqueryLogo className={`${classes.techIcon} ${classes.techJQIcon}`}/>
                                <DiBootstrap className={`${classes.techIcon} ${classes.techBSIcon}`}/>
                                <DiNpm className={`${classes.techIcon} ${classes.techNPMIcon}`}/>
                            </div>
                        )}
                        {face === 2 && (
                            <div class = {classes.technologiesContainer}>
                                <DiMysql className={`${classes.techIcon} ${classes.techSqlIcon}`}/>
                                <DiMongodb className={`${classes.techIcon} ${classes.techMongoIcon}`}/>
                                <DiPhp className={`${classes.techIcon} ${classes.techPhpIcon}`}/>
                                <DiNpm className={`${classes.techIcon} ${classes.techNPMIcon}`}/>

                            </div>
                        )}
                        {face === 3 && (
                            <div class = {classes.technologiesContainer}>
                                <DiCss3 className={`${classes.techIcon} ${classes.techCSSIcon}`}/>
                            </div>
                        )}
                        {face === 4 && (
                            <div class = {classes.technologiesContainer}>
                                <DiPhotoshop className={`${classes.techIcon} ${classes.techPSIcon}`}/>
                            </div>
                        )}
                        {face === 5 && (
                            <div class = {classes.technologiesContainer}>
                                <DiGit className={`${classes.techIcon} ${classes.techGitIcon}`}/>
                            </div>
                        )}
                        {face === 6 && (
                            <div class = {classes.technologiesContainer}>
                                <DiPhp className={`${classes.techIcon} ${classes.techPhpIcon}`}/>
                            </div>
                        )}
                    <div class = {classes.descriptionContainer}>
                        {face === 1 && (
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ex facilis inventore
                             doloribus harum? Blanditiis, asperiores! Dolores temporibus suscipit, laborum, 
                             fugiat vero atque deserunt corrupti rem minus blanditiis distinctio optio!
                        </p> 
                        )}
                        {face === 2 && (
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Expedita reiciendis cupiditate tempora porro ad asperiores aspernatur,
                             vel excepturi illum veritatis error provident saepe voluptatibus repellat
                              natus neque iste ipsam ut?
                        </p> 
                        )}
                        {face === 3 && (
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias impedit 
                            laboriosam ipsa odio repellat facere, ducimus ab eos iste id quas mollitia dolore
                             in. Odit aut odio cumque possimus dolores?
                        </p> 
                        )}
                        {face === 4 && (
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam 
                            repellendus nam asperiores, eum id accusantium culpa mollitia autem
                             delectus nulla laudantium ab sit, adipisci amet porro in cupiditate quas iste.
                        </p> 
                        )}
                        {face === 5 && (
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam placeat
                             unde iure necessitatibus adipisci natus nulla repudiandae? Laudantium
                              quibusdam quod vitae vel. Necessitatibus dolore provident nam soluta? Aperiam, 
                              suscipit laboriosam?
                        </p> 
                        )}
                        {face === 6 && (
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti impedit nobis incidunt
                             quia corporis earum ipsum quaerat architecto reprehenderit accusantium possimus illum 
                             nostrum modi delectus quo, magnam optio quis distinctio.
                        </p> 
                        )}
                    </div>
                </div>
                </div>
        
                <div className={classes.traitsContainer}
                data-aos="fadeIn"
                data-aos-delay="500"
                data-aos-duration="1000">
                    <div className={classes.traitsBox1}>
                           <h3 className={classes.traitHeader}>Communication</h3>
                           <p className={classes.traitDescription}>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloribus 
                               accusamus. Suscipit corrupti tenetur consectetur. Id, ullam, sit dolore explicabo 
                               fugit totam asperiores quidem sapiente debitis quisquam, nemo deserunt vero. Id, ullam, sit dolore explicabo 
                               fugit totam asperiores quidem sapiente debitis quisquam, nemo deserunt vero.
                            </p>
                            <CommunincationLogo className={classes.traitLogo}/>

                    </div>                

                    <div className={classes.traitsBox2}>
                        <h3 className={classes.traitHeader}>Problem Solving</h3>
                           <p className={classes.traitDescription}>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloribus 
                               accusamus. Suscipit corrupti tenetur consectetur. Id, ullam, sit dolore explicabo 
                               fugit totam asperiores quidem sapiente debitis quisquam, nemo deserunt vero. Id, ullam, sit dolore explicabo 
                               fugit totam asperiores quidem sapiente debitis quisquam, nemo deserunt vero.
                            </p>
                            <ProblemSolveLogo className={classes.traitLogo}/>
                    </div>
                    <div className={classes.traitsBox3}>
                        <h3 className={classes.traitHeader}>Self-Managable</h3>
                           <p className={classes.traitDescription}>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloribus 
                               accusamus. Suscipit corrupti tenetur consectetur. Id, ullam, sit dolore explicabo 
                               fugit totam asperiores quidem sapiente debitis quisquam, nemo deserunt vero. Id, ullam, sit dolore explicabo 
                               fugit totam asperiores quidem sapiente debitis quisquam, nemo deserunt vero.
                            </p>
                            <SelfManageLogo className={classes.traitLogo}/>
                    </div>
                    <div className={classes.traitsBox4}>
                        <h3 className={classes.traitHeader}>Desire to learn</h3>
                           <p className={classes.traitDescription}>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, doloribus 
                               accusamus. Suscipit corrupti tenetur consectetur. Id, ullam, sit dolore explicabo 
                               fugit totam asperiores quidem sapiente debitis quisquam, nemo deserunt vero. Id, ullam, sit dolore explicabo 
                               fugit totam asperiores quidem sapiente debitis quisquam, nemo deserunt vero.
                            </p>
                            <LearnLogo className={classes.traitLogo}/>
                    </div>
                </div>
        </div>
    );
};

export default Skills;