import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="menu-list">
                <li><NavLink to="/">Menu One</NavLink></li>
                <li><NavLink to="/">Menu Two</NavLink></li>
                <li><NavLink to="/">Menu Three</NavLink></li>
                <li><NavLink to="/">Menu Four</NavLink></li>
                <li><NavLink to="/">Menu Five</NavLink></li>
                <li className="addClass"><NavLink to="/">Menu Six</NavLink></li>
                <li><NavLink to="/">Menu Seven</NavLink></li>
                <li><NavLink to="/">Menu Eight</NavLink></li>
                <li><NavLink to="/">Menu Nine</NavLink></li>
                <li><NavLink to="/">Menu Ten</NavLink></li>
            </ul>
        </div>
    );
};

export default Sidebar;
