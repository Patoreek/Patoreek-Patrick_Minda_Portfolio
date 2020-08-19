import React from 'react';

import classes from './NextBtn.module.scss';

import {
    IoIosArrowDropdown
} from 'react-icons/io';

import { Link } from 'react-scroll';


const NextBtn = (props) => {

    const style = {
        color: props.color
    }

    const marginStyle = {
        marginBottom: props.offset
    }

    
    return (
        <div className={classes.nextBtnContainer} style={marginStyle}>
        <div className={classes.nextBtnBg}>
            <Link to={props.linkTo}
                smooth={true}
                spy={true}
                duration={1500}
                offset={props.scrollOffset}
            >
            <IoIosArrowDropdown className={classes.nextBtn} style={style}/>
            </Link>
        </div>
    </div>
    );
};

export default NextBtn;