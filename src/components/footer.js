import React from 'react'
// import { Link } from "react-router-dom";
import "./footer.css"
import { Linkedin, Github } from 'react-bootstrap-icons';

function Footer() {
    return (
        <footer>
            <span id='footer-logo'>
                <img id='footer-image' src='images/logo4.png' alt='footer logo'></img>
            </span>
            <span id='contact'>
                <p>(980)-319-7468</p>
                <p>contact@ebanandco.com</p>
                <p>PO BOX 1996 <br /> Charlotte NC 28208</p>
            </span>
            <h3><a href='https://www.linkedin.com/in/hditeban/' target="_blank" rel="noopener noreferrer" ><Linkedin />Linkedin</a> <a href='https://github.com/hyeb96' target="_blank" rel="noopener noreferrer" ><Github />Github</a></h3>
            <h5>Created by Hdit Eban &copy;2022</h5>
        </footer>
    );
}

export default Footer;