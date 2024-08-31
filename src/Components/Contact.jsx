import './Contact.css'
function Contact() {
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
                        />
                        <input
                            type="email"
                            id='usermail'
                            placeholder='Email'
                        />
                        <textarea
                            name="message"
                            id='usermessage'
                            placeholder='Message'
                            rows={10}
                            cols={80}
                        ></textarea>

                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
