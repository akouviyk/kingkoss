import { Link } from 'react-router-dom';
import { Instagram, Mail, ExternalLink } from 'lucide-react';
import { artistData } from '../data/content';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>King Koss</h3>
            <p>{artistData.tagline}</p>
            <div className="social-links">
              <a
                href={artistData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <Instagram size={20} />
              </a>
              <a
                href={artistData.socials.linktree}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkTree"
                className="social-link"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href={`mailto:${artistData.email}`}
                aria-label="Email"
                className="social-link"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/bio">Bio</Link>
              </li>
              <li>
                <Link to="/music">Music</Link>
              </li>
              <li>
                <Link to="/videos">Videos</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/tour">Tour</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <p>
              Email:{' '}
              <a href={`mailto:${artistData.email}`}>{artistData.email}</a>
            </p>
            <p>
              Based in: <strong>{artistData.location}</strong>
            </p>
            <p>
              Origins: <strong>{artistData.origin}</strong>
            </p>
          </div>

          <div className="footer-section">
            <h4>Streaming</h4>
            <div className="streaming-links">
              <a
                href={artistData.socials.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotify
              </a>
              <a
                href={artistData.socials.apple}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Music
              </a>
              <a
                href={artistData.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} King Koss. All rights reserved. | Made with
            love and beats.
          </p>
        </div>
      </div>
    </footer>
  );
}
