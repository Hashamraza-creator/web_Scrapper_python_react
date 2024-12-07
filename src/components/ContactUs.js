// ContactUs.js
import React, { useState } from 'react';
import './ContactUS.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '' }); 
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-description">
          We would love to hear from you! Please fill out the form below, and we'll
          get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="form-input"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="form-textarea"
            required
          />
          <button type="submit" className="form-submit-btn">Submit</button>
        </form>
      </div>
      <div className="contact-image">
        <img
          src="https://static.vecteezy.com/system/resources/previews/008/558/709/non_2x/contact-us-text-button-web-button-template-contact-us-vector.jpg"
          alt="Contact Us"
          className="contact-img"
        />
      </div>
    </div>
  );
};

export default ContactUs;
