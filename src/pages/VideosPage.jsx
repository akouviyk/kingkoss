import { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';
import { videos } from '../data/content';
import { X } from 'lucide-react';
import './VideosPage.css';

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    document.title = 'Videos | King Koss';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.content = 'Watch King Koss music videos, live performances, and behind-the-scenes content.';
    }
  }, []);

  const handlePlayVideo = (youtubeId) => {
    setSelectedVideo(youtubeId);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="videos-page">
      <section className="videos-hero">
        <div className="container">
          <h1>Videos</h1>
          <p>Music Videos, Live Performances & More</p>
        </div>
      </section>

      <section className="section videos-content">
        <div className="container">
          <div className="videos-intro">
            <h2>Watch & Experience</h2>
            <p>
              From official music videos to live performances and behind-the-scenes
              content. Dive into the visual world of King Koss.
            </p>
          </div>

          <div className="grid grid-3">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={handlePlayVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <div className="video-modal" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close">
              <X size={28} />
            </button>
            <div className="video-container">
              <iframe
                width="100%"
                height="600"
                src={`https://www.youtube.com/embed/${selectedVideo}`}
                title="King Koss Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
