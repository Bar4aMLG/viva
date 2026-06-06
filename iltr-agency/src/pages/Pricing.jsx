import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FiCheck } from 'react-icons/fi'

const Pricing = () => {
  const [activeFaq, setActiveFaq] = useState(null)

  const plans = [
    {
      name: 'Launch',
      price: 499,
      description: 'Perfect for startups and small businesses',
      features: ['Landing Page', 'Basic Branding', '5 AI Visuals', 'Basic SEO', 'Mobile Responsive', '1 Revision Round'],
      popular: false,
    },
    {
      name: 'Growth',
      price: 899,
      description: 'Ideal for growing businesses',
      features: ['Premium Website (5 pages)', 'Brand Identity', '15 AI Visuals', 'Advanced SEO', 'E-commerce Ready', '3 Revision Rounds', 'Priority Support'],
      popular: true,
    },
    {
      name: 'Accelerator',
      price: 1499,
      description: 'Complete digital transformation',
      features: ['Full Website (Unlimited pages)', 'Full Branding System', '30 AI Visuals', 'Priority Support', 'Custom Integrations', 'Unlimited Revisions', 'Dedicated Manager', 'Analytics Setup'],
      popular: false,
    },
  ]

  const faqs = [
    { question: 'What is included in each package?', answer: 'Each package includes a combination of web development, branding, AI visuals, and SEO services. The specific deliverables vary based on the tier you choose.' },
    { question: 'How long does a typical project take?', answer: 'Project timelines vary based on scope. Landing pages typically take 1-2 weeks, while full websites can take 4-8 weeks depending on complexity.' },
    { question: 'Do you offer custom packages?', answer: 'Yes! We understand every business is unique. Contact us to discuss a custom solution tailored to your specific needs.' },
    { question: 'What is your payment structure?', answer: 'We require a 50% deposit to begin work, with the remaining 50% due upon project completion before launch.' },
    { question: 'Do you provide ongoing support?', answer: 'Yes, all packages include post-launch support. We also offer monthly maintenance plans for continued updates and optimization.' },
  ]

  return (
    <>
      <Helmet>
        <title>Pricing | ILTR — Premium Digital Agency</title>
        <meta name="description" content="Transparent pricing for premium digital services." />
      </Helmet>

      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="glow-blue" style={{ top: '30%', right: '20%' }}></div>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">Pricing Plans</span>
            <h1>Invest in Your <span className="text-gradient">Success</span></h1>
            <p style={{ margin: '1.5rem auto', maxWidth: '600px' }}>
              Transparent pricing with no hidden fees. Choose the plan that fits your needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`glass-card pricing-card ${plan.popular ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: plan.popular ? 1.05 : 1.02 }}
              >
                <h3 className="pricing-name">{plan.name}</h3>
                <p style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{plan.description}</p>
                <div className="pricing-price">
                  ${plan.price}
                  <span>/project</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <div className="section-title">
              <span>FAQ</span>
              <h2>Frequently Asked <span className="text-gradient">Questions</span></h2>
            </div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  {faq.question}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
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
            <h2 className="cta-title">Need a custom solution?</h2>
            <p className="cta-subtitle">Let's discuss your project and create a tailored package.</p>
            <a href="/contact" className="btn btn-secondary">Contact Us</a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Pricing
