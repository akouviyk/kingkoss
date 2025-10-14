import { useState } from 'react';
import { Play } from 'lucide-react';
import './VideoCard.css';

export default function VideoCard({ video, onPlay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="video-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="video-card-container">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="video-thumbnail"
          loading="lazy"
        />

        <div className="video-overlay">
          <button
            className="video-play-btn"
            onClick={() => onPlay(video.youtubeId)}
            aria-label={`Play ${video.title}`}
          >
            <Play size={40} fill="white" />
          </button>
          <div className="video-views">{video.views} views</div>
        </div>
      </div>

      <div className="video-card-content">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-date">
          {new Date(video.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
      </div>
    </article>
  );
}
