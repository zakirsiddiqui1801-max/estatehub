
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar">

        <Link to="/" className="logo" onClick={closeMenu}>
         <span> EstateHub.</span>
        </Link>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>

          <li>
            <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          </li>

          <li>
            <NavLink to="/properties" onClick={closeMenu}>Properties</NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
          </li>

          <li>
           <NavLink to="/service" onClick={closeMenu}>
  Service
</NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </li>

        </ul>

        <Link to="/contact" className="nav-contact" onClick={closeMenu}>
          Get in Touch <span>↗</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>
    </header>
  )
}

export default Navbar
