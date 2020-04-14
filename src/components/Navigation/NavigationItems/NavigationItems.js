import React from 'react';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './navigationItems.module.css';
import { FaHome } from 'react-icons/fa';
const NavigationItems = (props) => {
    return (
        <ul className = {props.dropdown ? classes.navigationItemsDropdown : classes.navigationItems}>
            <NavigationItem link='banner' closeDropdown={props.closeDropdown}><FaHome/></NavigationItem>
            <NavigationItem link='bio' closeDropdown={props.closeDropdown}>Bio</NavigationItem>
            { /* <NavigationItem link='education'>Education</NavigationItem> */ }
            <NavigationItem link='skills'>Skills</NavigationItem>
            <NavigationItem link='projects'>Projects</NavigationItem>
            { /* <NavigationItem link='testimonials'>Testimonials</NavigationItem> */ }
            <NavigationItem link='contact'>Contact</NavigationItem>
        </ul>
    );
};

export default NavigationItems;