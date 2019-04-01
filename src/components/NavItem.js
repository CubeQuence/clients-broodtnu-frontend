import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = props => {
    return (
        <li
            key={props.link.to}
            className={props.activeTab === props.link.to ? 'active' : ''}
        >
            <NavLink to={props.link.to}>{props.link.name}</NavLink>
        </li>
    );
};

export default NavItem;
