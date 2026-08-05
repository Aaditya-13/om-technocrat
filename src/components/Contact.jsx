import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        e.target.reset();
      }, 5000);
    }, 1500);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-label reveal">Get in Touch</div>
        <h2 className="section-title reveal">Let's Build <span style={{ color: 'var(--orange)' }}>Together</span></h2>
        <p className="section-subtitle reveal">Partner with us for world-class automotive sheet metal solutions. Reach out for inquiries, quotes, or facility visits.</p>

        <div className="contact-grid">
          <div className="reveal-left">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon"><i className="ph ph-map-pin"></i></div>
                <div>
                  <h4>Visit Our Factory</h4>
                  <p>D-44/1, MIDC Area, Ambad,<br />Nashik, Maharashtra – 422010, India</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><i className="ph ph-phone"></i></div>
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:+918888832302">+91 8888832302</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><i className="ph ph-envelope"></i></div>
                <div>
                  <h4>Email Us</h4>
                  <a href="mailto:psunil@omtechnocrat.com">psunil@omtechnocrat.com</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><i className="ph ph-clock"></i></div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon – Sat: 9:00 AM – 6:00 PM IST</p>
                </div>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.6!2d73.7508!3d20.0063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb0b5e1d5d57%3A0x9c3e6f8b6e0c8c12!2sMIDC%20Ambad%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="OM TECHNOCRAT Location"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-wrapper reveal-right">
            <h3>Send Us a Message</h3>
            <p>Fill out the form below and our team will get back to you within 24 hours.</p>

            <form id="contactForm" onSubmit={handleSubmit} style={{ display: isSuccess ? 'none' : 'block' }}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contactName">Full Name *</label>
                  <input type="text" id="contactName" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contactCompany">Company</label>
                  <input type="text" id="contactCompany" name="company" placeholder="Company Name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contactEmail">Email Address *</label>
                <input type="email" id="contactEmail" name="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="contactProduct">Product Interest</label>
                <select id="contactProduct" name="product">
                  <option value="">Select a product category</option>
                  <option value="seat-frames">Seat Frames</option>
                  <option value="suv-frames">SUV 2nd Row Frames</option>
                  <option value="cushion-pan">Seat Cushion Pan</option>
                  <option value="sheet-metal">Sheet Metal Parts</option>
                  <option value="seat-tools">Seat Frame Tools</option>
                  <option value="risers">Risers for Thar Roxx</option>
                  <option value="other">Other / Custom Requirements</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="contactMessage">Message *</label>
                <textarea id="contactMessage" name="message" placeholder="Tell us about your requirements..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                      <path d="M12 2v4m0 12v4m-7.071-5.071l2.828-2.828m8.486-8.486l2.828-2.828M2 12h4m12 0h4M4.929 4.929l2.828 2.828m8.486 8.486l2.828 2.828" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>

            <div className={`form-success ${isSuccess ? 'show' : ''}`} id="formSuccess">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4>Message Sent Successfully!</h4>
              <p>Thank you for reaching out. Our team will contact you within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
