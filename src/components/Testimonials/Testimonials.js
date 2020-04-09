import React, { Component } from 'react';

import classes from './Testimonials.module.css';

class Testimonials extends Component {
    render() {
        return (
            <div className={classes.testimonials} id="testimonials">
                <h1> Testimonials </h1>
                <div className={classes.testimonialsContainer}></div>
            </div>
        );
    }
}

export default Testimonials;