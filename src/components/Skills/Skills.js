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
                        <h1 className={classes.skillsHeader}
                            data-aos="zoom-in-right"
                            data-aos-delay="150"
                            data-aos-duration="1100"> Skills </h1>
                        <p className={classes.skillsSubheader}
                                data-aos="zoom-in-right"
                                data-aos-delay="200"
                                data-aos-duration="1100"> Press on a language for more information</p>
                        
                        <div data-aos="fade"
                             data-aos-delay="1100"
                             data-aos-duration="1000">
                            <SkillsContainer/>  
                        </div>   
                </Col>
                <Col lg>
                    <h1 className={classes.traitsHeader}
                    data-aos="zoom-in-left"
                    data-aos-delay="350"
                    data-aos-duration="1300"> Traits </h1>
                    <p className={classes.traitsSubheader}
                        data-aos="fade"
                        data-aos-delay="1100"
                        data-aos-duration="1000"> Press on a trait for more information</p>
                    <div data-aos="fade"
                        data-aos-delay="1300"
                        data-aos-duration="1000">
                            <TraitsContainer/>
                        </div>
                </Col>
                </Row>
            </div>
    );
};

export default Skills;