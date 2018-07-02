import React from 'react';
import Classes from './FormControlsGroup.css'
const FormControlsGroup = (props) => {
    return (
        <div {...props} className={Classes['formControlsGroup']}>
            {props.children} 
        </div>
    );
};

export default FormControlsGroup;