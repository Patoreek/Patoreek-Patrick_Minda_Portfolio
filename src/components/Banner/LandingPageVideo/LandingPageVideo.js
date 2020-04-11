import React from 'react';

import './LandingPageVideo.css';

import video from '../../../videos/LPageOpt.mp4';
import webmvideo from '../../../videos/LPageOpt.webm';


const LandingPageVideo = () => {

   return (
        <div>
            <div className="backgroundVideoOverlay"></div>
            <video id="backgroundVideo" poster="../../../images/harbourBridge.jpg" loop autoPlay>
                <source src={video} type="video/mp4" />
                <source src={webmvideo} type="video/webm" />
            </video>
        </div>
    );
};

export default LandingPageVideo;