import { SERVER_URL } from '../services/SERVER_URL'; 
import React, { useState } from 'react';
import axios from 'axios';

export const Contact = () => {
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
        <div className="Contact">
            <h1>Social Media</h1>
            <div className="Social Media">
                <div>
                    <h1>GitHub</h1>
                    <img className="profileImg" src="https://res.cloudinary.com/dhqplbne3/image/upload/v1692670204/PORTFOLIO/24_ia4fcp.png" alt="Git" />
                </div>

                <div>
                    <h1>Linkedln</h1>
                    <img className="profileImg" src="https://res.cloudinary.com/dhqplbne3/image/upload/v1692670204/PORTFOLIO/25_cnni2e.png" alt="Linkedln" />
                </div>

                <div>
                    <h1>Instagram</h1>
                    <img className="profileImg" src="https://res.cloudinary.com/dhqplbne3/image/upload/v1692670205/PORTFOLIO/23_m7kiz0.png" alt="Insta" />
                </div>


                <div className="Email">
                    <h1>Send Me an Email</h1>
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
                            placeholder="Email"
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
        </div>
    );
};