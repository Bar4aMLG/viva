import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet-async'
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const aboutRef = useRef(null)
  const statsRef = useRef(null)
  const teamRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-hero h1', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from('.about-card', {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
      })

      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.1,
      })

      gsap.from('.team-card', {
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
      })
    }, aboutRef)

    return () => ctx.revert()
  }, [])

  const values = [
    { icon: <FiTarget />, title: 'Our Mission', description: 'To transform visionary ideas into stunning digital realities that drive business growth and captivate audiences worldwide.' },
    { icon: <FiEye />, title: 'Our Vision', description: 'To be the leading premium digital agency known for innovation, excellence, and pushing the boundaries of what is possible.' },
    { icon: <FiHeart />, title: 'Our Values', description: 'Excellence in every detail, transparency in all dealings, creativity without limits, and partnership with every client.' },
  ]

  const team = [
    { name: 'Alexandra Chen', role: 'CEO & Founder', bio: '10+ years in digital strategy and brand development.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' },
    { name: 'Marcus Rivera', role: 'Creative Director', bio: 'Award-winning designer with a passion for visual storytelling.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' },
    { name: 'Sarah Kim', role: 'Lead Developer', bio: 'Full-stack expert specializing in React and modern web technologies.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400' },
    { name: 'David Thompson', role: 'AI Specialist', bio: 'Pioneering AI-generated visuals for commercial applications.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400' },
  ]

  return (
    <>
      <Helmet>
        <title>About | ILTR — Premium Digital Agency</title>
        <meta name="description" content="Learn about ILTR's mission, vision, and team of digital experts." />
      </Helmet>

      <section className="about-hero">
        <div className="glow-gold" style={{ top: '20%', left: '15%' }}></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">About Us</span>
            <h1>We Link Ideas To <span className="text-gradient">Reality</span></h1>
            <p style={{ maxWidth: '700px' }}>
              ILTR is a premium digital agency dedicated to transforming your vision into 
              extraordinary digital experiences. We combine cutting-edge technology with 
              artistic excellence to deliver results that exceed expectations.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={aboutRef} className="section">
        <div className="container">
          <div className="about-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="glass-card about-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="feature-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={statsRef} className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '2+', label: 'Years Experience' },
              { number: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={teamRef} className="team-section">
        <div className="container">
          <div className="section-title">
            <span>Our Team</span>
            <h2>Meet the <span className="text-gradient">Experts</span></h2>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="glass-card team-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                  loading="lazy"
                />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
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
            <h2 className="cta-title">Want to join our team?</h2>
            <p className="cta-subtitle">We're always looking for talented individuals.</p>
            <a href="/contact" className="btn btn-primary">Get In Touch</a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About
