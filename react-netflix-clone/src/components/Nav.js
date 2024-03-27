// Nav.js
import React from 'react';
import './Nav.css';

export default function Nav() {
    return (
        <nav className="nav">
            <img
                alt="Netflix logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                className="nav__logo"
                onClick={() => window.location.reload()}
            />
            <img
                alt="User logged"
                src={`${process.env.PUBLIC_URL}/my-icon.png`}
                className="nav__avatar"
            />
        </nav>
    );
}