import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet-async'
import { FiZap, FiImage, FiCpu, FiTrendingUp, FiArrowRight } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const heroRef = useRef(null)
  const brandsRef = useRef(null)
  const featuresRef = useRef(null)
  const servicesRef = useRef(null)
  const projectsRef = useRef(null)

  useEffect(() => {
    // Hero animations
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      })

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      })

      gsap.from('.hero-buttons .btn', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.6,
        ease: 'power3.out',
      })

      gsap.from('.hero-mockup', {
        opacity: 0,
        scale: 0.9,
        rotationY: -15,
        duration: 1.5,
        delay: 0.5,
        ease: 'power3.out',
      })

      // Floating elements animation
      gsap.to('.floating-element', {
        y: '+=20',
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.5,
      })

      // Brands section
      gsap.from('.brand-item', {
        scrollTrigger: {
          trigger: brandsRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
      })

      // Features cards
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
      })

      // Services cards
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
      })

      // Projects cards
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const brands = ['NOIR', 'AURORA', 'VELORA', 'MOKA', 'LUXNIA']

  const features = [
    { icon: <FiZap />, title: 'Fast Delivery', description: 'Quick turnaround without compromising quality.' },
    { icon: <FiImage />, title: 'Premium Design', description: 'Award-winning aesthetics that stand out.' },
    { icon: <FiCpu />, title: 'AI Enhanced', description: 'Cutting-edge AI technology for stunning visuals.' },
    { icon: <FiTrendingUp />, title: 'Business Focused', description: 'Results-driven strategies for growth.' },
  ]

  const services = [
    { number: '01', title: 'Web Development', items: ['Landing Pages', 'Business Websites', 'E-Commerce', 'React Applications'] },
    { number: '02', title: 'AI Product Photography', items: ['Product Rendering', 'Lifestyle Scenes', 'Advertising Visuals', 'Social Media Assets'] },
    { number: '03', title: 'Brand Identity', items: ['Logo Design', 'Visual Systems', 'Brand Guidelines', 'Marketing Assets'] },
    { number: '04', title: 'SEO Optimization', items: ['Technical SEO', 'On-page SEO', 'Speed Optimization', 'Performance Audits'] },
  ]

  const projects = [
    { id: 1, name: 'Noir Perfume', category: 'Branding', image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800' },
    { id: 2, name: 'Brew House', category: 'Web Design', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800' },
    { id: 3, name: 'Aurora Skincare', category: 'AI Visuals', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800' },
    { id: 4, name: 'Velora Fashion', category: 'Branding', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800' },
    { id: 5, name: 'Moka Coffee', category: 'Web Design', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800' },
    { id: 6, name: 'Luxnia Jewelry', category: 'AI Visuals', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800' },
  ]

  return (
    <>
      <Helmet>
        <title>ILTR — Image Link To Reality | Premium Digital Agency</title>
        <meta name="description" content="Premium digital agency delivering websites, branding, and AI-powered visuals." />
      </Helmet>

      {/* Hero Section */}
      <section ref={heroRef} className="hero">
        <div className="glow-blue" style={{ top: '20%', left: '10%' }}></div>
        <div className="glow-gold" style={{ bottom: '20%', right: '10%' }}></div>
        
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">Welcome to ILTR</span>
            <h1 className="hero-title">
              We Link Ideas To{' '}
              <span className="text-gradient">Reality</span>
            </h1>
            <p className="hero-subtitle">
              Premium digital agency delivering websites, branding, and AI-powered visuals 
              that transform your vision into extraordinary results.
            </p>
            <div className="hero-buttons">
              <Link to="/portfolio" className="btn btn-primary">
                View Our Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Start A Project
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hero-mockup glass-card">
              <div className="floating-element glass-card" style={{ width: '120px', height: '80px', padding: '1rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--gold)' }}>UI Design</div>
              </div>
              <div className="floating-element glass-card" style={{ width: '100px', height: '100px', borderRadius: '50%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '2rem', color: 'var(--gold)' }}>✦</div>
              </div>
              <div className="floating-element glass-card" style={{ width: '140px', height: '60px', padding: '1rem' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--gold)' }}>AI Powered</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section ref={brandsRef} className="brands">
        <div className="container">
          <p className="brands-title">Trusted by luxury brands worldwide</p>
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                className="brand-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ opacity: 1, scale: 1.05 }}
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={featuresRef} className="section">
        <div className="container">
          <div className="section-title">
            <span>Why Choose Us</span>
            <h2>Experience the <span className="text-gradient">Difference</span></h2>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-card feature-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={servicesRef} className="section services-preview">
        <div className="glow-blue" style={{ top: '10%', right: '-10%' }}></div>
        <div className="container">
          <div className="section-title">
            <span>Our Services</span>
            <h2>What We <span className="text-gradient">Offer</span></h2>
          </div>
          <div className="features-grid">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass-card service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="service-card-content">
                  <div className="service-number">{service.number}</div>
                  <h3>{service.title}</h3>
                  <ul className="service-list">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-outline">
              View All Services <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={projectsRef} className="section">
        <div className="glow-gold" style={{ bottom: '10%', left: '-5%' }}></div>
        <div className="container">
          <div className="section-title">
            <span>Featured Work</span>
            <h2>Recent <span className="text-gradient">Projects</span></h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card glass-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">Premium digital experience</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/portfolio" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="glow-blue" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
        <div className="container cta-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-title">Ready to transform your brand?</h2>
            <p className="cta-subtitle">
              Let's create something extraordinary together. Your vision, our expertise.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
