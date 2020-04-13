import React, { Component } from 'react';

import classes from './Projects.module.css';

import CustomCard from './CustomCard/CustomCard';

import jrePlaceholderPicture from '../../images/jreplaceholder.jpg';
import twitterPlaceholderPicture from '../../images/twitterplaceholder.png';
import youtubePlaceholderPicture from '../../images/youtubeplaceholder.jpg';

class Projects extends Component {


    render() {
        return (
            <div className={classes.projects} id="projects">
                <div className={classes.projectsBgText}>Projects</div>
                <div className={classes.projectsContainer}>
                <h1 className={classes.projectsHeader}
                 data-aos="zoom-in"
                 data-aos-delay="200"
                 data-aos-duration="1000"
                 data-aos-mirror="true">Projects</h1>
                <p className={classes.projectsSubheader}
                 data-aos="zoom-in"
                 data-aos-delay="300"
                 data-aos-duration="1000">These are 3 of my projects I have worked on</p>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4"
                             data-aos="flip-up"
                             data-aos-delay="500"
                             data-aos-duration="1000">
                                <CustomCard picture={jrePlaceholderPicture}
                                title="PICTUREGRAM placeholder (Make this linkable)"
                                description="UPLOAD PHOTOS TO INSTAGRAM!! UPLOAD PHOTOS TO INSTAGRAM!!
                                UPLOAD PHOTOS TO INSTAGRAM!! UPLOAD PHOTOS TO INSTAGRAM!!
                                UPLOAD PHOTOS TO INSTAGRAM!! UPLOAD PHOTOS TO INSTAGRAM!!"
                                />
                        </div>
                        
                        <div className="col-md-4"
                            data-aos="flip-up"
                            data-aos-delay="650"
                            data-aos-duration="1000">
                                <CustomCard picture={youtubePlaceholderPicture}
                                title="PICTUREGRAM placeholder (Make this linkable)"
                                description="UPLOAD PHOTOS TO INSTAGRAM!! UPLOAD PHOTOS TO INSTAGRAM!!
                                UPLOAD PHOTOS TO INSTAGRAM!! UPLOAD PHOTOS TO INSTAGRAM!!
                                UPLOAD PHOTOS TO INSTAGRAM!! UPLOAD PHOTOS TO INSTAGRAM!!
                                UPLOAD PHOTOS TO INSTAGRAM!!
                                UPLOAD PHOTOS TO INSTAGRAM!! UPLOAD PHOTOS TO INSTAGRAM!!
                                UPLOAD PHOTOS TO INSTAGRAM!!
                                UPLOAD PHOTOS TO INSTAGRAM!! UPLOAD PHOTOS TO INSTAGRAM!!
                                UPLOAD PHOTOS TO INSTAGRAM!!
                                UPLOAD PHOTOS TO INSTAGRAM!! UPLOAD PHOTOS TO INSTAGRAM!!"/>
                        </div>
                        <div className="col-md-4"
                            data-aos="flip-up"
                            data-aos-delay="800"
                            data-aos-duration="1000">
                                <CustomCard picture={twitterPlaceholderPicture}
                                title="PICTUREGRAM placeholder (Make this linkable)"
                                description="UPLOAD PHOTOS TO INSTAGRAM!! UPLOAD PHOTOS TO INSTAGRAM!!
                                UPLOAD PHOTOS TO INSTAGRAM!! UPLOAD PHOTOS TO INSTAGRAM!!
                                UPLOAD PHOTOS TO INSTAGRAM!! UPLOAD PHOTOS TO INSTAGRAM!!"/>
                        </div> 
                    </div>
                    
                </div>
            </div>
            </div>
        );
    }
}

export default Projects;
