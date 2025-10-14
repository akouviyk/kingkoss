import { Play, Music, ExternalLink } from 'lucide-react';
import './MusicCard.css';

export default function MusicCard({ track, onPlay }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <article className="music-card">
      <div className="music-card-image">
        <img
          src={track.cover}
          alt={`${track.title} album art`}
          loading="lazy"
        />
        <div className="music-card-overlay">
          <button
            className="play-overlay-btn"
            onClick={() => onPlay(track.audioUrl)}
            aria-label={`Play ${track.title}`}
          >
            <Play size={32} fill="currentColor" />
          </button>
        </div>
      </div>

      <div className="music-card-content">
        <div className="music-card-meta">
          <span className="music-date">{formatDate(track.date)}</span>
        </div>
        <h3 className="music-card-title">{track.title}</h3>
        <p className="music-card-artist">{track.artist}</p>
        <p className="music-card-description">{track.description}</p>

        <div className="music-card-streams">
          <a
            href={track.streams.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="stream-link spotify"
            aria-label="Listen on Spotify"
          >
            <Music size={16} />
            Spotify
          </a>
          <a
            href={track.streams.apple}
            target="_blank"
            rel="noopener noreferrer"
            className="stream-link apple"
            aria-label="Listen on Apple Music"
          >
            <Music size={16} />
            Apple
          </a>
          <a
            href={track.streams.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="stream-link youtube"
            aria-label="Watch on YouTube"
          >
            <ExternalLink size={16} />
            YouTube
          </a>
        </div>
      </div>
    </article>
  );
}
