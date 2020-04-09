import React from 'react';

import classes from './Skills.module.css';
import { Row, Col} from 'react-bootstrap';

import TraitsContainer from './TraitsContainer/TraitsContainer';
import SkillsContainer from './SkillsContainer/SkillsContainer';

const Skills = () => {
    return (
        <div className={classes.skills} id="skills">
            
                <div className={classes.skillsBgText}>Skills</div>
                <Row>
                <Col lg>
                        <h1 className={classes.skillsHeader}> Skills </h1>
                        <p className={classes.skillsSubheader}> Press on a language for more information</p>
                        <SkillsContainer/>     
                </Col>
                <Col lg>
                    <h1 className={classes.traitsHeader}> Traits </h1>
                    <p className={classes.traitsSubheader}> Press on a trait for more information</p>
                        <TraitsContainer/>
                </Col>
                </Row>
            </div>
    );
};

export default Skills;