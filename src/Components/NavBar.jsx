import './NavBar.css'
import navbarTitleImage from '../assets/navbar-title.png'

function NavBar() {
    return (
        <div>
            <div className='nav-bar-parent'>
                <div className='nav-bar-title'>
                    <img src={navbarTitleImage} alt="" /></div>
                <div>
                    <ul className='nav-bar-list'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Resume</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
