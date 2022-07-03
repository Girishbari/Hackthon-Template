import React, { useState } from 'react'
import "./Navbar.css"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll'





export default function Navbar({ open }) {

    const [toggleMenu, setToggleMenu] = useState(false);




    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className=''>
                    <img src={logo} className="gtp3__logo" />
                </div>
                <ul className="gpt3__navbar-links_container">

                    <p><li href="#Themes">  <Link to="Themes" smooth={true} offset={100} duration={100} >Themes </Link> </li></p>
                    <p><li href="#Surprises">  <Link to="Surprises" smooth={true} offset={100} duration={100} >Surprises </Link> </li></p>
                    <p><li href="#Sponsorship_Us">  <Link to="Sponsorship_Us" smooth={true} offset={100} duration={100} >Sponsorship Us </Link> </li></p>
                    <p><li href="#Previous_Hackthon">  <Link to="Previous_Hackthon" smooth={true} offset={100} duration={100} >Previous Hackthon </Link> </li></p>
                    <p><li href="#Venue" onClick={() => open(true)}>Venue</li></p>
                </ul>
            </div>
            <div className='gpt3__navbar-sign'>
                <button type='button'>Get Started</button>
            </div>
            <div className='gpt3__navbar-menu '>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={40} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={40} onClick={() => setToggleMenu(true)} />}

                {toggleMenu && (

                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <p><li href="#Themes"> <Link to="Themes" smooth={true} offset={100} duration={500} >Themes</Link> </li></p>
                            <p><li href="#Surprises">  <Link to="Surprises" smooth={true} offset={100} duration={500} >Surprises </Link> </li></p>
                            <p><li href="#Sponsorship_Us">  <Link to="Sponsorship_Us" smooth={true} offset={100} duration={500} >Sponsorship Us </Link> </li></p>
                            <p><li href="#Previous_Hackthon">  <Link to="Previous_Hackthon" smooth={true} offset={100} duration={500} >Previous Hackthon </Link> </li></p>
                            <p><li href="#Venue" onClick={() => open(true)}>Venue</li></p>
                        </div>
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <button type="button">Get Started</button>
                        </div>
                    </div>

                )}
            </div>

        </div>

    )
}
