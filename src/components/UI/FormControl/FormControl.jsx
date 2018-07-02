import React from 'react';
import Classes from './FormControl.css'
const FormControl = (props) => {
    return (
        <div {...props} className={Classes['formControl']}>
            {props.children} 
        </div>
    );
};

export default FormControl;