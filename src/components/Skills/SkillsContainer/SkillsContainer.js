

import React, { Component } from 'react';

import classes from './SkillsContainer.module.css';
import './SkillsContainer.css';
import GradientSVG from './GradientSVG/GradientSVG';

import { Row, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import { MdExpandMore,
         MdExpandLess } from 'react-icons/md';


import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaPhp,
    FaBootstrap,
    FaWordpress,
    FaGitSquare
} from 'react-icons/fa';

import { DiJqueryLogo,
         DiMysql,
         DiPhotoshop,
         DiJavascript} from "react-icons/di";


import ProgressBar from '../ProgressBar/ProgressBar';
import LanguageModal from '../../Modals/LanguageModal/LanguageModal';

class SkillsContainer extends Component {

    state = {
        downButton: true,
        upButton:false,
        openModal:false,
        chosenLang:''
    }
    scrollSkillsDown = () => {
        document.getElementById('skillsContainer').scrollBy({ 
            top: 650, // could be negative value
            left: 0, 
            behavior: 'smooth' 
          });
          this.setState({downButton: false,
                         upButton:true});

    }

    scrollSkillsUp = () => {
        document.getElementById('skillsContainer').scrollBy({ 
            top: -650, // could be negative value
            left: 0, 
            behavior: 'smooth' 
          });
          this.setState({downButton: true,
                         upButton:false});
        
    }

    openModal = (language) => {       
        this.setState({openModal:true,
                       chosenLang:language});
    }

    closeModal = () => {       
        this.setState({openModal:false,
                       chosenLang:''});
    }

    render() {
        return (
            <div>
            <GradientSVG/> {/* Gradients for Icons are stored here */}
            {this.state.openModal ? <LanguageModal closeModal={this.closeModal}
                                                   language={this.state.chosenLang}/> : null}
            <div className={classes.techSkillsContainer} id='skillsContainer'>
            <Row className={classes.rowComponent}>
                <Col xs className={classes.colNameComponent} id="htmlColumn" onClick={() => this.openModal('HTML')}>
                    <b className="htmlText">HTML</b>
                    <FaHtml5 className="htmlIcon"/>
                </Col>
                <Col lg className={classes.colBarComponent}>
                    <ProgressBar percent="80"/>
                </Col>
            </Row>
            <Row className={classes.rowComponent}>
                <Col xs className={classes.colNameComponent} id="cssColumn" onClick={() => this.openModal('CSS')}>
                    <b>CSS</b>
                    <FaCss3Alt className="cssIcon"/>
                </Col>
                <Col lg className={classes.colBarComponent}>
                    <ProgressBar percent="70"/>
                </Col>
            </Row>
            <Row className={classes.rowComponent}>
                <Col xs className={classes.colNameComponent} id="jsColumn" onClick={() => this.openModal('JavaScript')}>
                    <b>Javascript</b>
                    <DiJavascript className="jsIcon"/>
                </Col>
                <Col lg className={classes.colBarComponent}>
                    <ProgressBar percent="70"/>
                </Col>
            </Row>
            <Row className={classes.rowComponent}>
                <Col xs className={classes.colNameComponent} id="jqueryColumn" onClick={() => this.openModal('jQuery')}>
                    <b>jQuery</b>
                    <DiJqueryLogo className="jqueryIcon"/>
                </Col>
                <Col lg className={classes.colBarComponent}>
                    <ProgressBar percent="60"/>
                </Col>
            </Row>
            <Row className={classes.rowComponent}>
                <Col xs className={classes.colNameComponent} id="reactColumn" onClick={() => this.openModal('React')}>
                    <b>React</b>
                    <FaReact className="reactIcon"/>
                </Col>
                <Col lg className={classes.colBarComponent}>
                    <ProgressBar percent="75"/>
                </Col>
            </Row>
            <Row className={classes.rowComponent}>
                <Col xs className={classes.colNameComponent} id="phpColumn" onClick={() => this.openModal('PHP')}>
                    <b>PHP</b>
                    <FaPhp className="phpIcon"/>
                </Col>
                <Col lg className={classes.colBarComponent}>
                    <ProgressBar percent="65"/>
                </Col>
            </Row>
            <Row className={classes.rowComponent}>
                <Col xs className={classes.colNameComponent} id="bootstrapColumn" onClick={() => this.openModal('Bootstrap')}>
                    <b>Bootstrap</b>
                    <FaBootstrap className="bootstrapIcon"/>
                </Col>
                <Col lg className={classes.colBarComponent}>
                    <ProgressBar percent="75"/>
                </Col>
            </Row>
            <Row className={classes.rowComponent}>
                <Col xs className={classes.colNameComponent} id="sqlColumn" onClick={() => this.openModal('SQL')}>
                    <b>SQL</b>
                    <DiMysql className="sqlIcon"/>
                </Col>
                <Col lg className={classes.colBarComponent}>
                    <ProgressBar percent="75"/>
                </Col>
            </Row>
            <Row className={classes.rowComponent}>
                <Col xs className={classes.colNameComponent} id="wordpressColumn" onClick={() => this.openModal('Wordpress')}>
                    <b>*Wordpress</b>
                    <FaWordpress className="wordpressIcon"/>
                </Col>
                <Col lg className={classes.colBarComponent}>
                    <ProgressBar percent="30"/>
                </Col>
            </Row>
            <Row className={classes.rowComponent}>
                <Col xs className={classes.colNameComponent} id="gitColumn" onClick={() => this.openModal('GIT')}>
                    <b>GIT</b>
                    <FaGitSquare className="gitIcon"/>
                </Col>
                <Col lg className={classes.colBarComponent}>
                    <ProgressBar percent="80"/>
                </Col>
            </Row>
            <Row className={classes.rowComponent}>
                <Col xs className={classes.colNameComponent} id="photoshopColumn" onClick={() => this.openModal('Photoshop')}>
                    <b>Photoshop</b>
                    <DiPhotoshop className="photoshopIcon"/>
                </Col>
                <Col lg className={classes.colBarComponent}>
                    <ProgressBar percent="80"/>
                </Col>
            </Row>
                {/* *Digital Marketing / SEO */}
                {/* *Illustrator             */}
                {/* *AWS                     */}
                {/* *Node.js                 */}
        </div>
        <Button variant="outline-primary" 
                    className={classes.downButton}
                    onClick={this.scrollSkillsDown}
                    disabled={!this.state.downButton}>
                <MdExpandMore className={classes.downButtonIcon}/>
            </Button>
        <Button variant="outline-primary" 
                    className={classes.upButton}
                    onClick={this.scrollSkillsUp}
                    disabled={!this.state.upButton}>
                <MdExpandLess className={classes.upButtonIcon}/>
            </Button>
        </div>
        );
    }
}

export default SkillsContainer;