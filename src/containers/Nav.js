import React from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from '../components/NavItem';

const NavContainer = props => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <NavLink to="/" className="brand-logo">
                        Broodt
                    </NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {props.links.map(link => {
                            return (
                                <NavItem
                                    key={link.to}
                                    link={link}
                                    activeTab={props.activeTab}
                                />
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavContainer;
