import { useEffect } from 'react';
import { artistData } from '../data/content';
import './BioPage.css';
import KINGKOSSONTHETHRONE from '../../public/koss/KINGKOSSONTHETHRONE.jpg';

export default function BioPage() {
  useEffect(() => {
    document.title = 'Bio | King Koss';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.content =
        'Learn about King Koss - Afro Beats artist from Togo/Ghana, now based in Phoenix, AZ.';
    }
  }, []);

  return (
    <div className="bio-page">
      <section className="bio-hero">
        <div className="container bio-hero-content">
          <h1>The Story</h1>
          <p className="bio-hero-subtitle">From Togo/Ghana to the World</p>
        </div>
      </section>

      <section className="section bio-content">
        <div className="container">
          <div className="bio-grid">
            <div className="bio-image">
              <img
                src={KINGKOSSONTHETHRONE}
                alt="King Koss Artist Portrait"
                loading="lazy"
              />
            </div>

            <div className="bio-text">
              <h2>Artist Journey</h2>
              <p>{artistData.bioLong}</p>

              <div className="bio-stats">
                <div className="bio-stat">
                  <h3>Origin</h3>
                  <p>{artistData.origin}</p>
                </div>
                <div className="bio-stat">
                  <h3>Based</h3>
                  <p>{artistData.location}</p>
                </div>
                <div className="bio-stat">
                  <h3>Genre</h3>
                  <p>Afro Beats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bio-highlights">
        <div className="container">
          <h2 className="section-title">
            Highlights
            <div className="section-title::after" />
          </h2>

          <div className="highlights-grid">
            <article className="highlight-card">
              <div className="highlight-icon">🎵</div>
              <h3>Authentic Sound</h3>
              <p>
                Blending West African rhythms with modern production to create a
                unique Afro Beats experience.
              </p>
            </article>

            <article className="highlight-card">
              <div className="highlight-icon">🌍</div>
              <h3>Cultural Bridge</h3>
              <p>
                Representing the new generation of artists bringing African
                music to the global stage.
              </p>
            </article>

            <article className="highlight-card">
              <div className="highlight-icon">🎤</div>
              <h3>Live Energy</h3>
              <p>
                Dynamic performances that transport audiences to the vibrant
                heart of African music.
              </p>
            </article>

            <article className="highlight-card">
              <div className="highlight-icon">✨</div>
              <h3>Rising Star</h3>
              <p>
                Building momentum with dedicated fanbase and growing presence on
                streaming platforms.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section bio-cta">
        <div className="container">
          <h2>Connect with King Koss</h2>
          <p>
            Follow on social media for the latest updates, releases, and
            announcements
          </p>
          <div className="bio-cta-links">
            <a
              href={artistData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Instagram
            </a>
            <a
              href={artistData.socials.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              All Links
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
