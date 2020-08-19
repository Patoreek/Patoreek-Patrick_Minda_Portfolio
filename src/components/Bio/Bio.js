import React, { useState, useEffect } from 'react';
import classes from './Bio.module.scss';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import NextBtn from '../NextBtn/NextBtn';

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
                <h2 className={classes.bioHeader}>Who am I?</h2>
            </div>

            <div className={classes.firstParagraphContainer}
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000">
                <h3 className={classes.firstHeader}>Dedicated self-taught developer</h3>
                <p className={classes.paragraph}> 
                    I am passionate about science and technology. My curiousity to the the powerful technology allowed me to
                    independantly further my knowledge and understanding in the world of web development. I continiously search
                    for greater and complex tasks. I enjoy being hands on and understanding the functionality of all systems whether its,
                    software, hardware, business, the mind and life.


                </p>
            </div>

            <div className={classes.secondParagraphContainer}
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="1000">
                <h3 className={classes.secondHeader}>Enjoy the little things</h3>
                <p className={classes.paragraph}> 
                I enjoy hanging out, trying new things in terms of activities, food and places. I enjoy electronic music
                and am always attracted to learning and understanding new things to broaden my life experiences.

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

            <NextBtn linkTo="skills"/>
        </div>
    );
};

export default Bio;


    // componentWillUnmount() {
    //     window.removeEventListener('scroll');
    // }


