import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import SchemaMarkup from './components/SchemaMarkup';
import HomePage from './pages/HomePage';
import BioPage from './pages/BioPage';
import MusicPage from './pages/MusicPage';
import VideosPage from './pages/VideosPage';
import GalleryPage from './pages/GalleryPage';
import ToursPage from './pages/ToursPage';
import ContactPage from './pages/ContactPage';
import './App.css';

export default function App() {
  useEffect(() => {
    // Update canonical URL on route change
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.href = window.location.origin + window.location.pathname;
    }
  }, []);

  return (
    <div className="app">
      <SchemaMarkup />
      <Header />
      <main role="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bio" element={<BioPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/tour" element={<ToursPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <AudioPlayer />
      <Footer />
    </div>
  );
}
