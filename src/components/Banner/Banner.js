import React, { Component } from 'react';

import classes from './Banner.module.css';

class Banner extends Component {
    render() {
        return (
            <div className={classes.Banner} id="banner">

                <h1>Hello, my name is <b>Patrick Minda.</b></h1>
                <p>Aspiring / Ambitious / Passionate / Determined Web Developer.</p>
                <p>Contact Us</p>
                <p>Download Resume</p>
                <button>Contact</button>
                <button>Download</button>
            </div>
        );
    }
}

export default Banner;