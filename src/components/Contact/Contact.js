import React, { Component } from 'react';

import { Row,
         Col
        } from 'react-bootstrap';

import classes from './Contact.module.css';

import ContactForm from "./ContactForm/ContactForm";
import SocialLinks from "./SocialLinks/SocialLinks";

class Contact extends Component {
    render() {


        return (
            <div className={classes.contact} id="contact">
                <h1> Get in touch with me</h1>
                <p>You can find me on:</p>
                <p className={classes.sendEnquiryText}>or send me an enquiry down below</p>
                <SocialLinks/>
                <ContactForm/>
            </div>
        );
    }
}

export default Contact;