import { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  primaryButton,
  secondaryButton,
}) {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setAnimateText(true);
  }, []);

  return (
    <section className="hero" role="banner">
      <div
        className="hero-background"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        }}
      >
        <div className="hero-overlay" />
      </div>

      <div className="hero-gradient" />

      <div className="container hero-content">
        <div className={`hero-text ${animateText ? 'animate' : ''}`}>
          <h1 className="hero-title">{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}

          {(primaryButton || secondaryButton) && (
            <div className="hero-buttons">
              {primaryButton && (
                <button className="btn btn-primary" onClick={primaryButton.onClick}>
                  {primaryButton.text}
                </button>
              )}
              {secondaryButton && (
                <button
                  className="btn btn-secondary"
                  onClick={secondaryButton.onClick}
                >
                  {secondaryButton.text}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
