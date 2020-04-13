import React, { Component } from 'react';
    
import classes from './LanguageModal.module.css';

import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap';

import { FaFacebook,
    FaTwitter,
    FaGithub,
    FaLinkedin
    } from "react-icons/fa";

class LanguageModal extends Component {

    checkLanguage = (language) => {
        switch(language){
            case 'HTML':
                return (<p>This returned the html paragraph</p>);
            case 'CSS':
                return (<p>This returned the CSS paragraph</p>);
            case 'JavaScript':
                return (<p>This returned the JavaScript paragraph</p>);
            case 'jQuery':
                return (<p>This returned the jQuery paragraph</p>);
            case 'React':
                return (<p>This returned the React paragraph</p>);
            case 'PHP':
                return (<p>This returned the PHP paragraph</p>);
            case 'Bootstrap':
                return (<p>This returned the Bootstrap paragraph</p>);
            case 'SQL':
                return (<p>This returned the SQL paragraph</p>);
            case 'Wordpress':
                return (<p>This returned the Wordpress paragraph</p>);
            case 'GIT':
                return (<p>This returned the GIT paragraph</p>);
            case 'Photoshop':
                return (<p>This returned the Photoshop paragraph</p>);
        }
    }



    render() {
        return (
            <Modal.Dialog className={classes.Modal}>
            <Modal.Header>
                <Modal.Title className={classes.ModalTitle}>{/* Name of Programming Language which is */} {this.props.language}</Modal.Title>
            </Modal.Header>

            <Modal.Body className={classes.ModalBody}>

                <p>{this.checkLanguage(this.props.language)}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-primary"
                        onClick={this.props.closeModal}
                        className={classes.CloseBtn}>Close</Button>
            </Modal.Footer>
        </Modal.Dialog>
        );
    }
}

export default LanguageModal;