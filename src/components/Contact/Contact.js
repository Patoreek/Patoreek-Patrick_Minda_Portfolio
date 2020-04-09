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


        return (
            <div className={classes.contact} id="contact">
                <h1 className={classes.contactHeader}> Get in touch with me</h1>
                <Row>
                    <Col lg>
                        <PhoneSVG/>
                        <p className={classes.findMeText}>You can find me on</p>
                        <SocialLinks/>
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