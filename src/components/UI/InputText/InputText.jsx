import React from 'react';
import Classes from './InputText.css'
const InputText = props => {
    return (
        <input className={Classes['inputText']} type="text" {...props}/>
    );
};
export default InputText;