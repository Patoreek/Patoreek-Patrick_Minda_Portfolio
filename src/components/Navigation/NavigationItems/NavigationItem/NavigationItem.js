import React from 'react';
/* import { NavLink } from 'react-router-dom'; */
import { Link } from 'react-scroll';
import classes from './NavigationItem.module.scss';


const NavigationItem = (props) => {
    return (
        <li className={classes.navigationItem}>
            <Link to={props.link}
                  smooth={true}
                  spy={true}
                  duration={1500}
                  offset={-40}
                  onClick={props.closeDropdown}
            >{props.children}</Link>
        </li>
    );
};

export default NavigationItem;