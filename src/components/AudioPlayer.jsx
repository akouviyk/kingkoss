import { useState, useRef } from 'react';
import { Play, Pause, Volume2, X } from 'lucide-react';
import './AudioPlayer.css';

export default function AudioPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const handlePlayTrack = (trackUrl) => {
    if (audioRef.current) {
      audioRef.current.src = trackUrl;
      audioRef.current.play();
      setIsPlaying(true);
      setIsOpen(true);
      setCurrentTrack(trackUrl);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((current / duration) * 100 || 0);
    }
  };

  const handleProgressClick = (e) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      audioRef.current.currentTime = percentage * audioRef.current.duration;
    }
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      <div className={`audio-player-mini ${isOpen ? 'open' : ''}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="player-toggle"
          aria-label="Toggle player"
        >
          <Volume2 size={20} />
        </button>

        {isOpen && (
          <div className="player-content">
            <div className="player-header">
              <h3>Now Playing</h3>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close player"
                className="close-btn"
              >
                <X size={18} />
              </button>
            </div>

            <div className="player-controls">
              <button
                onClick={togglePlayPause}
                className="play-btn"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <div className="progress-container">
                <span className="time">
                  {formatTime(audioRef.current?.currentTime || 0)}
                </span>
                <div
                  className="progress-bar"
                  onClick={handleProgressClick}
                  role="slider"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={Math.floor(progress)}
                >
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="time">
                  {formatTime(audioRef.current?.duration || 0)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="player-api">
        <div className="player-export">
          <script>{`window.playAudio = ${handlePlayTrack.toString()}`}</script>
        </div>
      </div>
    </>
  );
}

// Export function to allow other components to trigger playback
export const useAudioPlayer = () => {
  const audioPlayerRef = useRef(null);
  return (trackUrl) => {
    if (window.playAudio) {
      window.playAudio(trackUrl);
    }
  };
};
