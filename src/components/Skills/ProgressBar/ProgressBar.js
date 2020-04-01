
import classes from './progressBar.module.css';

/* import styled from 'styled-components'; */


import React from 'react';



const ProgressBar = (props) => {

    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${props.percent}%`
        }

        setStyle(newStyle);

    },1000);

    return (
        <div className={classes.progress}>
            <div className={classes.progressDone} style={style}>
                {props.percent}%
            </div>
        </div>
    );
};

export default ProgressBar;