import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import MusicCard from '../components/MusicCard';
import VideoCard from '../components/VideoCard';
import { artistData, musicReleases, videos } from '../data/content';
import './HomePage.css';
import kossImage from '../../public/koss/koss.png';
import KINGKOSSORIGIN from '../../public/koss/KINGKOSSORIGIN.jpg';

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'King Koss | Afro Beats Artist';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.content = `${artistData.tagline}. Listen to the latest Afro Beats music from King Koss.`;
    }
  }, []);

  const handlePlayAudio = (trackUrl) => {
    // Trigger audio player
    const event = new CustomEvent('playTrack', { detail: { trackUrl } });
    window.dispatchEvent(event);
  };

  const handlePlayVideo = (youtubeId) => {
    // Open video player modal or navigate
    window.open(`https://www.youtube.com/embed/${youtubeId}`, '_blank');
  };

  return (
    <>
      <Hero
        title={artistData.name}
        subtitle={artistData.tagline}
        backgroundImage={kossImage}
        primaryButton={{
          text: 'Listen Now',
          onClick: () => navigate('/music'),
        }}
        secondaryButton={{
          text: 'Watch Videos',
          onClick: () => navigate('/videos'),
        }}
      />

      {/* Latest Releases */}
      <section className="section latest-releases">
        <div className="container">
          <div className="section-title">
            <h2>Latest Releases</h2>
            <p className="section-subtitle">
              Fresh sounds from King Koss - newest music straight to your ears
            </p>
          </div>

          <div className="grid grid-3">
            {musicReleases.slice(0, 3).map((track) => (
              <MusicCard
                key={track.id}
                track={track}
                onPlay={handlePlayAudio}
              />
            ))}
          </div>

          <div className="see-all-btn">
            <button
              className="btn btn-secondary"
              onClick={() => navigate('/music')}
            >
              View All Music
            </button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-image">
              <img src={KINGKOSSORIGIN} alt="King Koss" loading="lazy" />
              <div className="image-accent" />
            </div>

            <div className="about-preview-content">
              <h2>From Togo/Ghana to Phoenix</h2>
              <p>{artistData.bio}</p>
              <p>
                With authentic rhythms and contemporary production, King Koss is
                bridging continents through the universal language of music.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => navigate('/bio')}
              >
                Read Full Bio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="section featured-videos">
        <div className="container">
          <div className="section-title">
            <h2>Featured Videos</h2>
            <p className="section-subtitle">
              Watch exclusive performances and behind-the-scenes content
            </p>
          </div>

          <div className="grid grid-3">
            {videos.slice(0, 3).map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={handlePlayVideo}
              />
            ))}
          </div>

          <div className="see-all-btn">
            <button
              className="btn btn-secondary"
              onClick={() => navigate('/videos')}
            >
              Watch More Videos
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container cta-container">
          <h2>Follow the Journey</h2>
          <p>
            Connect on social media and stay updated on new releases and
            performances
          </p>

          <div className="cta-buttons">
            <a
              href={artistData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Follow Instagram
            </a>
            <a
              href={artistData.socials.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              All Links
            </a>
            <button
              className="btn btn-secondary"
              onClick={() => navigate('/tour')}
            >
              See Tour Dates
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
