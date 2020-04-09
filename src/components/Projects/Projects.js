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
            <h1 className={classes.projectsHeader}>Projects</h1>
            <p className={classes.projectsSubheader}>These are 3 of my projects I have worked on</p>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                                <CustomCard picture={jrePlaceholderPicture}
                                title="PICTUREGRAM placeholder (Make this linkable)"
                                description="UPLOAD PHOTOS TO INSTAGRAM!! UPLOAD PHOTOS TO INSTAGRAM!!
                                UPLOAD PHOTOS TO INSTAGRAM!! UPLOAD PHOTOS TO INSTAGRAM!!
                                UPLOAD PHOTOS TO INSTAGRAM!! UPLOAD PHOTOS TO INSTAGRAM!!"
                                />
                        </div>
                        
                        <div className="col-md-4">
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
                        <div className="col-md-4">
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
