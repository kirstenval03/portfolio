import { SERVER_URL } from '../services/SERVER_URL'; 
import React, { useState } from 'react';
import axios from 'axios';
import email from "../assets/images/emailME.png"

export const Email = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${SERVER_URL}/api/send-email`, formData); // Use SERVER_URL here
            alert('Email sent successfully!');
        } catch (error) {
            console.error(error);
            alert('Error sending email. Please try again later.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    return (
        <div className='emailMe'> 
        <img src={email} className='emailImg' alt='emailImg'/>

        <div className="EmailForm">
            <h1>Please provide your information!</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email Adress"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            <button type="submit">Send Email</button>
        </form>
    </div>
    </div>

    )
 }
