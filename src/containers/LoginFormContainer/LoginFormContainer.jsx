import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';


class LoginFormContainer extends Component {
    


    loginButtonHandler=(loginPayload)=>{
        console.log(loginPayload)
    }
    
    render() {
        return (
            <LoginForm
                onLoginButtonHandler={this.loginButtonHandler}
             > 
            </LoginForm>
        );
    }
}


export default LoginFormContainer;