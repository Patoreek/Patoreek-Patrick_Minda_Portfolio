import React, { Component } from 'react';

import classes from './contactForm.module.css';

import { Row,
    Col,
    Form,
    Button 
   } from 'react-bootstrap';

class ContactForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        subject:'',
        message: '',
        sent: false,
        buttonText: 'Send Message'

    }

    onFirstNameChange = (event) => {
        event.preventDefault();
        this.setState({firstName: event.target.value});
        console.log("Updated to '" + this.state.firstName + "' [firstName][ContactForm]")
    }

    onLastNameChange = (event) => {
        event.preventDefault();
        this.setState({lastName: event.target.value});
        console.log("Updated to '" + this.state.lastName + "' [lastName][ContactForm]")
    }

    onEmailChange = (event) => {
        event.preventDefault();
        this.setState({email: event.target.value});
        console.log("Updated to '" + this.state.email + "' [email][ContactForm]")
    }

    onSubjectChange = (event) => {
        event.preventDefault();
        this.setState({subject: event.target.value});
        console.log("Updated to '" + this.state.subject + "' [subject][ContactForm]")
    }

    onMessageChange = (event) => {
        event.preventDefault();
        this.setState({message: event.target.value});
        console.log("Updated to '" + this.state.message + "' [message][ContactForm]")
    }

    resetForm = () => {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
            buttonText: 'Message Sent'
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            buttonText: 'Sending...'
        });
      
    }

    render() {
        return (
            <div className={classes.formContainer}>
            <Form onSubmit={this.handleSubmit} className={classes.formInputs}>
                <Form.Group as={Row}>
                        <Col>
                        <Form.Control   type="text"
                                        placeholder="First Name"
                                        className={classes.formInput}
                                        value={this.state.firstName}
                                        onChange={this.onFirstNameChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col>
                        <Form.Control   type="text"
                                        placeholder="Last Name"
                                        className={classes.formInput}
                                        value={this.state.lastName}
                                        onChange={this.onLastNameChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col>
                        <Form.Control   type="email" 
                                        placeholder="What's your email?"
                                        className= {classes.formInput}
                                        value={this.state.email}
                                        onChange={this.onEmailChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col>
                        <Form.Control   type="text"
                                        placeholder="Subject"
                                        className={classes.formInput}
                                        value={this.state.subject}
                                        onChange={this.onSubjectChange} />
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row}>
                        <Col>
                        <Form.Control   as="textarea" 
                                        placeholder="What would you like to ask?" 
                                        className={classes.textAreaInput}
                                        value={this.state.message}
                                        onChange={this.onMessageChange}/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col>
        <Button type="submit" className={classes.signInButton}>{this.state.buttonText}</Button>
                        </Col>
                    </Form.Group>
                </Form>
        </div>
        );
    }
}

export default ContactForm;