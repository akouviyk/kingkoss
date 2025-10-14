import { useEffect, useState } from 'react';
import { gallery } from '../data/content';
import { X } from 'lucide-react';
import './GalleryPage.css';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = 'Gallery | King Koss';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.content = 'Photo gallery of King Koss - Live performances, studio sessions, and behind-the-scenes moments.';
    }
  }, []);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const currentIndex = gallery.findIndex((img) => img.id === selectedImage.id);
    if (currentIndex > 0) {
      setSelectedImage(gallery[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    const currentIndex = gallery.findIndex((img) => img.id === selectedImage.id);
    if (currentIndex < gallery.length - 1) {
      setSelectedImage(gallery[currentIndex + 1]);
    }
  };

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>Visual Journey of King Koss</p>
        </div>
      </section>

      <section className="section gallery-content">
        <div className="container">
          <div className="gallery-intro">
            <h2>Moments & Memories</h2>
            <p>
              Explore the visual world of King Koss through live performances,
              studio sessions, and behind-the-scenes moments.
            </p>
          </div>

          <div className="gallery-masonry">
            {gallery.map((image) => (
              <article
                key={image.id}
                className="gallery-item"
                onClick={() => openImage(image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openImage(image);
                  }
                }}
              >
                <img
                  src={image.image}
                  alt={image.alt}
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <h3>{image.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <button
            className="modal-close"
            onClick={closeModal}
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            className="modal-nav modal-nav-prev"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            ←
          </button>

          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage.image} alt={selectedImage.alt} />
            <h3>{selectedImage.title}</h3>
          </div>

          <button
            className="modal-nav modal-nav-next"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
