import React, { Component } from 'react';
import classes from './Education.css';

class Education extends Component {
    render() {
        return (
            <div className={classes.education} id="education">
                <h1> Education </h1>
                <div>
                    <h2>Patrician Brothers College Blacktown</h2>
                    <h4>Graduated 2014</h4>
                    <p><i>3rd Place in Software Design & Development</i></p>
                    <h2>Diploma of Website Development - TAFE</h2>
                    <h4>Undergoing Studies</h4>
                    <h2>Online Courses</h2>
                    <h4>Udemy and free online tutorials</h4>

                </div>
            </div>
        );
    }
}

export default Education;