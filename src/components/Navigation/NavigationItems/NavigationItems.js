import React from 'react';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './navigationItems.module.css';
import { FaHome } from 'react-icons/fa';
const NavigationItems = () => {
    return (
        <ul className = {classes.navigationItems}>
            <NavigationItem link='banner'><FaHome/></NavigationItem>
            <NavigationItem link='bio'>Bio</NavigationItem>
            { /* <NavigationItem link='education'>Education</NavigationItem> */ }
            <NavigationItem link='skills'>Skills</NavigationItem>
            <NavigationItem link='projects'>Projects</NavigationItem>
            { /* <NavigationItem link='testimonials'>Testimonials</NavigationItem> */ }
            <NavigationItem link='contact'>Contact</NavigationItem>
        </ul>
    );
};

export default NavigationItems;