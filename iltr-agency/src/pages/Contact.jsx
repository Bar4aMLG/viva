import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FiMail, FiPhone, FiMapPin, FiMessageSquare } from 'react-icons/fi'
import emailjs from 'emailjs'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    // Initialize EmailJS with your public key (replace with actual key)
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      )
      setStatus('success')
      setFormData({ name: '', email: '', businessName: '', budget: '', message: '' })
    } catch (error) {
      setStatus('error')
    }
  }

  const contactInfo = [
    { icon: <FiMail />, title: 'Email', value: 'hello@iltr.agency', href: 'mailto:hello@iltr.agency' },
    { icon: <FiPhone />, title: 'Phone', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
    { icon: <FiMapPin />, title: 'Location', value: 'New York, NY 10001', href: '#' },
    { icon: <FiMessageSquare />, title: 'WhatsApp', value: '+1 (234) 567-890', href: 'https://wa.me/1234567890' },
  ]

  return (
    <>
      <Helmet>
        <title>Contact | ILTR — Premium Digital Agency</title>
        <meta name="description" content="Get in touch with ILTR for your next digital project." />
      </Helmet>

      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="glow-blue" style={{ top: '30%', left: '25%' }}></div>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">Contact Us</span>
            <h1>Let's Start a <span className="text-gradient">Conversation</span></h1>
            <p style={{ margin: '1.5rem auto', maxWidth: '600px' }}>
              Ready to transform your brand? Get in touch and let's discuss your project.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-container">
            <motion.form
              className="glass-card contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="businessName">Business Name</label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  className="form-input"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your Company"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="budget">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  className="form-select"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget range</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="2000+">$2,000+</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  rows="5"
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Try Again' : 'Send Message'}
              </button>
            </motion.form>

            <motion.div
              className="glass-card contact-info"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Get in Touch</h3>
              <p style={{ marginBottom: '2rem', color: 'var(--accent)' }}>
                Have a question or want to discuss a project? We'd love to hear from you.
              </p>

              {contactInfo.map((item, index) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="info-item"
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', textDecoration: 'none' }}
                >
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </a>
              ))}

              <div className="social-links">
                <a href="#" className="social-link" aria-label="Instagram">IG</a>
                <a href="#" className="social-link" aria-label="Twitter">TW</a>
                <a href="#" className="social-link" aria-label="LinkedIn">LI</a>
                <a href="#" className="social-link" aria-label="Dribbble">DR</a>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <div className="map-section glass-card">
            <div className="map-placeholder">
              <h4>Our Location</h4>
              <p>New York, NY 10001</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Contact us for exact address</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
