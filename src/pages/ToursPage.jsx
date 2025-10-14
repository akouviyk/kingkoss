import { useEffect } from 'react';
import { tours } from '../data/content';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';
import './ToursPage.css';

export default function ToursPage() {
  useEffect(() => {
    document.title = 'Tour Dates | King Koss';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.content = 'King Koss tour dates and live performances. See where the Afro Beats artist is performing.';
    }
  }, []);

  const formatDate = (dateString) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const upcomingTours = tours.filter((tour) => new Date(tour.date) > new Date());
  const pastTours = tours.filter((tour) => new Date(tour.date) <= new Date());

  return (
    <div className="tour-page">
      <section className="tour-hero">
        <div className="container">
          <h1>Tour Dates</h1>
          <p>Experience King Koss Live</p>
        </div>
      </section>

      <section className="section tour-content">
        <div className="container">
          <div className="tour-intro">
            <h2>Upcoming Shows</h2>
            <p>
              Join King Koss on tour across the United States. Limited tickets
              available for each show.
            </p>
          </div>

          {upcomingTours.length > 0 ? (
            <div className="tours-list">
              {upcomingTours.map((tour) => (
                <article key={tour.id} className="tour-card">
                  <div className="tour-card-date">
                    <div className="date-box">
                      <span className="date-month">
                        {new Date(tour.date).toLocaleDateString(undefined, {
                          month: 'short',
                        })}
                      </span>
                      <span className="date-day">
                        {new Date(tour.date).getDate()}
                      </span>
                    </div>
                  </div>

                  <div className="tour-card-info">
                    <h3>{tour.city}</h3>
                    <div className="tour-details">
                      <div className="detail">
                        <MapPin size={18} />
                        <span>{tour.venue}</span>
                      </div>
                      <div className="detail">
                        <Clock size={18} />
                        <span>{tour.time}</span>
                      </div>
                    </div>
                    <p className="tour-description">{tour.description}</p>
                  </div>

                  <div className="tour-card-action">
                    {tour.sold ? (
                      <span className="sold-out">SOLD OUT</span>
                    ) : (
                      <a
                        href={tour.ticketsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Get Tickets
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-tours">
              <p>No upcoming tour dates at this time. Check back soon!</p>
              <p>Follow on social media for announcements.</p>
            </div>
          )}
        </div>
      </section>

      {pastTours.length > 0 && (
        <section className="section past-tours">
          <div className="container">
            <h2 className="section-title">Past Shows</h2>
            <div className="tours-list past">
              {pastTours.map((tour) => (
                <article key={tour.id} className="tour-card past">
                  <div className="tour-card-date">
                    <div className="date-box">
                      <span className="date-month">
                        {new Date(tour.date).toLocaleDateString(undefined, {
                          month: 'short',
                        })}
                      </span>
                      <span className="date-day">
                        {new Date(tour.date).getDate()}
                      </span>
                    </div>
                  </div>

                  <div className="tour-card-info">
                    <h3>{tour.city}</h3>
                    <div className="tour-details">
                      <div className="detail">
                        <MapPin size={18} />
                        <span>{tour.venue}</span>
                      </div>
                    </div>
                  </div>

                  <div className="tour-card-action">
                    <span className="past-badge">Completed</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section tour-cta">
        <div className="container cta-container">
          <h2>Stay Updated</h2>
          <p>Subscribe to get notified about new tour dates and special announcements</p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
