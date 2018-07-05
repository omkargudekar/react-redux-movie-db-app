import React from 'react';
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';

const Logout = props => {
    return (<Redirect to={"/"}></Redirect>);
};

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loginReducerSlice.loggedIn
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: (params) => dispatch((params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);