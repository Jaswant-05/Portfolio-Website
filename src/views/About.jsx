import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const About = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs.send('service_4dufo2i', 'template_0cqdfca', {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        }, 'mlC0fB4tLb4Ab0_WD')
        .then((response) => {
            console.log('Email sent successfully!', response.status, response.text);
            setFormData({ name: '', email: '', message: '' }); // Reset form
        })
        .catch((error) => {
            console.error('Failed to send email. Error:', error);
        });
    };

    return (
        <div className='main-container'>
            <div className="about-container">
                <h2>About Me</h2>
                <p>
                    Hello! I'm a passionate web developer with a love for creating functional web applications. 
                    I enjoy learning new technologies and improving my skills every day. 
                    In my free time, I like to explore new programming languages, work on personal projects, and travel.
                </p>
            </div>
            <div className="contact-container">
                <h1>Contact Me</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default About;
