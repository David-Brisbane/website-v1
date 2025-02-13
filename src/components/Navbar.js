import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { LuAnchor } from "react-icons/lu";
import './Navbar.css';
import { Button } from './Button';



function Navbar() {
    const[click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)





  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                Test <LuAnchor />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />

            </div>
            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                        Profile
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>

    </nav>
    </>
  )
}

export default Navbar
