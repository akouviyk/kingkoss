# King Koss Website - Setup & Deployment Guide

## Quick Start (Local Development)

### Prerequisites
- Node.js 16+ and npm installed
- Code editor (VS Code recommended)
- Git (optional but recommended)

### Setup Steps

1. **Navigate to project directory**:
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

4. **Open in browser**:
   - Automatically opens at `http://localhost:3000`
   - Hot reload enabled - changes appear instantly

## Project Organization

### Components (`src/components/`)
- **Header.jsx** - Navigation with mobile menu
- **Footer.jsx** - Footer with social links
- **Hero.jsx** - Large banner sections
- **AudioPlayer.jsx** - Mini floating audio player
- **MusicCard.jsx** - Reusable music track card
- **VideoCard.jsx** - Reusable video card

### Pages (`src/pages/`)
- **HomePage.jsx** - Landing page with hero, music, videos
- **BioPage.jsx** - Artist biography and story
- **MusicPage.jsx** - Full music discography
- **VideosPage.jsx** - Video gallery with modal player
- **GalleryPage.jsx** - Photo gallery with masonry layout
- **ToursPage.jsx** - Tour dates and ticketing
- **ContactPage.jsx** - Contact form and information

### Styles (`src/styles/`)
- **index.css** - Global styles, CSS variables, animations, responsive breakpoints

### Data (`src/data/`)
- **content.js** - All artist information and content in one place

## Customization Guide

### Update Artist Information

Edit `src/data/content.js`:

```javascript
export const artistData = {
  name: 'King Koss',
  email: 'kingkossmusic@gmail.com',
  bio: 'Your bio here...',
  socials: {
    instagram: 'https://instagram.com/Kingkoss_music',
    // Add more social links
  },
};
```

### Add New Music Releases

```javascript
export const musicReleases = [
  {
    id: 5,
    title: 'New Song Title',
    artist: 'King Koss',
    date: '2024-12-20',
    cover: 'image-url.jpg',
    description: 'Song description',
    streams: {
      spotify: 'https://open.spotify.com/track/...',
      apple: 'https://music.apple.com/track/...',
      youtube: 'https://youtube.com/watch?v=...',
    },
    audioUrl: 'https://audio-url.mp3',
  },
  // ... more tracks
];
```

### Customize Colors

Edit `src/styles/index.css` - CSS variables section:

```css
:root {
  --terracotta: #d4724a;
  --gold: #d4a574;
  --deep-green: #2d5a4e;
  --charcoal: #2b2b2b;
  --cream: #f5f1ed;
  /* Update colors here */
}
```

### Change Fonts

Update font families in CSS variables:

```css
--font-family-body: 'Your Font', sans-serif;
--font-family-display: 'Your Display Font', serif;
```

## Building for Production

### Build Process

```bash
npm run build
```

This creates optimized files in the `dist/` folder:
- Minified CSS and JavaScript
- Optimized images
- Source maps removed
- Production-ready build

### File Size Optimization

The build includes:
- CSS minification
- JavaScript minification with Terser
- Tree-shaking (unused code removal)
- Code splitting

## Deployment Options

### Option 1: Vercel (Recommended)

Easiest deployment with automatic updates from Git:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/king-koss-website.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to vercel.com
   - Click "New Project"
   - Select GitHub repository
   - Click "Deploy"

3. **Custom Domain**:
   - In Vercel dashboard: Settings > Domains
   - Add your domain
   - Update DNS settings with Vercel's nameservers

### Option 2: Netlify

1. **Connect GitHub**:
   - Go to netlify.com
   - Click "New site from Git"
   - Select your repository

2. **Configure**:
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy**:
   - Click "Deploy site"

### Option 3: Traditional Hosting (GoDaddy, Bluehost, etc.)

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder via FTP**:
   - Connect via FTP client (FileZilla, WinSCP)
   - Upload all files from `dist/` to public_html
   - Configure `.htaccess` for React routing:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## SEO Configuration

### Meta Tags

Edit `index.html`:
```html
<meta name="description" content="Your meta description" />
<meta property="og:title" content="Your title" />
<meta property="og:image" content="/og-image.jpg" />
```

### Google Search Console

1. Go to search.google.com/search-console
2. Add your domain
3. Verify ownership
4. Submit sitemap at `/sitemap.xml`

### Meta Tags Per Page

Each page automatically updates:
- Page title
- Meta description
- Canonical URL

## Performance Tips

### Image Optimization

1. **Use WebP format** where possible
2. **Lazy load images**:
   ```jsx
   <img src="image.jpg" loading="lazy" alt="description" />
   ```
3. **Responsive images**:
   ```html
   <img srcset="image-small.jpg 480w, image-large.jpg 800w" sizes="(max-width: 600px) 480px, 800px" />
   ```

### Caching

- Vercel/Netlify handles caching automatically
- Add cache headers in `vite.config.js`

### Code Splitting

Vite automatically code-splits by page for faster loading.

## Monitoring & Analytics

### Google Analytics

Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Vercel Analytics

- Built-in with Vercel deployment
- Automatic page performance tracking

## Troubleshooting

### Port 3000 Already in Use

```bash
# macOS/Linux
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading

- Check image URLs are correct
- Ensure images are in `public/` folder if using relative paths
- Use absolute URLs for external images

## Maintenance

### Regular Updates

1. **Weekly**: Update tour dates and releases
2. **Monthly**: Review analytics, update gallery
3. **Quarterly**: Check for npm package updates

```bash
npm outdated
npm update
```

### Backup

- Push to GitHub regularly
- Export data from `src/data/content.js`
- Keep original images backed up

## Next Steps

1. ✅ Replace placeholder images with real artist photos
2. ✅ Update all artist information
3. ✅ Add real streaming links
4. ✅ Set up contact form backend (Firebase, Formspree, Nodemailer)
5. ✅ Configure email notifications
6. ✅ Set up analytics
7. ✅ Test on all devices
8. ✅ Deploy to production
9. ✅ Set up custom domain
10. ✅ Monitor and maintain

## Support Resources

- **Vite Documentation**: https://vitejs.dev
- **React Documentation**: https://react.dev
- **React Router**: https://reactrouter.com
- **CSS MDN**: https://developer.mozilla.org/en-US/docs/Web/CSS

## Contact & Questions

For website questions or updates:
- Email: kingkossmusic@gmail.com
- Instagram: @Kingkoss_music

---

**Last Updated**: December 15, 2024
**Version**: 1.0.0
