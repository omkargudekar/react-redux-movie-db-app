import React from 'react';
import Classes from './Form.css'

const Form = props => {
    return (
        <div>
            <div className={Classes['form-title']}>{props.title}</div>
            <form {...props} className={Classes['form']}>
                {props.children}
            </form>
        </div>


    );
};
export default Form;