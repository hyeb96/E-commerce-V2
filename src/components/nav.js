import React from 'react'
import './nav.css';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav>
                <div id='logo'>
                    <img id='logo-image' src='images/logo3.png' alt='logo'></img>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;