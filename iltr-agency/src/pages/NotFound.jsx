import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | ILTR</title>
        <meta name="description" content="Page not found. Return to homepage." />
      </Helmet>

      <section className="not-found">
        <div className="glow-blue" style={{ top: '20%', left: '15%' }}></div>
        <div className="glow-gold" style={{ bottom: '20%', right: '15%' }}></div>
        
        {/* Floating astronaut SVG */}
        <svg 
          className="astronaut"
          style={{ top: '15%', right: '20%', width: '150px', opacity: 0.3 }}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="35" r="20" stroke="var(--gold)" strokeWidth="2"/>
          <circle cx="50" cy="35" r="8" fill="var(--gold)" opacity="0.3"/>
          <path d="M35 55 L35 75 L45 85 L55 85 L65 75 L65 55" stroke="var(--gold)" strokeWidth="2"/>
          <path d="M30 60 L20 70" stroke="var(--gold)" strokeWidth="2"/>
          <path d="M70 60 L80 70" stroke="var(--gold)" strokeWidth="2"/>
          <circle cx="25" cy="85" r="8" stroke="var(--gold)" strokeWidth="2"/>
          <circle cx="75" cy="85" r="8" stroke="var(--gold)" strokeWidth="2"/>
        </svg>

        <div className="not-found-content">
          <motion.div
            className="not-found-number"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            404
          </motion.div>
          
          <motion.h1
            className="not-found-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Lost in Space?
          </motion.h1>
          
          <motion.p
            className="not-found-text"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            The page you're looking for seems to have drifted into the cosmic void. 
            Don't worry, we'll help you find your way back.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/" className="btn btn-primary">
              Go Home
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default NotFound
