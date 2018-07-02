import React from 'react';

const ParentHOC = props => {
    return (
        <div {...props}>
                {props.children}
        </div>
    );
};



export default ParentHOC;