
import './Service.css'

const services = [
  {
    number: '01',
    icon: '⌂',
    title: 'Residential Property Buying',
    description:
      'Find your ideal home from a wide range of apartments, villas, independent houses and residential properties.',
    tag: 'BUY PROPERTY',
  },
  {
    number: '02',
    icon: '⌑',
    title: 'Property Renting',
    description:
      'Discover comfortable rental homes and apartments that match your lifestyle, preferred location and budget.',
    tag: 'RENT PROPERTY',
  },
  {
    number: '03',
    icon: '↗',
    title: 'Property Selling',
    description:
      'Get assistance in presenting your property, reaching potential buyers and managing the selling journey.',
    tag: 'SELL PROPERTY',
  },
  {
    number: '04',
    icon: '▦',
    title: 'Commercial Real Estate',
    description:
      'Explore commercial spaces including offices, retail shops and business properties for buying or renting.',
    tag: 'COMMERCIAL',
  },
  {
    number: '05',
    icon: '◎',
    title: 'Property Consultation',
    description:
      'Get guidance to understand property options, compare locations and make informed real estate decisions.',
    tag: 'EXPERT GUIDANCE',
  },
  {
    number: '06',
    icon: '₹',
    title: 'Property Valuation',
    description:
      'Understand the estimated market value of a property with consideration of its location and key features.',
    tag: 'PROPERTY VALUE',
  },
  {
    number: '07',
    icon: '▤',
    title: 'Home Loan Assistance',
    description:
      'Get guidance on home loan options, eligibility requirements and the general loan application process.',
    tag: 'LOAN GUIDANCE',
  },
  {
    number: '08',
    icon: '⌘',
    title: 'Property Management',
    description:
      'Get support with rental coordination, property maintenance planning and day-to-day property management.',
    tag: 'PROPERTY CARE',
  },
]

const features = [
  {
    icon: '⌕',
    title: 'Advanced Property Search',
    description:
      'Find properties using location, budget, property type and bedroom preferences.',
  },
  {
    icon: '♡',
    title: 'Favourite Properties',
    description:
      'Save your preferred property listings and easily revisit them later.',
  },
  {
    icon: '▣',
    title: 'Schedule a Site Visit',
    description:
      'Send a visit request and arrange a convenient time to explore a property.',
  },
  {
    icon: '₹',
    title: 'Home EMI Calculator',
    description:
      'Estimate monthly loan payments using loan amount, interest rate and tenure.',
  },
  {
    icon: '✉',
    title: 'Property Enquiries',
    description:
      'Contact the team to ask questions or request more information about a listing.',
  },
  {
    icon: '♙',
    title: 'Personal User Account',
    description:
      'Manage your profile, saved properties and property enquiries in one place.',
  },
]

function Service() {
  return (
    <main className="service-page">

      {/* HERO SECTION */}
      <section className="service-hero">
        <div className="service-hero-overlay">
          <div className="service-hero-content">

            <span className="service-eyebrow">
              WHAT WE OFFER
            </span>

            <h1>
              Complete Real Estate
              <span> Solutions for You.</span>
            </h1>

            <p>
              From finding your dream home to managing your
              property journey, explore services designed to
              make real estate simpler and more convenient.
            </p>

            <div className="service-hero-actions">
              <a href="#our-services" className="service-btn-primary">
                Explore Our Services <span>→</span>
              </a>

              <a href="/contact" className="service-btn-outline">
                Talk to Our Team
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="service-intro">
        <span className="service-label">OUR EXPERTISE</span>

        <h2>
          Everything You Need for Your
          <span> Property Journey.</span>
        </h2>

        <p>
          Whether you are buying, selling, renting or investing,
          EstateHub brings essential real estate services
          together to help you make confident decisions.
        </p>
      </section>


      {/* MAIN SERVICES */}
      <section className="service-list-section" id="our-services">

        <div className="service-grid">

          {services.map((service) => (
            <article className="service-card" key={service.number}>

              <div className="service-card-top">
                <span className="service-card-number">
                  {service.number}
                </span>

                <div className="service-icon">
                  {service.icon}
                </div>
              </div>

              <span className="service-card-tag">
                {service.tag}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="/contact" className="service-card-link">
                Enquire Now <span>→</span>
              </a>

            </article>
          ))}

        </div>
      </section>


      {/* WHY CHOOSE OUR SERVICES */}
      <section className="service-benefits">

        <div className="service-benefits-image">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=75"
            alt="Modern luxury home interior"
            loading="lazy"
          />
        </div>

        <div className="service-benefits-content">

          <span className="service-label">THE ESTATEHUB ADVANTAGE</span>

          <h2>
            Real Estate Decisions
            <span> Made Simpler.</span>
          </h2>

          <p>
            Choosing a property is an important decision.
            Our approach focuses on making your experience
            clear, convenient and customer-focused.
          </p>

          <div className="benefit-item">
            <span>✓</span>
            <div>
              <h4>More Property Choices</h4>
              <p>Explore different property types and locations.</p>
            </div>
          </div>

          <div className="benefit-item">
            <span>✓</span>
            <div>
              <h4>Clear Information</h4>
              <p>Understand property details before making a decision.</p>
            </div>
          </div>

          <div className="benefit-item">
            <span>✓</span>
            <div>
              <h4>Customer-Focused Guidance</h4>
              <p>Get assistance based on your property requirements.</p>
            </div>
          </div>

          <div className="benefit-item">
            <span>✓</span>
            <div>
              <h4>Convenient Enquiries</h4>
              <p>Connect with us to discuss your property needs.</p>
            </div>
          </div>

        </div>
      </section>


      {/* WEBSITE FEATURES */}
      <section className="service-features">

        <div className="service-features-heading">
          <span className="service-label">SMARTER PROPERTY EXPERIENCE</span>

          <h2>
            Explore Our Website
            <span> Features.</span>
          </h2>

          <p>
            Useful tools and features designed to make your
            property search easier and more convenient.
          </p>
        </div>

        <div className="service-features-grid">

          {features.map((feature, index) => (
            <article className="service-feature-card" key={feature.title}>

              <div className="service-feature-icon">
                {feature.icon}
              </div>

              <span className="service-feature-number">
                FEATURE 0{index + 1}
              </span>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </article>
          ))}

        </div>
      </section>


      {/* CALL TO ACTION */}
      <section className="service-cta">

        <div className="service-cta-content">
          <span>LET'S FIND YOUR NEXT PROPERTY</span>

          <h2>
            Your Property Journey
            <br />
            Starts Here.
          </h2>

          <p>
            Have a property requirement or need guidance?
            Get in touch with our team today.
          </p>

          <div className="service-cta-actions">
            <a href="/properties" className="service-btn-primary">
              Browse Properties →
            </a>

            <a href="/contact" className="service-btn-outline">
              Contact Us
            </a>
          </div>
        </div>

      </section>

    </main>
  )
}

export default Service
