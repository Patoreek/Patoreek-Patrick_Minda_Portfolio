import React from 'react';

const GradientSVG = () => {
    return (
        <div>
            {/* HTML ICON GRADIENT*/}
            <svg width="0" height="0">
            <linearGradient id="gradientHTML" x1="0%" y1="0%" x2="100%" y2="0%">{/*Change Gradient based on language */} 
                <stop stop-color="#E44D26" offset="0" />   {/*Color one */}    
                <stop stop-color="#F16529" offset="1" />    {/*Color two */} 
            </linearGradient>
            </svg>

            {/* CSS ICON GRADIENT*/}
            <svg width="0" height="0">
            <linearGradient id="gradientCSS" x1="0%" y1="0%" x2="100%" y2="0%">{/*Change Gradient based on language */} 
                <stop stop-color="#264de4" offset="0" />   {/*Color one */}    
                <stop stop-color="#2965f1" offset="1" />    {/*Color two */} 
            </linearGradient>
            </svg>

            {/* Javascript ICON GRADIENT*/}
            <svg width="0" height="0">
            <linearGradient id="gradientJS" x1="0%" y1="0%" x2="100%" y2="0%">{/*Change Gradient based on language */} 
                <stop stop-color="#F0DB4F" offset="0" />   {/*Color one */}    
                <stop stop-color="#f0cf4f" offset="1" />    {/*Color two */} 
            </linearGradient>
            </svg>        

            {/* PHP ICON GRADIENT*/}
            <svg width="0" height="0">
            <linearGradient id="gradientPHP" x1="0%" y1="0%" x2="100%" y2="0%">{/*Change Gradient based on language */} 
                <stop stop-color="#474A8A" offset="0" />   {/*Color one */}    
                <stop stop-color="#787CB5" offset="1" />    {/*Color two */} 
            </linearGradient>
            </svg>         

        </div>

    );
};

export default GradientSVG;