import React from 'react'
import Navbar from './Navbar';
import './Navbar.css';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [count, setCount] = useState(0);
    const [countCart, setCountCart] = useState(0);
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thank you for contacting us, ${formData.name}! We will get back to you shortly.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    <Navbar count={count}
    countCart={countCart}/>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message here..."
            rows="5"
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
    </>
  )
}

export default Contact