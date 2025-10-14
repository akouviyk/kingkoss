import { useEffect } from 'react';

export default function SchemaMarkup() {
  useEffect(() => {
    // Schema.org structured data for SEO
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'MusicGroup',
      name: 'King Koss',
      description: 'Afro Beats artist from Togo/Ghana, based in Phoenix, AZ',
      url: 'https://kingkoss.music',
      genre: 'Afro Beats',
      foundingLocation: {
        '@type': 'Place',
        name: 'Phoenix, Arizona',
      },
      mainEntityOfPage: 'https://kingkoss.music',
      sameAs: [
        'https://instagram.com/Kingkoss_music',
        'https://open.spotify.com/artist/kingkoss',
        'https://music.apple.com/artist/kingkoss',
        'https://www.youtube.com/@kingkoss',
      ],
      image: 'https://kingkoss.music/og-image.jpg',
      homeLocation: {
        '@type': 'City',
        name: 'Phoenix',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US',
          addressRegion: 'AZ',
        },
      },
      origin: {
        '@type': 'Country',
        name: 'Togo / Ghana',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Booking',
        email: 'kingkossmusic@gmail.com',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // This component only adds schema data, no visual output
}
