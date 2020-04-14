import React, { Component } from 'react';

import { Row,
         Col
        } from 'react-bootstrap';

import classes from './Contact.module.css';

import ContactForm from "./ContactForm/ContactForm";
import SocialLinks from "./SocialLinks/SocialLinks";
import PhoneSVG from './PhoneSVG/PhoneSVG';
import GoogleMap from '../GoogleMap/GoogleMap';

class Contact extends Component {


    render() {

        const styleForLinks = {
            width: '90%',
            height:'8vh',
            backgroundColor: 'white',
            borderRadius: '5px',
            boxShadow: '10px 10px 20px',
            padding: '0vh 0vw 0vh 0vw',
            display: 'inline-block',
            textAlign: 'center',
            margin: '0px 0vw 0px 1.5vw'
        }

        const styleForMaps = {
            width: '90%',
            height: '85%',
            margin: '8vh 0px 0px 0px',
            borderRadius: '15px'
          }


        return (
            <div className={classes.contact} id="contact">
                <div className={classes.contactBgText}>Contact</div>
                <h1 className={classes.contactHeader}
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    data-aos-duration="1000"> Get in touch with me</h1>
                <Row>
                    <Col lg>
                        <div data-aos="zoom-out"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            className={classes.phoneSVG}>
                            <PhoneSVG/>
                        </div>
                        <p className={classes.findMeText}
                           data-aos="fade"
                           data-aos-delay="200"
                           data-aos-duration="1000"
                           data-aos-offset="0"
                           data-aos-anchor-placement="top-bottom">You can find me on</p>
                           
                           <div data-aos="fade-up-right"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-offset="0"
                            data-aos-anchor-placement="top-bottom">
                            <SocialLinks styleLinks={styleForLinks}/>
                            </div> 
        
                    </Col>
                    <Col lg>
                        <p className={classes.sendEnquiryText}
                            data-aos="fade"
                            data-aos-delay="200"
                            data-aos-duration="800">Send me a message down below</p>
                        <div data-aos="zoom-in"
                             data-aos-delay="200"
                             data-aos-duration="1000">
                            <ContactForm/>
                        </div>
                    </Col>
                    <Col lg>
                        
                                <GoogleMap style={styleForMaps}/>
                        
                        
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Contact;