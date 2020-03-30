import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Banner from '../../components/Banner/Banner';
import Bio from '../../components/Bio/Bio';
import Education from '../../components/Education/Education';


class Layout extends Component {

    state = {
        scrolled: false,

    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 650;
            /* console.log(window.scrollY); */
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
            <Aux>
                <Banner/>
                <Toolbar scrolled={this.state.scrolled}/>
                <Bio scrolled={this.state.scrolled}/>
                <Education/>
            </Aux>
        );
    }
}

export default Layout;