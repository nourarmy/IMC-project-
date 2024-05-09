import React, { useState } from 'react';
import './css/ContactPage.css';
import ContactInfo from '../ContactInfo';

const ContactPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <div className="contact-page">
      <div className="dialogue-box">
        <h1 className="titre">Join Us</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          >
            <option value="">Select Department</option>
            <option value="project">Project Team</option>
            <option value="business">Business Development Team</option>
            <option value="production">Production Team</option>
            <option value="logistics">Logistics Team</option>
            <option value="design">Design Team</option>
          </select>
          <textarea
            placeholder="Why this department?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="join-us-btn">Join Us</button>
        </form>
      </div>
      <ContactInfo />
    </div>
  );
};

export default ContactPage;
