
import './About.css'

function About() {
  return (
    <main className="about-page">

      {/* Company Introduction */}
      <section className="about-intro">

        <div className="about-intro-container">

          <div className="about-intro-content">
            <span className="about-label">
              WHO WE ARE
            </span>

            <h1>
              Making Real Estate
              <span> Simple, Honest & Personal.</span>
            </h1>

            <p>
              At EstateHub, we believe finding the right property
              should be an exciting experience, not a stressful one.
              We help people discover properties that match their
              lifestyle, needs and ambitions.
            </p>

            <p>
              Whether you are searching for your first home,
              investing in property or looking for the perfect
              rental space, we are here to guide you at every step.
            </p>

            <a href="/properties" className="about-main-btn">
              Explore Our Properties
              <span> → </span>
            </a>
          </div>

          <div className="about-intro-image">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=75"
              alt="Modern luxury residential property"
              loading="lazy"
            />

            <div className="about-image-caption">
              <strong>Find a place to call home.</strong>
              <span>Your next chapter starts here.</span>
            </div>
          </div>

        </div>
      </section>


      
      
{/* Developer Section */}
<section className="about-developer">

  <div className="about-developer-container">

    <div className="about-developer-image-wrapper">
      <img
        src="/zakir.jpg"
        alt="Mohd Zakir - Developer of EstateHub"
        className="about-developer-image"
      />
    </div>

    <div className="about-developer-content">

      <span className="about-developer-label">
        MEET THE DEVELOPER
      </span>

      <h2>Mohd Zakir</h2>

      <h3>Developer of EstateHub</h3>

      <p>
        Hello! I'm Mohd Zakir, the developer behind EstateHub.
        I created this platform with the vision of making real
        estate property discovery simple, convenient and
        accessible for everyone.
      </p>

      <p>
        From designing the interface to developing its features,
        my goal has been to create a smooth and user-friendly
        experience that helps people explore properties with
        confidence.
      </p>

      <div className="about-developer-tags">
        <span>Creative Development</span>
        <span>Modern Web Experience</span>
      </div>

    </div>

  </div>

</section>



      {/* Experience and Achievements */}
      <section className="about-stats">

        <div className="about-stats-heading">
          <span className="about-label">OUR JOURNEY</span>
          <h2>Building Trust Through Real Estate</h2>
          <p>
            Our focus is on creating better property experiences
            through knowledge, commitment and customer care.
          </p>
        </div>

        <div className="about-stats-grid">

          <div className="about-stat-card">
            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>

          <div className="about-stat-card">
            <h3>50+</h3>
            <p>Properties Listed</p>
          </div>

          <div className="about-stat-card">
            <h3>1,000+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="about-stat-card">
            <h3>15+</h3>
            <p>Locations Covered</p>
          </div>

        </div>
      </section>


      {/* Mission and Vision */}
      <section className="about-mission">

        <div className="about-mission-container">

          <div className="about-mission-image">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=75"
              alt="Beautiful modern home interior"
              loading="lazy"
            />
          </div>

          <div className="about-mission-content">

            <span className="about-label">WHAT DRIVES US</span>

            <h2>More Than Properties, We Build Relationships.</h2>

            <div className="mission-item">
              <h3>Our Mission</h3>
              <p>
                To make property buying, selling and renting
                easier through transparent information,
                personalized guidance and dependable service.
              </p>
            </div>

            <div className="mission-item">
              <h3>Our Vision</h3>
              <p>
                To become a trusted real estate destination
                where every customer feels confident about
                making one of life's biggest decisions.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Why Choose Us */}
      <section className="about-why">

        <div className="about-why-heading">
          <span className="about-label">WHY ESTATEHUB</span>
          <h2>Why Choose Us?</h2>
          <p>
            We put your needs first and make every step
            of your property journey easier.
          </p>
        </div>

        <div className="about-why-grid">

          <div className="about-feature-card">
            <div className="feature-icon">⌂</div>
            <h3>Property Choices</h3>
            <p>
              Explore a variety of residential and commercial
              properties to find the right match.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="feature-icon">✓</div>
            <h3>Transparent Guidance</h3>
            <p>
              Clear property information and honest guidance
              to help you make informed decisions.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="feature-icon">♧</div>
            <h3>Customer First</h3>
            <p>
              We focus on understanding your requirements
              and helping you throughout your journey.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="feature-icon">◇</div>
            <h3>Dedicated Support</h3>
            <p>
              Get assistance from your first property search
              to your next important decision.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}

export default About
