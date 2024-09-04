import { useState, useEffect, useRef } from 'react';
import navbarTitleImage from '../assets/navbar-title.png';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navBarRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navBarRef.current && !navBarRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="nav-bar-parent" ref={navBarRef}>
            <div className="nav-bar-title">
                <img src={navbarTitleImage} alt="Navbar Title" />
            </div>
            <button className="nav-bar-toggle" onClick={toggleMenu}>
                &#9776;
            </button>
            <div className={`nav-bar-list ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><NavLink to="/" activeClassName="active" exact onClick={closeMenu}>Home</NavLink></li>
                    <li><NavLink to="/resume" activeClassName="active" onClick={closeMenu}>Resume</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active" onClick={closeMenu}>Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
