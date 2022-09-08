import React from 'react'
import './navbar.css';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'
import logo from '../../assets/logo.png'


// Block Element Modifier

const Navbar = () => {
    return (
        <div className='foody__navbar'>
            <div className='foody__navbar-links'>
                <div className='foody__navbar-links-logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='foody__navbar-links-container'>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#menu">Menu</a></p>
                    <p><a href="#cart">Cart</a></p>
                    <p><a href="#order">Order</a></p>
                </div>
            </div>
            <div className='foody__navbar-sign'>
                <p><a href="#signin">Sign In</a></p>
                <button type="button">Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar
