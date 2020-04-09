import React, { Component } from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './toolbar.module.css';
class Toolbar extends Component {

    state = {
        scrolled: false,

    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 875;
            /* console.log(window.scrollY); */
            if (isTop !== true){
                this.setState({scrolled: true});
                /* console.log(isTop); */
            } else {
                this.setState({scrolled: false});
                /* console.log(isTop); */
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    render() {
        return (
            <nav className={this.state.scrolled ? [classes.toolbar, classes.scrolled].join(' ') : classes.toolbar }>
            <NavigationItems/>
    </nav>
        );
    }
}

export default Toolbar;