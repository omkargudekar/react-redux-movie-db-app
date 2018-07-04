import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareRight,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Classes from './NavigationBar.css';

class NavigationBar extends Component {
    render() {
        return (
            <ul className={Classes['ul']}>
                <li className={[Classes['li'], Classes['title']].join(" ")}><NavLink to={{ pathname: "/" }}><FontAwesomeIcon icon={faCaretSquareRight} /> MovieDB</NavLink></li>
                <li className={[Classes['li'], Classes['right']].join(" ")}><NavLink to="/logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</NavLink></li>
            </ul>
        );
    }
}

NavigationBar.propTypes = {

};

export default NavigationBar;