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
import Classes from './LoginForm.css'
import {Redirect} from 'react-router-dom'
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

        let loginForm=(
            <Form title="MovieDB Login">
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
                        <div style={{ width: "48%", display: "inline-block" }}>
                            <Button onClick={(e) => { this.resetButtonHandler(e) }} style={{ backgroundColor: "#3498DB", border: "#000 1px solid", color: "white", textDecoration: "none" }}>Reset</Button>
                        </div>
                        <div style={{ width: "4%", display: "inline-block" }}></div>
                        <div style={{ width: "48%", display: "inline-block" }}>
                            <Button onClick={(e) => { this.loginButtonHandler(e) }} style={{ backgroundColor: "#4CAF50", border: "#000 1px solid", color: "white", textDecoration: "none" }}><FontAwesomeIcon icon={faSignInAlt} /> Login</Button>
                        </div>
                    </FormControl>
                </FormControlsGroup>
            </Form>
        );
        if (this.props.loggedIn){
            loginForm = (<Redirect to="/search"></Redirect>)
        }
        return (
            <div className={Classes['loginForm']}>
                {loginForm}
            </div>
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