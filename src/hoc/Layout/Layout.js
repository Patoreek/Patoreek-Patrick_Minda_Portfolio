import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Banner from '../../components/Banner/Banner';
import Bio from '../../components/Bio/Bio';
/* import Education from '../../components/Education/Education'; */
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Testimonials from '../../components/Testimonials/Testimonials';
import Contact from '../../components/Contact/Contact';


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
                {/* <Education/> */}
                <Skills/>
                <Projects/>
                <Testimonials/>
                <Contact/>
            </Aux>
        );
    }
}

export default Layout;