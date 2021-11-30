import React from 'react';
import Header from '../Header/Header';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <Header></Header>
            <div className='container'>

                <div className='mx-auto' >
                    
                    <form action="https://formsubmit.co/rejaulhasanrasel28@gmail.com" method="POST">
                    <h2 className='text-center text-light mb-4'>Get In Touch</h2>
                        <input type="text" name="name" placeholder='your name' required />
                        <input type="email" name="email" placeholder='your email' required />
                        <textarea name="text" id="" cols="30" rows="5" placeholder='your message'></textarea>
                        <button className='w-50 bg-danger' type="submit">Send</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;