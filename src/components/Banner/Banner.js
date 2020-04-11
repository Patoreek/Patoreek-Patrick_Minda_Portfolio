import React, { Component } from 'react';

import ReactTypingEffect from 'react-typing-effect';
import { Button } from 'react-bootstrap';
import { FaFileAlt } from 'react-icons/fa';
import LandingPageVideo from './LandingPageVideo/LandingPageVideo';
import ContactModal from '../Modals/ContactModal/ContactModal';


import classes from './Banner.module.css';
import './Banner.css';
class Banner extends Component {

        state = {
            startVideo: false,
            modalOpen: false
        }

        componentDidMount() {

            this.setState({startVideo: true});

        }

        openContactModal = () => {
            this.setState({modalOpen: true});
        } 

        closeContactModal = () => {
            this.setState({modalOpen: false});
        }

    render() {
        return (
            <div className={classes.Banner} id="banner">
                {this.state.startVideo ? <LandingPageVideo/> : null}
                <div className={classes.nameSloganContainer}>

                    {this.state.modalOpen ? <ContactModal closeModal={this.closeContactModal}/> : null }

                    <ReactTypingEffect
                            text="Hello, my name is Patrick Minda." //text=["Hello.", "World!"]
                            speed="75"
                            typingDelay="500"
                            eraseDelay="1000000"
                            className={classes.nameText}
                        />
                    <p className={classes.sloganTextStart}>
                        I am a
                        <ReactTypingEffect
                            text={["n aspiring ","n ambitious "," passionate "," determined "]} //text=["Hello.", "World!"]
                            speed="75"
                            typingDelay="500"
                            eraseDelay="2500"
                            cursor=" "
                        />
                    </p>
                    <p className={classes.sloganTextEnd}>web developer.</p>
                    <p className={classes.sloganArea}>Based in Sydney, Australia</p>
                </div>
                
                <div className={classes.buttonsContainer}>
                    <p className="btn btn-outline-success contactButton" onClick={this.openContactModal}>Contact</p>
                    <p className="btn btn-outline-success downloadButton">Download<FaFileAlt/></p>
                </div>
            </div>
        );
    }
}

export default Banner;