import React from 'react'
// import { Link } from "react-router-dom";
import "./footer.css"
import { Linkedin, Github } from 'react-bootstrap-icons';

function Footer() {
    return (
        <footer>
            <img className='logo' src='images/logo.png'></img>
            <h3><a href='https://www.linkedin.com/in/hditeban/' target="_blank" rel="noopener noreferrer" ><Linkedin /></a> <a href='https://github.com/hyeb96' target="_blank" rel="noopener noreferrer" ><Github /></a></h3>
            <h5>created by Hdit Eban &copy;2022</h5>
        </footer>
    );
}

export default Footer;