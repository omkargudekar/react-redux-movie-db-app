import React from 'react';
import PropTypes from 'prop-types';
import Classes from './Label.css'
const Label = props => {
    return (
        <span className={Classes['label']} {...props}>{props.children}</span>
    );
};

Label.propTypes = {
    text:PropTypes.string
};

export default Label;