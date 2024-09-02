import navbarTitleImage from '../assets/navbar-title.png'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <div className='nav-bar-parent'>
                <div className='nav-bar-title'>
                    <img src={navbarTitleImage} alt="Navbar Title" />
                </div>
                <div>
                    <ul className='nav-bar-list'>
                        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
                        <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
