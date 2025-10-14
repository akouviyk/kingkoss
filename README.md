# 🎵 King Koss Official Website

Modern, artsy, and SEO-optimized official website for King Koss - Afro Beats artist from Togo/Ghana, based in Phoenix, AZ.

## 🚀 Features

- **Modern Design**: Organic, fluid, warm color palette (terracotta, gold, deep green, charcoal)
- **Responsive**: Mobile-first design that works across all devices
- **SEO Optimized**: 
  - Semantic HTML5 structure
  - Meta tags and Open Graph
  - Structured data (schema.org)
  - Sitemap and robots.txt
  - Image optimization with lazy loading
- **Performance**: Optimized build, minified assets, fast loading
- **Interactive Components**:
  - Persistent mini audio player
  - Video modal player
  - Image gallery with modal
  - Contact form
  - Tour dates management

## 📁 Project Structure

```
king-koss-website/
├── public/
│   ├── sitemap.xml          # SEO sitemap
│   ├── robots.txt           # Search engine crawler rules
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Footer with links
│   │   ├── Hero.jsx         # Hero section component
│   │   ├── AudioPlayer.jsx  # Persistent audio player
│   │   ├── MusicCard.jsx    # Music track card
│   │   └── VideoCard.jsx    # Video card component
│   ├── pages/
│   │   ├── HomePage.jsx     # Landing page
│   │   ├── BioPage.jsx      # Artist bio
│   │   ├── MusicPage.jsx    # Music releases
│   │   ├── VideosPage.jsx   # Video gallery
│   │   ├── GalleryPage.jsx  # Photo gallery
│   │   ├── ToursPage.jsx    # Tour dates
│   │   └── ContactPage.jsx  # Contact form
│   ├── styles/
│   │   └── index.css        # Global styles and variables
│   ├── data/
│   │   └── content.js       # Artist data and content
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── App.css
├── index.html               # HTML template
├── package.json
├── vite.config.js           # Vite configuration
└── README.md
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables
- **Lucide React** - Icon library

## 🎨 Design System

### Color Palette
- **Primary**: Terracotta (#d4724a)
- **Accent**: Gold (#d4a574)
- **Secondary**: Deep Green (#2d5a4e)
- **Dark**: Charcoal (#2b2b2b)
- **Light**: Cream (#f5f1ed)

### Typography
- **Body**: System fonts (Segoe UI, Roboto, Helvetica)
- **Display**: Georgia, Garamond
- **Accent**: Brush Script MT

## 📦 Installation

1. **Clone or download** the project:
   ```bash
   cd /Users/akouvi/Desktop/king-koss-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

4. **Build for production**:
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder.

## 📄 Pages

- **Home** (`/`) - Landing page with hero, latest releases, featured videos
- **Bio** (`/bio`) - Artist story and journey
- **Music** (`/music`) - All music releases with streaming links
- **Videos** (`/videos`) - Music videos and performances
- **Gallery** (`/gallery`) - Photo gallery with modal viewer
- **Tour** (`/tour`) - Upcoming tour dates and ticketing
- **Contact** (`/contact`) - Contact form and social links

## 🎵 Content Management

Edit artist data in `src/data/content.js`:
- `artistData` - Artist bio, location, socials
- `musicReleases` - Track information
- `videos` - Music videos
- `gallery` - Photo gallery
- `tours` - Tour dates

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast ratios
- Focus indicators

## 🔍 SEO Features

- Meta tags on all pages
- Canonical URLs
- Structured data (Schema.org)
- Image alt text
- Mobile-friendly responsive design
- Fast page load times
- Sitemap.xml
- robots.txt

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload `dist/` folder to your hosting provider
3. Configure server to serve `index.html` for all routes

## 📱 Mobile Optimization

- Responsive grid system
- Touch-friendly buttons (48px minimum)
- Mobile menu with hamburger icon
- Optimized images
- Flexible typography

## 🎬 Audio/Video Integration

- YouTube video embeds with modal player
- Built-in audio player for music preview
- Streaming links to Spotify, Apple Music, etc.

## 🔗 Social Links

All social links configured in `src/data/content.js`:
- Instagram: @Kingkoss_music
- LinkTree: linktr.ee/kingkoss
- Spotify: spotify.com/artist/kingkoss
- Apple Music: music.apple.com/artist/kingkoss
- YouTube: youtube.com/@kingkoss

## 📧 Contact

**Email**: kingkossmusic@gmail.com

## 🎯 Future Enhancements

- [ ] Backend integration for contact form
- [ ] CMS for dynamic content updates
- [ ] Newsletter signup (Mailchimp integration)
- [ ] Blog/News section
- [ ] Merchandise store
- [ ] Spotify player embed
- [ ] Analytics integration (Google Analytics)
- [ ] Multi-language support

## 📝 License

All content is property of King Koss. Website code available for reference.

---

Built with ❤️ for King Koss | Afro Beats Artist 🎵
