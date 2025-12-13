import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:balaji32001@gmail.com
      ?subject=Portfolio Contact from ${formData.name}
      &body=Name: ${formData.name}%0A
      Email: ${formData.email}%0A%0A
      Message:%0A${formData.message}`;

    window.location.href = mailtoLink;

    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'balaji32001@gmail.com',
      link: 'mailto:balaji32001@gmail.com'
    },
    {
      title: 'Phone',
      value: '+91 63837 83573',
      link: 'tel:+916383783573'
    },
    {
      title: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project, opportunity, or question? Feel free to reach out anytime.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>

            {contactInfo.map((info, index) => (
              <div key={index} className="info-item">
                <div className="info-icon"></div>
                <div className="info-details">
                  <h4>{info.title}</h4>
                  <a href={info.link}>{info.value}</a>
                </div>
              </div>
            ))}

            <p className="contact-message">
              I’m open to new opportunities, collaborations, and freelance projects.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
