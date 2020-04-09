import React, { Component } from 'react';


import classes from './Bio.module.css';
import bioPicture from '../../images/Me.png';

import { Row, Col } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

class Bio extends Component {

    state = {
        scrolled: false,

    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 875;
            /* console.log(window.scrollY); */
            if (isTop !== true){
                this.setState({scrolled: true});
                /* console.log(isTop); */
            } else {
                this.setState({scrolled: false});
                /* console.log(isTop); */
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    render() {
        return (
<div className={this.state.scrolled ? [classes.bio, classes.scrolled].join(' ') : classes.bio }
            id="bio">

<div className={classes.bioBgText}>Bio</div>

<Row>
    <Col lg>
        <div className={classes.aboutMeContainer}>
                            <h1 className={classes.aboutMeHeader}> About Me</h1>
                            <p  className={classes.aboutMeParagraph}>
                            My career goal is to become successful in the IT industry and be able to 
                            contribute in some way such as build a website or a server for a corporation
                            or maintain complicated systems for businesses.  I always try my best to 
                            reach higher, work harder and progress to more demanding tasks. I want to
                            pursue a career in Tech Support and fully commit to a role to reach my career
                            goal. My passion would push myself to learn and progress higher into the 
                            field.  I am willing to work hard and with a strong focus to achieve my 
                            career goals. I am currently undergoing study at TAFE for a Diploma in Web
                            Development and also work on improving my current knowledge through online 
                            courses.
                            </p>
        </div>
      
    </Col>
    <Col>
            <div className={classes.bioPictureContainer}>
                <img src={bioPicture} alt='Patrick Minda' className={classes.bioPicture}/>
        </div>
            <Carousel className = {classes.carousel} autoPlay={true} interval={"30000"}>
        <Carousel.Item className ={classes.carouselItem}>
        <div  className={classes.attributesContainer}>
                    <h3 className={classes.attributesHeader}>Personal Attriubutes</h3>
                    <ul className={classes.attributesList}>
                        <li>Speak and understand a second language - Polish</li>
                        <li>Persistent</li>
                        <li>Commonsense approach to customers</li>
                        <li>Positive self esteem</li>
                        <li>Good sense of humour</li>
                        <li>Loyal and reliable</li>
                        <li>Honest and enthusiastic</li>
                        <li>Able to handle pressure</li>
                        <li>Good understanding of hardware </li>
                        <li>Able to solve problems effectively</li>

                    </ul>
                </div>
        </Carousel.Item>
        <Carousel.Item className ={classes.carouselItem}>
        <div className={classes.hobbiesContainer}>
                <h3 className={classes.hobbiesHeader}>Interests and Hobbies</h3>
                <ul className={classes.hobbiesList}>
                    <li>Scuba Diver - PADI Advanced Scuba Diver</li>
                    <li>Football</li>
                    <li>Video Games</li>
                    <li>Photography</li>
                    <li>Video Editing</li>
                    <li>Playing Instruments - Guitar / Drums / Piano / Ukelele </li>
                    <li>Music - Electronic Music</li>
                    <li>Music Production</li>
                    <li>Entreprenuership</li>
                </ul>
            </div>
        </Carousel.Item>
      </Carousel>
    </Col>
  </Row>
  
        </div>
        );
    }
}

export default Bio;
