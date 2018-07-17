import React, { Component } from 'react';
import { Menu } from 'antd';
import Logo from '../Logo/Logo'

import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Classes from './NavigationBar.css';
import { connect } from 'react-redux';

class NavigationBar extends Component {
    render() {
        let authenticatedItems = [
            <Menu.Item className={Classes['li']} key="logutMenuKey" style={{ float: "right" }}><Link to="/logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link></Menu.Item>
        ];

        let unauthenticatedItems = [
            <Menu.Item className={Classes['li']} style={{ float: "right" }} key="logutMenuKey">Sign up</Menu.Item>

        ];

        return (
            <Menu
                theme="dark"
                mode="horizontal"
                selectable={false}
                style={{ lineHeight: '63px' }}
            >
                <Menu.Item key="logutMenuKey" style={{ float: "left", marginLeft: "-40px" }}><Link to="/"><Logo style={{ height: "40px" }} /></Link></Menu.Item>
                {(this.props.isLoggedIn) ? authenticatedItems : unauthenticatedItems}
            </Menu>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.loginReducerSlice.loggedIn
    }
}


export default connect(mapStateToProps)(withRouter(NavigationBar));




    // routeSpecificItemsList = {
    //     search: [
    //         <li key="movieDetailsMenuKey" className={Classes['li']}><NavLink to="/movie/tt0468569" >Movie Details</NavLink></li>
    //     ],
    //     movie: [
    //         <li key="searchMenuKey" className={Classes['li']}><NavLink to="/search"><FontAwesomeIcon icon={faSignOutAlt} /> Go back to Search</NavLink></li>
    //     ],
    //     login: [
    //         <li key="resetPasswordMenuKey" className={Classes['li']}><NavLink to="/resetpassword" >Forgot Password?</NavLink></li>,
    //         <li key="registerMenuKey" className={Classes['li']}><NavLink to="/register" >Sign up</NavLink></li>
    //     ]
    // }