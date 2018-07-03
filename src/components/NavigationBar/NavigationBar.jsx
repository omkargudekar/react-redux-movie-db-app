import React, { Component } from 'react';
import  './NavigationBar.css';
import {NavLink} from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <ul>
                <li><NavLink to={{pathname: "/login", hash:'#secured'}}>Login</NavLink></li>
                <li><NavLink to="/search">Search Movie </NavLink></li>
                <li><NavLink to="/logout">Logout</NavLink></li>
            </ul>
        );
    }
}

NavigationBar.propTypes = {

};

export default NavigationBar;