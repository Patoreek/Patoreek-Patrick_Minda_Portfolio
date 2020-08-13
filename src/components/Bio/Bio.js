import React, { useState, useEffect } from 'react';
import classes from './Bio.module.scss';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Bio = () => {

    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            const bannerHeight = document.getElementById('banner').offsetHeight;

            const isTop = window.scrollY < bannerHeight; /* 832 */
            /* console.log(window.scrollY); */
            if (isTop !== true){
                //this.setState({scrolled: true});
                setScrolled(true);
                /* console.log(isTop); */
            } else {
                //this.setState({scrolled: false});
                setScrolled(false);
                /* console.log(isTop); */
            }
        })
    },[]);


    return (
        <div className={scrolled ? [classes.bio, classes.scrolled].join(' ') : classes.bio } id="bio">
            <div className={classes.bioHeaderContainer}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200">
                <h2 className={classes.bioHeader}>Bio Header</h2>
            </div>

            <div className={classes.firstParagraphContainer}
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000">
                <h3 className={classes.firstHeader}>Smaller title</h3>
                <p className={classes.paragraph}> 
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nihil placeat hic ex!
                    Ex suscipit repellat laborum possimus, provident nobis accusantium mollitia nemo. 
                    Similique adipisci, cupiditate porro aspernatur optio mollitia.
                </p>
            </div>

            <div className={classes.secondParagraphContainer}
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000">
                <h3 className={classes.secondHeader}>Smaller title</h3>
                <p className={classes.paragraph}> 
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur doloribus architecto deserunt
                neque. Esse, cumque? Quaerat adipisci aut magnam.
                </p>
            </div>

            <div className={classes.attributesContainer}
                data-aos="zoom-in"
                data-aos-delay="1000"
                data-aos-duration="1000">
                <h3 className={classes.attributesHeader}> Attributes </h3> 
                    <ul className={classes.attributesList}>
                        <li>Speak and understand a second language - Polish</li>
                        <li>Persistent</li>
                        <li>Commonsense approach to customers</li>
                        <li>Positive self esteem</li>
                        <li>Good sense of humour</li>
                        <li>Loyal and reliable</li>
                        <li>Honest and enthusiastic</li>
                        <li>Able to handle pressure</li>
                        <li>Good understanding of hardware </li>
                        <li>Able to solve problems effectively</li>
                    </ul>
            </div>
        </div>
    );
};

export default Bio;


    // componentWillUnmount() {
    //     window.removeEventListener('scroll');
    // }


