

/*
import React, { Component } from 'react';
class Toolbar extends Component {

    state = {
        scrolled: false,

    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 650;
            /* console.log(window.scrollY); 
            if (isTop !== true){
                this.setState({scrolled: true});
                console.log(isTop);
            } else {
                this.setState({scrolled: false});
                console.log(isTop);
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
 */


import React from 'react';


import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './toolbar.css';

const Toolbar = (props) => {
    return (
        <nav className={props.scrolled ? [classes.toolbar, classes.scrolled].join(' ') : classes.toolbar }>
                <NavigationItems/>
        </nav>
    );
};

export default Toolbar;
