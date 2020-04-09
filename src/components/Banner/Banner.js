import React, { Component } from 'react';

import ReactTypingEffect from 'react-typing-effect';
import { Button } from 'react-bootstrap';
import { FaFileAlt } from 'react-icons/fa';
import LandingPageVideo from './LandingPageVideo/LandingPageVideo';

import classes from './Banner.module.css';
class Banner extends Component {

        state = {
            startVideo: false
        }

        componentDidMount() {

            this.setState({startVideo: true});

        }

    render() {
        return (
            <div className={classes.Banner} id="banner">
                {this.state.startVideo ? <LandingPageVideo/> : null}
                <div className={classes.nameSloganContainer}>
                    
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
                    <Button variant="outline-info" className={classes.contactButton}>Contact</Button>{' '}
                    <Button variant="outline-info" className={classes.downloadButton}>Download <FaFileAlt/></Button>{' '}
                </div>
            </div>
        );
    }
}

export default Banner;