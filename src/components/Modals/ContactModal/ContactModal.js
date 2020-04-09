import React from 'react';

import classes from './ContactModal.module.css';

import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap';

import { FaFacebook,
    FaTwitter,
    FaGithub,
    FaLinkedin
    } from "react-icons/fa";

const CustomModal = (props) => {
    return (
            <Modal.Dialog className={classes.Modal}>
                <Modal.Header>
                    <Modal.Title>Contact Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Table responsive="sm">
                        <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>Patrick Minda</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>patrick.minda@hotmail.com</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>0481238745</td>
                        </tr>
                        <tr>
                            <td>Area:</td>
                            <td>Blacktown, Sydney, NSW, Australia</td>
                        </tr>
                        </tbody>
                </Table>
                <p>Available via</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
    );
};

export default CustomModal;