
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const [isSending, setIsSending] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.currentTarget

        setIsSending(true)
        setErrorMessage('')

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )

            setSubmitted(true)
            form.reset()

        } catch (error) {
            console.error('EmailJS Error:', error)
            setErrorMessage('Message could not be sent. Please try again.')

        } finally {
            setIsSending(false)
        }
    }

    return (
        <main className="contact-page">

            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-overlay"></div>

                <div className="contact-hero-content">
                    <span className="contact-eyebrow">
                        WE'RE HERE TO HELP
                    </span>

                    <h1>
                        Let's Find Your <br />
                        <span>Perfect Property.</span>
                    </h1>

                    <p>
                        Have a question or planning your next move?
                        Our real estate experts are ready to help you
                        make the right decision.
                    </p>

                    <a href="#contact-form" className="contact-hero-btn">
                        Get In Touch <span>→</span>
                    </a>
                </div>
            </section>

            {/* Contact Information */}
            <section className="contact-main section-container">

                <div className="contact-intro">
                    <span className="section-tag">CONTACT US</span>
                    <h2>Let's Start a Conversation</h2>
                    <p>
                        Whether you're buying, selling, renting or simply
                        exploring your options, we're here to guide you.
                        Tell us what you need and our team will get in touch.
                    </p>
                </div>

                <div className="contact-layout">

                    {/* Left Information Panel */}
                    <div className="contact-info">

                        <div className="contact-info-heading">
                            <span>GET IN TOUCH</span>
                            <h3>We'd Love to Hear From You</h3>
                            <p>
                                Reach out to our team through any of the
                                following channels.
                            </p>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon">☎</div>
                            <div>
                                <h4>Call Us</h4>
                                <p>Speak directly with our team</p>
                                <a href="tel:+910000000000">
                                    +91 8810282434
                                </a>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon">✉</div>
                            <div>
                                <h4>Email Us</h4>
                                <p>Send us your questions anytime</p>
                                <a href="mailto:hello@estatehub.com">
                                    estatehub247.@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon">⌖</div>
                            <div>
                                <h4>Our Office</h4>
                                <p>Visit us for a personal consultation</p>
                                <span>New Delhi, India</span>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon">◷</div>
                            <div>
                                <h4>Working Hours</h4>
                                <p>Monday – Saturday</p>
                                <span>9:00 AM – 6:00 PM</span>
                            </div>
                        </div>

                        <div className="contact-whatsapp">
                            <div>
                                <h4>Prefer WhatsApp?</h4>
                                <p>Chat with our property experts.</p>
                            </div>

                            <a
                                href="https://wa.me/910000000000"
                                target="_blank"
                                rel="noreferrer"
                                className="whatsapp-btn"
                            >
                                Chat With Us ↗
                            </a>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper" id="contact-form">

                        <div className="form-heading">
                            <span>ENQUIRY FORM</span>
                            <h3>Send Us a Message</h3>
                            <p>
                                Fill in the details below and let us know
                                how we can assist you.
                            </p>
                        </div>

                        {submitted ? (
                            <div className="contact-success">
                                <div className="success-icon">✓</div>
                                <h3>Thank You!</h3>
                                <p>
                                    Your enquiry has been sent successfully!
                                    Our team will contact you soon.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                >
                                    Send Another Enquiry
                                </button>
                            </div>
                        ) : (

                            <form className="contact-form" onSubmit={handleSubmit}>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="contact-name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            name="from_name"
                                            placeholder="Enter your full name"
                                            required
                                            minLength={2}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="contact-email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            name="from_email"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="contact-phone">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="contact-phone"
                                            name="phone"
                                            placeholder="Enter your phone number"
                                            pattern="[0-9+\-\s()]{7,20}"
                                            title="Enter a valid phone number"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="contact-service">I'm Interested In *</label>
                                        <select
                                            id="contact-service"
                                            name="service"
                                            defaultValue=""
                                            required
                                        >
                                            <option value="" disabled>Select a service</option>
                                            <option value="Buying a Property">Buying a Property</option>
                                            <option value="Renting a Property">Renting a Property</option>
                                            <option value="Selling a Property">Selling a Property</option>
                                            <option value="Commercial Property">Commercial Property</option>
                                            <option value="Property Consultation">Property Consultation</option>
                                            <option value="Property Management">Property Management</option>
                                            <option value="Other Enquiry">Other Enquiry</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contact-subject">Subject *</label>
                                    <input
                                        type="text"
                                        id="contact-subject"
                                        name="subject"
                                        placeholder="What is your enquiry about?"
                                        required
                                        minLength={3}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contact-message">Your Message *</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows="5"
                                        placeholder="Tell us a little more about what you're looking for..."
                                        required
                                        minLength={10}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="contact-submit-btn"
                                    disabled={isSending}
                                >
                                    {isSending ? 'Sending...' : 'Submit Enquiry'}
                                    {!isSending && <span>→</span>}
                                </button>

                                {errorMessage && (
                                    <p className="form-error">
                                        {errorMessage}
                                    </p>
                                )}

                                <p className="form-privacy">
                                    Your information will only be used to respond
                                    to your enquiry.
                                </p>

                            </form>
                        )}

                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="contact-bottom-cta">
                <div>
                    <span>YOUR NEXT CHAPTER STARTS HERE</span>
                    <h2>Ready to Make Your Property Move?</h2>
                    <p>
                        Explore our available properties and find a place
                        that feels like home.
                    </p>
                </div>

                <a href="/properties">
                    Explore Properties <span>→</span>
                </a>
            </section>

        </main>
    )
}

export default Contact
