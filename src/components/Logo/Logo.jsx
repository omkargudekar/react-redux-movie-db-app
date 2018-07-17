import React from 'react';
import LogoSVG from './popcorn.svg'
const Logo = (props) => {
    return (
            <img src={LogoSVG} alt="logo" {...props} />
    );
};

export default Logo;