import React, { useState } from 'react';
import axios from "axios";
import './CTA.css';

const CTA = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/subscribe", { email });
            setMessage(response.data.message);
            setEmail(""); 
        } catch (error) {
            setMessage(error.response?.data?.message || "Error sending email. Please try again.");
        }
    };

    return (
        <div className="subscribe-container">
            <div className='subscribe-display'>
                <h2 className="subscribe-header">Subscribe To Our Newsletter</h2>
                <p className="subscribe-description">Stay updated with our latest news and announcements.</p>
            </div>
            <div className="parent-container">
                <form className="subscribe-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        className="subscribe-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="subscribe-button">SUBSCRIBE NOW</button>
                </form>
                {message && <p className="subscribe-message">{message}</p>}
            </div>
        </div>
    );
};

export default CTA;
