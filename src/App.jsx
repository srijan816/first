import React from 'react'
import './App.css'

// Import components
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Technology from './components/Technology'
import Applications from './components/Applications'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Technology />
      <Applications />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
