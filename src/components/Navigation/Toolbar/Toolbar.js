import React, { Component } from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './toolbar.module.css';
import DropdownBtn from '../DropdownBtn/DropdownBtn';
import Dropdown from '../DropdownBtn/Dropdown/Dropdown';

class Toolbar extends Component {

    state = {
        scrolled: false,
        mobile: false,
        dropdown: false
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const bannerHeight = document.getElementById('banner').offsetHeight;

            const isTop = window.scrollY < bannerHeight; /* 832px */

            console.log('[Toolbar] height of banner is ' + bannerHeight);
            /* console.log(window.scrollY); */
            if (isTop !== true){
                this.setState({scrolled: true});
                /* console.log(isTop); */
            } else {
                this.setState({scrolled: false});
                /* console.log(isTop); */
            }
        });
    }

    componentWillUnmount() {
       /*  window.removeEventListener('scroll'); */
    }

    toggleDropdown = () => {
        console.log('[Toolbar][openDropdown]');

        this.setState(prevState => ({
            dropdown: !prevState.dropdown
          }));

          console.log(this.state.dropdown);
    }


    render() {

        return (
            <nav className={this.state.scrolled ? [classes.toolbar, classes.scrolled].join(' ') : classes.toolbar } id="toolbar">
                <div className={classes.dropdownToggle}>
                    <DropdownBtn openDropdown={this.toggleDropdown}
                                 toggle={this.state.dropdown}/>
                </div>
                <div className={classes.navItems}>
                    <NavigationItems/>
                </div>
                    <Dropdown toggle = {this.state.dropdown}
                              closeDropdown = {this.toggleDropdown}/>

            </nav>
        );
    }
}

export default Toolbar;