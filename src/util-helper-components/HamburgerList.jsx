import React from 'react'
import './helper.css';

const HamburgerList = ({ navbar }) => {
    return (
        <div className="hamburger-list">
            <ul>
                {navbar.map((navItem) => <li className="navItems-menu" key={navItem.id}>{navItem.name.toUpperCase()}</li>)}
            </ul>
        </div>
    )
}

export default HamburgerList