import React from 'react';
import Classes from './Form.css'

const Form = props => {
    return (
            <form {...props} className={Classes['form']}>
                {props.children}
            </form>


    );
};
export default Form;