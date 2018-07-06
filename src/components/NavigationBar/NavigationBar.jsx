import React, { Component } from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Classes from './NavigationBar.css';
import {connect} from 'react-redux';

class NavigationBar extends Component {


    routeSpecificItemsList = {
        search: [
            <li key="movieDetailsMenuKey" className={Classes['li']}><NavLink to="/movie/tt0468569" >Movie Details</NavLink></li>
        ],
        movie: [
            <li key="searchMenuKey" className={Classes['li']}><NavLink to="/search"><FontAwesomeIcon icon={faSignOutAlt} /> Go back to Search</NavLink></li>
        ],
        login: [
            <li key="resetPasswordMenuKey" className={Classes['li']}><NavLink to="/resetpassword" >Forgot Password?</NavLink></li>,
            <li key="registerMenuKey" className={Classes['li']}><NavLink to="/register" >Sign up</NavLink></li>
        ]
    }


    render() {
        let authenticatedItems = [
            <li className={Classes['li']} key="logutMenuKey"><NavLink to="/logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</NavLink></li>
        ];
        
        let unauthenticatedItems = [
        ];

        return (
                <ul className={Classes['ul']}>
                    {(this.props.isLoggedIn) ? authenticatedItems : unauthenticatedItems}
                </ul>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.loginReducerSlice.loggedIn
    }
}


export default connect(mapStateToProps)(withRouter(NavigationBar));