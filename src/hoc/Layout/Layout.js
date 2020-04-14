import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';


import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Banner from '../../components/Banner/Banner';
import Bio from '../../components/Bio/Bio';
/* import Education from '../../components/Education/Education'; */
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
/* import Testimonials from '../../components/Testimonials/Testimonials'; */
import Contact from '../../components/Contact/Contact';

class Layout extends Component {


    render() {
        return (
            <Aux>
                    <Banner/>
                    <Toolbar/>
                    <Bio/>
                    {/* <Education/> */}
                    <Skills/>
                    <Projects/>
                    {/*  <Testimonials/> */ }
                    <Contact/>
            </Aux>
        );
    }
}

export default Layout;