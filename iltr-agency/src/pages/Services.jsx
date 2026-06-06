import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet-async'
import { FiCode, FiCamera, FiPenTool, FiSearch } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const servicesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-hero h1', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from('.service-detail-card', {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
      })
    }, servicesRef)

    return () => ctx.revert()
  }, [])

  const services = [
    {
      id: 'web',
      icon: <FiCode />,
      title: 'Web Development',
      description: 'Custom websites built with cutting-edge technology for optimal performance and user experience.',
      features: ['Landing Pages', 'Business Websites', 'E-Commerce Solutions', 'React Applications', 'Progressive Web Apps', 'API Integration'],
    },
    {
      id: 'ai',
      icon: <FiCamera />,
      title: 'AI Product Photography',
      description: 'Stunning AI-generated product visuals that captivate your audience and boost conversions.',
      features: ['Product Rendering', 'Lifestyle Scenes', 'Advertising Visuals', 'Social Media Assets', '360° Views', 'Batch Processing'],
    },
    {
      id: 'brand',
      icon: <FiPenTool />,
      title: 'Brand Identity',
      description: 'Complete brand systems that tell your story and connect with your target audience.',
      features: ['Logo Design', 'Visual Systems', 'Brand Guidelines', 'Marketing Assets', 'Typography Selection', 'Color Palettes'],
    },
    {
      id: 'seo',
      icon: <FiSearch />,
      title: 'SEO Optimization',
      description: 'Data-driven SEO strategies to improve visibility and drive organic traffic.',
      features: ['Technical SEO', 'On-page SEO', 'Speed Optimization', 'Performance Audits', 'Keyword Research', 'Link Building'],
    },
  ]

  return (
    <>
      <Helmet>
        <title>Services | ILTR — Premium Digital Agency</title>
        <meta name="description" content="Professional web development, AI photography, branding, and SEO services." />
      </Helmet>

      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="glow-blue" style={{ top: '30%', left: '20%' }}></div>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">Our Services</span>
            <h1>Transform Your <span className="text-gradient">Digital Presence</span></h1>
            <p style={{ margin: '1.5rem auto', maxWidth: '600px', fontSize: '1.125rem' }}>
              Comprehensive digital solutions crafted with precision and creativity.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={servicesRef} className="section">
        <div className="container">
          <div className="features-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="glass-card service-detail-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="feature-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p style={{ marginBottom: '1.5rem' }}>{service.description}</p>
                <ul className="service-list">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Ready to get started?</h2>
            <p className="cta-subtitle">Let's discuss how we can help your business grow.</p>
            <a href="/contact" className="btn btn-primary">Contact Us</a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services
