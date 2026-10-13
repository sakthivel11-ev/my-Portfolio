import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to your own backend (a Spring Boot endpoint, for example)
    // or a form service like Formspree / EmailJS.
    console.log(formData);
  };

  return (
    <section id="contact">
      <h1>contact me</h1>
      <p>please fill out the form below to discuss any work oppurtunities.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="your email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="your message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
