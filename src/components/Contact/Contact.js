import React, { Component } from 'react';

import { Row,
         Col
        } from 'react-bootstrap';

import classes from './Contact.module.css';

import ContactForm from "./ContactForm/ContactForm";
import SocialLinks from "./SocialLinks/SocialLinks";
import PhoneSVG from './PhoneSVG/PhoneSVG';

class Contact extends Component {


    render() {

        const styleForLinks = {
            width: '60%',
            height:'100px',
            backgroundColor: 'white',
            borderRadius: '5px',
            boxShadow: '10px 10px 20px',
            padding: '25px',
            display: 'inline-block',
            textAlign: 'center',
            margin: '25px 0px 0px 120px'
        }


        return (
            <div className={classes.contact} id="contact">
                <h1 className={classes.contactHeader}> Get in touch with me</h1>
                <Row>
                    <Col lg>
                        <PhoneSVG/>
                        <p className={classes.findMeText}>You can find me on</p>
                        <SocialLinks styleLinks={styleForLinks}/>
                    </Col>
                    <Col lg>
                        <p className={classes.sendEnquiryText}>Send me an message down below</p>
                        <ContactForm/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Contact;