import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { FiX } from 'react-icons/fi'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filters = ['All', 'Web Design', 'Branding', 'AI Visuals']

  const projects = [
    { id: 1, name: 'Noir Perfume', category: 'Branding', image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800', description: 'Luxury perfume brand identity with elegant packaging design.', client: 'Noir Parfums', year: '2024' },
    { id: 2, name: 'Brew House', category: 'Web Design', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800', description: 'Modern e-commerce platform for specialty coffee roasters.', client: 'Brew House Co.', year: '2024' },
    { id: 3, name: 'Aurora Skincare', category: 'AI Visuals', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800', description: 'AI-generated product photography for skincare line.', client: 'Aurora Beauty', year: '2024' },
    { id: 4, name: 'Velora Fashion', category: 'Branding', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800', description: 'Complete fashion brand identity and visual system.', client: 'Velora Studios', year: '2023' },
    { id: 5, name: 'Moka Coffee', category: 'Web Design', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800', description: 'Interactive website with online ordering system.', client: 'Moka Cafes', year: '2023' },
    { id: 6, name: 'Luxnia Jewelry', category: 'AI Visuals', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800', description: 'Photorealistic AI renders for jewelry collection.', client: 'Luxnia', year: '2024' },
    { id: 7, name: 'Zenith Tech', category: 'Web Design', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800', description: 'SaaS platform landing page with modern UI.', client: 'Zenith Inc.', year: '2024' },
    { id: 8, name: 'Ember Restaurant', category: 'Branding', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', description: 'Restaurant branding with menu and signage design.', client: 'Ember Group', year: '2023' },
    { id: 9, name: 'Pulse Fitness', category: 'AI Visuals', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800', description: 'AI-powered fitness app marketing visuals.', client: 'Pulse App', year: '2024' },
    { id: 10, name: 'Nova Architecture', category: 'Web Design', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800', description: 'Portfolio website for architecture firm.', client: 'Nova Architects', year: '2023' },
    { id: 11, name: 'Silk Cosmetics', category: 'Branding', image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=800', description: 'Minimalist cosmetics brand identity.', client: 'Silk Beauty', year: '2024' },
    { id: 12, name: 'Horizon Travel', category: 'AI Visuals', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800', description: 'Travel destination AI imagery for campaigns.', client: 'Horizon Tours', year: '2023' },
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <>
      <Helmet>
        <title>Portfolio | ILTR — Premium Digital Agency</title>
        <meta name="description" content="Explore our portfolio of premium digital projects." />
      </Helmet>

      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="glow-gold" style={{ top: '40%', right: '15%' }}></div>
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">Our Work</span>
            <h1>Featured <span className="text-gradient">Projects</span></h1>
            <p style={{ margin: '1.5rem auto', maxWidth: '600px' }}>
              A curated selection of our finest work across branding, web design, and AI visuals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portfolio-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div 
            className="projects-grid"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="project-card glass-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedProject(project)}
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
                    <p className="project-description">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProject(null)}>
                <FiX />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="modal-image"
              />
              <div className="modal-body">
                <span className="modal-category">{selectedProject.category}</span>
                <h2 className="modal-title">{selectedProject.name}</h2>
                <p className="modal-description">{selectedProject.description}</p>
                <div className="modal-details">
                  <div className="modal-detail">
                    <strong>Client</strong>
                    <span>{selectedProject.client}</span>
                  </div>
                  <div className="modal-detail">
                    <strong>Year</strong>
                    <span>{selectedProject.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Portfolio
