/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react'
import './About.css'
import aboutImage from '../assets/aboutimage.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import reacts from '../assets/react.png'
import spring from '../assets/spring.png'
import mysql from '../assets/mysql.png'

function About() {

    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const fullText = 'Sethupathi';
    const typingSpeed = 100; // Typing speed in ms
    const pauseTime = 1000;  // Pause time after typing in ms

    useEffect(() => {
        let index = 0;
        let isMounted = true;

        const typeText = () => {
            if (index <= fullText.length) {
                setText(fullText.slice(0, index));
                index++;
            } else {
                setIsTyping(false);
                setTimeout(() => {
                    if (isMounted) {
                        index = 0; // Reset index to start typing again
                        setIsTyping(true);
                    }
                }, pauseTime);
            }
        };

        const interval = setInterval(() => {
            if (isTyping) {
                typeText();
            }
        }, typingSpeed);

        return () => {
            clearInterval(interval);
            isMounted = false; // Clean up the effect if the component is unmounted
        };
    }, [isTyping]);


    const handleContactClick = () => {
        const userConfirmed = window.confirm('Do you want to send an email to vjsethu2002@gmail.com?');

        if (userConfirmed) {
            window.location.href = 'mailto:vjsethu2002@gmail.com?subject=Contact&body=Hi%20Sethupathi';
        }
    }


    return (
        <div className='about-division'>
            <div className='about-parent'>
                <div className='about-content'>
                    <h2 className='about-heading'>Hi , <br />
                        I'm <span className='about-name'>{text}</span></h2><br />
                    <div className='shuffle'>
                        <h1 className='about-content-domain'>Full Stack Developer</h1>
                    </div>
                    <button
                        className='about-button'
                        onClick={handleContactClick}
                    >Contact Me</button>
                </div>
                <div className='about-image'><img src={aboutImage} alt="" /></div>
            </div>
            <div className='about-skills'>
                <h2 className='about-skills-heading'>SKILLS :</h2>
                <div className="about-skills-grid">

                    <img src={html} alt="HTML LOGO" className='skill-logo' />
                    <img src={css} alt="CSS LOGO" className='skill-logo' />
                    <img src={js} alt="JS LOGO" className='skill-logo' />
                    <img src={reacts} alt="REACT LOGO" className='skill-logo' />
                    <img src={spring} alt="SPRING LOGO" className='skill-logo' />
                    <img src={mysql} alt="MYSQL LOGO" className='skill-logo' />
                </div>
            </div>
        </div>
    )
}

export default About
