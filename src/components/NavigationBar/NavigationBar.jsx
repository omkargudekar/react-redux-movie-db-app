import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Classes from './NavigationBar.css';

class NavigationBar extends Component {
    render() {
        return (
            <ul className={Classes['ul']}>
                <li className={Classes['li']}><NavLink to="/logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</NavLink></li>
            </ul>
        );
    }
}

NavigationBar.propTypes = {

};

export default NavigationBar;