import React from 'react';
import Classes from './InputPassword.css'
const InputPassword = props => {
    return (
        <input className={Classes['inputPassword']} type="password" {...props}/>
    );
};
export default InputPassword;