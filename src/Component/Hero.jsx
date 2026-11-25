
function Hero() {
  return (
    <section className="hero-section">

      <div className="hero-overlay"></div>

      <div className="hero-container">

        <div className="hero-text">

          <span className="hero-tag">
            FIND YOUR PLACE IN THE WORLD
          </span>

          <h1>
            Discover a Place
            <br />
            You'll <span>Love to Live.</span>
          </h1>

          <p>
            Find your perfect home from thousands of
            properties. Explore, compare and discover
            a place that truly feels like yours.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">
              Explore Properties →
            </button>

            <button className="secondary-btn">
              Contact Us
            </button>
          </div>

        </div>

        <div className="search-panel">

          <div className="search-heading">
            <h3>Find Your Property</h3>
            <span>Start your search today</span>
          </div>

          <div className="search-fields">

            <div className="field-group">
              <label>Location</label>
              <input
                type="text"
                placeholder="Enter city or location"
              />
            </div>

            <div className="field-group">
              <label>Property Type</label>
              <select>
                <option>All Properties</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Independent House</option>
              </select>
            </div>

            <div className="field-group">
              <label>Purpose</label>
              <select>
                <option>Buy</option>
                <option>Rent</option>
              </select>
            </div>

            <button className="search-button">
              Search Property
            </button>

          </div>

        </div>

        <div className="hero-stats">

          <div>
            <h3>500+</h3>
            <span>Properties Listed</span>
          </div>

          <div>
            <h3>300+</h3>
            <span>Happy Clients</span>
          </div>

          <div>
            <h3>50+</h3>
            <span>Expert Agents</span>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero
