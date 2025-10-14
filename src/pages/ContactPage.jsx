import { useEffect, useState } from 'react';
import { artistData } from '../data/content';
import { Mail, Phone, MapPin, Instagram, ExternalLink } from 'lucide-react';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact | King Koss';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.content = 'Get in touch with King Koss. Booking, press inquiries, and fan messages.';
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'general',
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Let's Connect & Collaborate</p>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Connect With King Koss</h2>

              <div className="info-card">
                <Mail size={24} />
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${artistData.email}`}>
                    {artistData.email}
                  </a>
                </div>
              </div>

              <div className="info-card">
                <MapPin size={24} />
                <div>
                  <h3>Based In</h3>
                  <p>{artistData.location}</p>
                </div>
              </div>

              <div className="info-card">
                <Instagram size={24} />
                <div>
                  <h3>Social Media</h3>
                  <a
                    href={artistData.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow on Instagram
                  </a>
                </div>
              </div>

              <div className="info-card">
                <ExternalLink size={24} />
                <div>
                  <h3>All Links</h3>
                  <a
                    href={artistData.socials.linktree}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit LinkTree
                  </a>
                </div>
              </div>

              <div className="contact-types">
                <h3>Inquiries</h3>
                <ul>
                  <li>🎤 Booking & Performances</li>
                  <li>📰 Press & Media</li>
                  <li>🎵 Production & Collaboration</li>
                  <li>💌 Fan Messages</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send a Message</h2>

              {submitted ? (
                <div className="success-message">
                  <h3>✓ Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="type">Inquiry Type</label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="booking">Booking</option>
                      <option value="press">Press & Media</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="fan">Fan Message</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message here..."
                      rows="6"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section follow-section">
        <div className="container follow-container">
          <h2>Follow The Journey</h2>
          <p>Stay updated on new releases, tour dates, and exclusive content</p>
          <div className="follow-links">
            <a
              href={artistData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="follow-btn instagram"
            >
              <Instagram size={20} />
              Instagram
            </a>
            <a
              href={artistData.socials.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="follow-btn spotify"
            >
              🎵 Spotify
            </a>
            <a
              href={artistData.socials.apple}
              target="_blank"
              rel="noopener noreferrer"
              className="follow-btn apple"
            >
              🎧 Apple Music
            </a>
            <a
              href={artistData.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="follow-btn youtube"
            >
              ▶️ YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
