import { useState } from 'react'
import './ContactPage.css'

const PHONE = '919409435853'
const PHONE_DISPLAY = '+91 94094 35853'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', subject: 'general', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Build WhatsApp message from form data
    const subjectLabels = {
      general: 'General Inquiry',
      order: 'Bulk Order',
      complaint: 'Complaint / Feedback',
      custom: 'Custom Order',
    }
    const msg = `Hello Sahu Ji Ke Papad,\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Subject:* ${subjectLabels[form.subject]}\n\n*Message:*\n${form.message}`
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <div className="container contact-page">
      <div className="contact-page__header">
        <h1>Get in Touch</h1>
        <p className="font-hindi" style={{ color: 'var(--color-primary)' }}>हमसे जुड़ें</p>
        <p>Have a question, want to place a bulk order, or just say hi? We'd love to hear from you.</p>
      </div>

      <div className="contact-grid">

        {/* Form */}
        <div className="contact-form-wrap">
          {submitted ? (
            <div className="form-success">
              <span className="form-success__icon">✅</span>
              <h2>Message Sent!</h2>
              <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-4)' }}>
                We've opened WhatsApp with your message pre-filled. We typically respond within a few hours.
              </p>
              <button
                className="btn btn-secondary"
                style={{ marginTop: 'var(--space-8)' }}
                onClick={() => setSubmitted(false)}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>Send Us a Message</h2>

              <div className="form-group">
                <label htmlFor="contact-name">Your Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="e.g. Priya Sharma"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">Your Phone Number</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="e.g. +91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject *</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="general">General Inquiry</option>
                  <option value="order">Bulk Order Request</option>
                  <option value="custom">Custom / Festival Pack</option>
                  <option value="complaint">Complaint / Feedback</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us how we can help..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn">
                Send via WhatsApp →
              </button>
            </form>
          )}
        </div>

        {/* Info Cards */}
        <div className="contact-info">

          <div className="contact-info__card">
            <div className="contact-info__icon">📞</div>
            <div className="contact-info__text">
              <h4>Call / WhatsApp</h4>
              <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
              <p>Mon – Sat, 9 AM to 7 PM</p>
            </div>
          </div>

          <div className="contact-info__card">
            <div className="contact-info__icon">✉️</div>
            <div className="contact-info__text">
              <h4>Email Us</h4>
              <a href="mailto:hello@sahujipapad.com">hello@sahujipapad.com</a>
              <p>We reply within 24 hours</p>
            </div>
          </div>

          <div className="contact-info__card">
            <div className="contact-info__icon">📍</div>
            <div className="contact-info__text">
              <h4>Our Location</h4>
              <p>Sahu Ji Niwas, Near Main Market<br />Indore, Madhya Pradesh — 452001</p>
            </div>
          </div>

          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent('Hello Sahu Ji Ke Papad, I have a query!')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-direct"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Chat on WhatsApp Now
          </a>

        </div>
      </div>
    </div>
  )
}
