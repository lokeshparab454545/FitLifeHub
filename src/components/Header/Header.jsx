import React, { useState } from 'react'
import "../../components/Header/header.css"
import 'remixicon/fonts/remixicon.css'
import Button from '../utils/Button'

const navLinks = [
    {
        path: '#',
        display: 'Home'
    },
    {
        path: '#search',
        display: 'Search'
    },
    {
        path: '#services',
        display: 'Services'
    },
    {
        path: '#price',
        display: 'Price'
    },
]
const Header = () => {
    const [navToggle, setNavToggle] = useState(false);
    const toggle = () => {
        setNavToggle(!navToggle);
    }
    return (
        <div className='header'>
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
                        <div className="logo_img">
                            <img src={"/img/logo.png"} alt="logo" />
                        </div>
                    </div>
                    <div className={(navToggle) ? "navigation" : "navigation-active"}>
                        <ul className='menu' >
                            {
                                navLinks.map(item => (
                                    <li key={item.display} className='nav_item'><a href={item.path}>{item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="nav-right">
                        <Button name={"Register"} />
                        <span onClick={() => toggle()} className='mobile_menu'> <i class="ri-menu-line"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
