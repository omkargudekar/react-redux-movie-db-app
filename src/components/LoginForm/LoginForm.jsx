import React, { Component } from 'react';
import Form from '../UI/Form/Form'
import FormControlsGroup from '../UI/FormControlsGroup/FormControlsGroup'
import FormControl from '../UI/FormControl/FormControl'
import Label from '../UI/Label/Label'
import InputText from '../UI/InputText/InputText'
import InputPassword from '../UI/InputPassword/InputPassword'
import Button from '../UI/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faEnvelope, faKey,faFilm } from '@fortawesome/free-solid-svg-icons'
import StateUtil from '../../util/StateUtil'
import LoginAction from '../../store/actions/LoginAction'
import {connect} from 'react-redux';
import Classes from './LoginForm.css'
import {Redirect} from 'react-router-dom'


class LoginForm extends Component {    
    state = {
        email: '',
        password: '',

        validation:{
            email:{
                validationRules:{},
                valid:false,
                errorMessages:[]
            },
            password:{
                validationRules: {},
                valid: false,
                errorMessages: []
            }
        }
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
                <fieldset className={Classes['formFieldSet']}>
                    <legend className={Classes['formLegend']}><FontAwesomeIcon icon={faFilm} /> MDB</legend>
                    <FormControlsGroup>
                        <FormControl>
                            <Label>Sign in</Label>
                        </FormControl>
                        <FormControl style={{ paddingBottom: "25px" }}>
                            <Label>to continue to MDB</Label>
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
                        <FormControl>
                            <ul>
                                {this.state.validation.email.errorMessages.map((el,index)=>{
                                    return <li key={index}><span  className={Classes["validationFail"]}>{el}</span></li>

                                })}
                            </ul>
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
                        <FormControl>
                            <ul>
                                {this.state.validation.password.errorMessages.map((el, index) => {
                                    return <li key={index}><span className={Classes["validationFail"]}>{el}</span></li>

                                })}
                            </ul>
                        </FormControl>
                    </FormControlsGroup>
                    <FormControlsGroup>
                        <FormControl>
                            <div style={{ width: "48%", display: "inline-block" }}>
                                <Button onClick={(e) => { this.resetButtonHandler(e) }} style={{ backgroundColor: "#37457E", border: "#000 1px solid", color: "white", textDecoration: "none" }}>Reset</Button>
                            </div>
                            <div style={{ width: "4%", display: "inline-block" }}></div>
                            <div style={{ width: "48%", display: "inline-block" }}>
                                <Button onClick={(e) => { this.loginButtonHandler(e) }} style={{ backgroundColor: "#5B6C00", border: "#000 1px solid", color: "white", textDecoration: "none" }}><FontAwesomeIcon icon={faSignInAlt} /> Login</Button>
                            </div>
                        </FormControl>
                    </FormControlsGroup>
                    <FormControlsGroup>

                        <FormControl style={{ paddingTop: "25px",fontSize:"0.8rem" }}>
                            <Label>Not your computer? Use Guest mode to sign in privately.</Label>
                        </FormControl>
                    </FormControlsGroup>
                 </fieldset>
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