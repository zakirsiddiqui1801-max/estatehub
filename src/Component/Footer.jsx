
function Footer() {
  return (
    <footer className="site-footer" id="contact">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            Estate<span>Hub.</span>
          </a>

          <p>
            Discover exceptional properties and find a place
            that truly feels like home. Your next chapter
            begins with us.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="#properties">Properties</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Property Links */}
        <div className="footer-column">
          <h3>Explore Properties</h3>
          <a href="#properties">Apartments</a>
          <a href="#properties">Luxury Homes</a>
          <a href="#properties">Villas</a>
          <a href="#properties">Commercial Spaces</a>
          <a href="#properties">New Listings</a>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Let's Find Your Place</h3>
          <p>
            Looking for your dream property?
            Get in touch with our team today.
          </p>

          <a href="#contact" className="footer-cta">
            Get in Touch <span>↗</span>
          </a>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} EstateHub. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
