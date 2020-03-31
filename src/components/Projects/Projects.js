import React from 'react';

import classes from './Projects.css';

import CustomCard from './CustomCard/CustomCard';


import placeholderPicture from '../../images/jreplaceholder.jpg';

const Projects = () => {
    return (
        <div className={classes.projects} id="projects">
        <h1> Projects </h1>
        <div className={classes.projectsContainer}>
            <CustomCard picture={placeholderPicture}
                        title="Project Name 1 (Make this linkable)"
                        description="Description of project Test"/>

        </div>
    </div>
    );
};

export default Projects;
