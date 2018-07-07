import React from 'react';
import Classes from './InputPassword.css'
class InputPassword extends React.Component {
    render(){
        return (
            <input className={Classes['inputPassword']} type="password" {...this.props} />
        )
    };
};
export default InputPassword;