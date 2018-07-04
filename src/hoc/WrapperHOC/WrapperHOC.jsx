import React from 'react';

const WrapperHOC = props => {
    return (
        <div {...props}>
                {props.children}
        </div>
    );
};



export default WrapperHOC;