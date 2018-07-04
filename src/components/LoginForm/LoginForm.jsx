import React, { Component } from 'react';
import Form from '../UI/Form/Form'
import FormControlsGroup from '../UI/FormControlsGroup/FormControlsGroup'
import FormControl from '../UI/FormControl/FormControl'
import Label from '../UI/Label/Label'
import InputText from '../UI/InputText/InputText'
import InputPassword from '../UI/InputPassword/InputPassword'
import Button from '../UI/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import StateUtil from '../../util/StateUtil'
import LoginAction from '../../store/actions/LoginAction'
import {connect} from 'react-redux';

class LoginForm extends Component {
    
    
    state = {
        email: '',
        password: ''
    }

    getLoginFormPayload=()=>{
        return {
            email:this.state.email,
            password:this.state.password
        }
    }

    resetButtonHandler=(e)=>{
        e.preventDefault();
        let resetState={
            email: '',
            password: ''
        }

        this.setState(StateUtil.getUpdatedState(this.state,resetState));
    }

    loginButtonHandler=(e)=>{
        e.preventDefault();
        this.props.loginAction(this.getLoginFormPayload());
    }


    componentDidMount(){
    }

    render() {
        return (

            <Form>
                <FormControlsGroup>
                    <FormControl>
                        <Label> Login Status : {''+this.props.loggedIn}</Label>
                    </FormControl>
                </FormControlsGroup>
                <FormControlsGroup>
                    <FormControl>
                        <Label><FontAwesomeIcon icon={faEnvelope} /> Email</Label>
                    </FormControl>
                    <FormControl>
                        <InputText value={this.state.email} onChange={(e) => {
                            this.setState(StateUtil.getUpdatedKeyValueState(this.state, "email", e.target.value))
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

const mapStateToProps = (state)=>{
    return{
        loggedIn: state.loginReducerSlice.loggedIn
    }
}


const mapDispatchToProps  = (dispatch)=>{
    return {
        loginAction:(params)=>dispatch(LoginAction(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(LoginForm);