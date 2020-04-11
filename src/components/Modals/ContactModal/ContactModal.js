import React from 'react';

import classes from './ContactModal.module.css';
import './ContactModal.css';

import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { Row, Col } from 'react-bootstrap';
import mapPlaceholder from '../../../images/mapPlaceholder.png';
import GoogleMap from '../../GoogleMap/GoogleMap';

const CustomModal = (props) => {

    const style = {
        width: '95%',
        height: '95%'
      }

    return (
            <Modal.Dialog className={classes.Modal}>
                <Modal.Header className={classes.Header}>
                    <Modal.Title className={classes.Title}>Contact Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Row>
                    <Col>
                    <Table responsive="sm" className={classes.Table}>
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
                            <td>(+61) 481238745</td>
                        </tr>
                        <tr>
                            <td>Area:</td>
                            <td>Blacktown, Sydney, NSW, Australia</td>
                        </tr>
                        </tbody>
                    </Table>
                    </Col>
                    <Col>
                        <div className={classes.MapContainer}>
                            <GoogleMap style={style}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p className={classes.availableTxt}>Available via</p>
                    </Col>
                </Row>
                </Modal.Body>

                <Modal.Footer>
                    <p className="btn btn-outline-success closeButton" onClick={props.closeModal}>Close</p>

                </Modal.Footer>
            </Modal.Dialog>
    );
};

export default CustomModal;