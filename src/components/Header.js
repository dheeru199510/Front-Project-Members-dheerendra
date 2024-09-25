import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <div>
                <h2>UI Frontend</h2>
                <b style={{float:"right"}}> Text</b>
                </div>
                <div> <input type="text" placeholder="Quick Search" className="search-bar" /></div>
            </div>
            <div className="header-right">
                <button className="header-icon">🔔</button> 
                <button className="header-icon">🔄</button> 
                <button className="header-icon">⚙️</button>
                <img
                    src="photo.jpeg"
                    alt="User Profile"
                    className="profile-pic"
                />
            </div>
        </header>
    );
};

export default Header;
