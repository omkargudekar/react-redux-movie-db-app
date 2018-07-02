import React from 'react';
import Classes from './Button.css'
const Button = props => {
    return (
        <button className={Classes['button']} {...props}>{props.children}</button>
    );
};
export default Button;