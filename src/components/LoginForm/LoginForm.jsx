import React, { Component } from 'react';
import StateUtil from '../../util/StateUtil'
import LoginAction from '../../store/actions/LoginAction'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import { Col, Row } from 'antd'
import { Form,Input, Button, Checkbox } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import Classes from './LoginForm.css'
import FormValidator from '../../util/Validator/FormValidator'
const FormItem = Form.Item;


class LoginForm extends Component {    
    state = {
        email: '',
        password: '',
        validating :false,
        submitted:false,
        formValidation:{
            valid: false,
            requiredValidationFields: ["email", "password"],
            validationFields: {
                email: {
                    status: {
                        validateStatus: "",
                        help: "",
                        hasFeedback: true
                    },
                    rules: {
                        minLen: 6,
                        required: true
                    }
                },
                password: {
                    status: {
                        validateStatus: "",
                        help: "",
                        hasFeedback: true
                    },
                    rules: {
                        minLen: 6,
                        required: true
                    }
                }
            }
        }
    }



    getLoginFormPayload=()=>{
        return {
            email:this.state.email,
            password:this.state.password
        }
    }

    formSubmitHandler=async(e)=>{
        e.preventDefault();
        try{
            await this.setState({
                ...this.state,
                validating: true
            });
            await this.setState((state, _props) => {
                return FormValidator.getValidatedState(state);
            });
            if (this.state.formValidation.valid) {
                await this.setState({
                    ...this.state,
                    submitted: true
                })
                this.props.loginAction(this.getLoginFormPayload());
            }else{
                this.setState({
                    ...this.state,
                    submitted: false,
                    validating: false
                })
            }
        }
        catch(e){
            console.error(e);
            this.setState({
                ...this.state,
                submitted: false,
                validating:false
            })
        }
    }

    render() {

        let loginForm=(
            <Form onSubmit={this.formSubmitHandler} className={Classes['login-form']}>
                <FormItem {...this.state.formValidation.validationFields.email.status}>
                    <Input 
                        prefix={<FontAwesomeIcon icon={faEnvelope} style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        placeholder="email" value={this.state.email} 
                        onChange={(e) => {
                        this.setState(StateUtil.getUpdatedKeyValueState(this.state, "email", e.target.value))
                        }}
                    />
                </FormItem>
                <FormItem {...this.state.formValidation.validationFields.password.status}>
                    <Input prefix={<FontAwesomeIcon icon={faKey} style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" value={this.state.password} onChange={(e) => {
                        this.setState(StateUtil.getUpdatedKeyValueState(this.state, "password", e.target.value))
                    }}/>
                </FormItem>
                <FormItem>
                    <Checkbox>Remember me</Checkbox>
                    <a className={Classes['login-form-forgot']} href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className={Classes['login-form-button']} disabled={this.state.submitted || this.state.validating}>Log in</Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        );
        if (this.props.loggedIn){
            loginForm = (<Redirect to="/search"></Redirect>)
        }
        return (
            <Row type="flex" justify="space-around" align="middle">
                <Col span={24}>
                    {loginForm}
                </Col>
            </Row>
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