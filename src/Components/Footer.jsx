/* eslint-disable react/no-unescaped-entities */
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
                <div className="pages">
                    <h4>Pages :</h4>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>

                <div className='social-link'>
                    <h4>Let's connect : </h4>
                    <ul>
                        <li>LinkedIn</li>
                        <li>Email</li>
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
