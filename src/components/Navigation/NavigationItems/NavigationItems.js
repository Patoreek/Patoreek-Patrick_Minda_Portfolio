import React from 'react';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './navigationItems.css';

const NavigationItems = () => {
    return (
        <ul className = {classes.navigationItems}>
            <NavigationItem link='bio'>Bio</NavigationItem>
            { /* <NavigationItem link='education'>Education</NavigationItem> */ }
            <NavigationItem link='skills'>Skills</NavigationItem>
            <NavigationItem link='projects'>Projects</NavigationItem>
            <NavigationItem link='testimonials'>Testimonials</NavigationItem>
            <NavigationItem link='contact'>Contact</NavigationItem>
        </ul>
    );
};

export default NavigationItems;