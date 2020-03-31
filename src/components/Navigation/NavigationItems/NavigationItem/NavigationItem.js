import React from 'react';
/* import { NavLink } from 'react-router-dom'; */
import { Link } from 'react-scroll';
import classes from './navigationItem.css';


const NavigationItem = (props) => {
    return (
        <li className={classes.navigationItem}>
            <Link to={props.link}
                  smooth={true}
                  spy={true}
                  duration={1500}
                  offset={-56}
            >{props.children}</Link>
        </li>
    );
};

export default NavigationItem;