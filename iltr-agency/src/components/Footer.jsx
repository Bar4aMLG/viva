import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiLinkedin, FiDribbble } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Pricing', path: '/pricing' },
    ],
    services: [
      { label: 'Web Development', path: '/services#web' },
      { label: 'AI Photography', path: '/services#ai' },
      { label: 'Brand Identity', path: '/services#brand' },
      { label: 'SEO Optimization', path: '/services#seo' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '#' },
      { label: 'Terms of Service', path: '#' },
      { label: 'Cookie Policy', path: '#' },
    ],
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">ILTR</Link>
            <p className="footer-description">
              Premium digital agency delivering websites, branding, and AI-powered visuals. 
              We link ideas to reality.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FiTwitter />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="#" className="social-link" aria-label="Dribbble">
                <FiDribbble />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:hello@iltr.agency" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FiMail /> hello@iltr.agency
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FiPhone /> +1 (234) 567-890
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiMapPin /> New York, NY
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} ILTR — Image Link To Reality. All rights reserved.
          </p>
          <div className="footer-legal">
            {footerLinks.legal.map((link) => (
              <a key={link.path} href={link.path}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
