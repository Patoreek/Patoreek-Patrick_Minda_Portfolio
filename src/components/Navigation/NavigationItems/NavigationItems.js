import React from 'react';

import classes from './NavigationItems.module.scss';

import { Link } from 'react-scroll';

const NavigationItems = (props) => {
    return (
        <div className={classes.navigationItems}>
                 <div className={classes.navigationItem}>
                    <Link to='banner'
                        smooth={true}
                        spy={true}
                        duration={1500}
                        offset={-40}
                        onClick={props.closeDropdown}
                    >Home</Link>
                </div>
                <div className={classes.navigationItem}>
                    <Link to='bio'
                        smooth={true}
                        spy={true}
                        duration={1500}
                        offset={-40}
                        onClick={props.closeDropdown}
                    >Bio</Link>
                </div>
                <div className={classes.navigationItem}>
                    <Link to='skills'
                        smooth={true}
                        spy={true}
                        duration={1500}
                        offset={-40}
                        onClick={props.closeDropdown}
                    >Skills</Link>
                </div>
                <div className={classes.navigationItem}>
                    <Link to='projects'
                        smooth={true}
                        spy={true}
                        duration={1500}
                        offset={-40}
                        onClick={props.closeDropdown}
                    >Projects</Link>
                </div>
                <div className={classes.navigationItem}>
                    <Link to='contact'
                        smooth={true}
                        spy={true}
                        duration={1500}
                        offset={-40}
                        onClick={props.closeDropdown}
                    >Contact</Link>
                </div>
        </div>
    );
};

export default NavigationItems;