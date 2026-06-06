import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from '@studio-freight/lenis'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

// Pages
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Simulate loading
    setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      lenis.destroy()
    }
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Navbar />
        <main>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}

export default App
