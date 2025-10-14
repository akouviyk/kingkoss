import { useEffect } from 'react';
import MusicCard from '../components/MusicCard';
import { musicReleases } from '../data/content';
import './MusicPage.css';

export default function MusicPage() {
  useEffect(() => {
    document.title = 'Music | King Koss';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.content =
        'Stream and download King Koss Afro Beats music on Spotify, Apple Music, and more.';
    }
  }, []);

  const handlePlayAudio = (trackUrl) => {
    const event = new CustomEvent('playTrack', { detail: { trackUrl } });
    window.dispatchEvent(event);
  };

  return (
    <div className="music-page">
      <section className="music-hero">
        <div className="container">
          <h1>Music</h1>
          <p>Afro Beats that Move Your Soul</p>
        </div>
      </section>

      <section className="section music-content">
        <div className="container">
          <div className="music-intro">
            <h2>Latest Releases</h2>
            <p>
              Explore King Koss's discography. Stream on your favorite platform
              and discover the sound of West Africa meeting modern production.
            </p>
          </div>

          <div className="grid grid-3">
            {musicReleases.map((track) => (
              <MusicCard
                key={track.id}
                track={track}
                onPlay={handlePlayAudio}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section streaming-links-section">
        <div className="container">
          <h2 className="section-title">Stream Everywhere</h2>
          <div className="streaming-platforms">
            <a
              href="https://open.spotify.com/artist/kingkoss"
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card spotify"
            >
              <div className="platform-icon">🎵</div>
              <h3>Spotify</h3>
              <p>Listen now on Spotify</p>
            </a>
            <a
              href="https://music.apple.com/artist/kingkoss"
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card apple"
            >
              <div className="platform-icon">🎧</div>
              <h3>Apple Music</h3>
              <p>Stream on Apple Music</p>
            </a>
            <a
              href="https://www.youtube.com/@kingkoss_music"
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card youtube"
            >
              <div className="platform-icon">▶️</div>
              <h3>YouTube</h3>
              <p>Watch on YouTube</p>
            </a>
            <a
              href="https://linktr.ee/kingkoss"
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card linktree"
            >
              <div className="platform-icon">🔗</div>
              <h3>All Platforms</h3>
              <p>Complete LinkTree</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
