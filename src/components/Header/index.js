import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../../svg/logo.svg'

const Header = () =>{
    const descLogo = "Essa é a logo do blog.";
    return(
        <>
            <header className="flex-space-between">
                <div className="logo">
                        <img className="logo-svg" src={logo} alt={descLogo} />
                </div>
                <div className="search">
                    <input className="input_search" type="text" name="search" placeholder="Search here" />
                </div>
                <ul className="menu">
                    <li> <a href="#" className="nav-link">Categories</a> </li>
                    <li> <a href="#" className="nav-link">About</a> </li>
                    <li> <a href="#" className="nav-link">Contact</a> </li>
                </ul>
            </header>
        </>
    )
}

export default Header;