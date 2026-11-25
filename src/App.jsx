
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Footer from './Component/Footer'

// Pages
import Properties from './Pages/Properties'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'

// CSS
import './App.css'
import './Component/Footer.css'

// Home Page
function Home() {
  return (
    <>
      <Hero />
    </>
  )
}

// Main App
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
