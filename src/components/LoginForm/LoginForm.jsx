import React, { Component } from 'react';
import Form from '../UI/Form/Form'
import FormControlsGroup from '../UI/FormControlsGroup/FormControlsGroup'
import FormControl from '../UI/FormControl/FormControl'
import Label from '../UI/Label/Label'
import InputText from '../UI/InputText/InputText'
import InputPassword from '../UI/InputPassword/InputPassword'
import Button from '../UI/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import StateUtil from '../../util/StateUtil'

class LoginForm extends Component {
    
    
    state = {
        username: '',
        password: ''
    }

    getLoginFormPayload=()=>{
        return {
            username:this.state.username,
            password:this.state.password
        }
    }

    resetButtonHandler=(e)=>{
        e.preventDefault();
        let resetState={
            username: '',
            password: ''
        }

        this.setState(StateUtil.getUpdatedState(this.state,resetState));
    }

    loginButtonHandler=(e)=>{
        e.preventDefault();
        this.props.onLoginButtonHandler(this.getLoginFormPayload());
    }


    componentDidMount(){
    }

    render() {
        return (
            <Form>
                <FormControlsGroup>
                    <FormControl>
                        <Label><FontAwesomeIcon icon={faUser} /> Username</Label>
                    </FormControl>
                    <FormControl>
                        <InputText value={this.state.username} onChange={(e) => {
                            this.setState(StateUtil.getUpdatedKeyValueState(this.state, "username", e.target.value))
                        }} />
                    </FormControl>
                </FormControlsGroup>
                <FormControlsGroup>
                    <FormControl>
                        <Label><FontAwesomeIcon icon={faKey} /> Password</Label>
                    </FormControl>
                    <FormControl>
                        <InputPassword value={this.state.password} onChange={(e) => {
                            this.setState(StateUtil.getUpdatedKeyValueState(this.state, "password", e.target.value))
                        }} />
                    </FormControl>
                </FormControlsGroup>
                <FormControlsGroup>
                    <FormControl>
                        <Button onClick={(e)=>{this.resetButtonHandler(e)}}>Reset</Button>
                    </FormControl>
                    <FormControl>
                        <Button onClick={(e) => { this.loginButtonHandler(e) }}><FontAwesomeIcon icon={faSignInAlt} /> Login</Button>
                    </FormControl>
                </FormControlsGroup>
            </Form>
        );
    }
}

export default LoginForm;