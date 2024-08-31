import { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({ username: '', usermail: '', usermessage: '' });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    return (
        <div>
            <h2 className='contact-heading'>CONTACT :</h2>
            <p className='contact-para'>Get in touch or shoot me an email directly on <b>vjsethu2002@gmail.com</b></p>
            <div className='contact-component'>
                <form action="">
                    <div className="contact-form">
                        <input
                            type="text"
                            id='username'
                            placeholder="Name"
                            minLength="5"
                            maxLength="50"
                            required
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            id='usermail'
                            placeholder='Email'
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            value={formData.usermail}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="message"
                            id='usermessage'
                            placeholder='Message'
                            rows={10}
                            cols={80}
                            value={formData.usermessage}
                            onChange={handleInputChange}
                        ></textarea>

                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
