/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-scroll';
import './Footer.css'

function Footer() {
    const scrollToTop = () => {
        const scrollStep = -window.scrollY / 50;
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 16);
    };


    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-content">
                    <div className="pages">
                        <h4>Pages :</h4>
                        <ul className='pages-li'>
                            <li>
                                <Link to="about-section" smooth={true} duration={500}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="resume-section" smooth={true} duration={500}>
                                    Resume
                                </Link>
                            </li>
                            <li>
                                <Link to="contact-section" smooth={true} duration={500}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='social-link'>
                    <h4>Let's connect : </h4>
                    <ul className='social-link-list'>
                        <li><a href="https://www.linkedin.com/in/sethupathi-vijayakumar-11848a214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'>LinkedIn</a></li>
                        <li><a href="mailto:sethupistha@gmail.com" target='blank'>Email</a></li>
                        <li> +91 8248402825</li>

                    </ul>
                </div>

                <div className="back-to-top">
                    <button onClick={scrollToTop}>⬆ Back to Top</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
