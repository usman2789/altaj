# PWA Implementation for Al Taj Ristorante

This Next.js application has been successfully converted to a Progressive Web App (PWA) with full installation support and offline capabilities.

## ✨ Features Implemented

### 1. **Web App Manifest**
- Created `src/app/manifest.ts` with complete PWA configuration
- App name: "Al Taj Ristorante" (short: "Al Taj")
- Display mode: Standalone (appears like a native app)
- Theme color: #8B4513 (brown)
- Background color: #ffffff

### 2. **PWA Icons**
- Generated from `public/pwa-logo.png`
- Icon sizes created:
  - `icon-192x192.png` (192x192)
  - `icon-512x512.png` (512x512)
  - `apple-touch-icon.png` (180x180 for iOS)
- Automatic icon generation script: `scripts/generate-icons.js`

### 3. **Service Worker**
- Location: `public/sw.js`
- Features:
  - Caches important routes for offline access
  - Network-first strategy with cache fallback
  - Automatic cache versioning and cleanup
  - Push notification support
  - Notification click handling

### 4. **Install Prompt Component**
- Location: `src/components/PWAInstallPrompt.tsx`
- Features:
  - **Automatic pop-up** when user visits the site
  - Beautiful animated slide-up prompt
  - Platform-specific UI:
    - **Desktop/Android**: Direct install button
    - **iOS**: Instructions for manual installation
  - Smart behavior:
    - Doesn't show if already installed
    - Remembers if user dismissed (7-day cooldown)
    - Auto-registers service worker
  - Responsive design with Tailwind CSS

### 5. **Enhanced Metadata**
- Updated `src/app/layout.tsx` with:
  - PWA-specific meta tags
  - Apple Web App capabilities
  - Viewport configuration optimized for mobile
  - Theme color for browser chrome
  - Icon references for all platforms

### 6. **Security Headers**
- Configured in `next.config.ts`:
  - X-Content-Type-Options
  - X-Frame-Options
  - Referrer-Policy
  - Service Worker CSP
  - Cache control for SW updates

## 🚀 How to Use

### Development
```bash
npm run dev
```

Visit `http://localhost:3000` and you'll see the install prompt!

### Production Build
```bash
npm run build
npm start
```

### Testing PWA Features

#### Desktop (Chrome/Edge):
1. Visit the site
2. Install prompt will appear at bottom-right
3. Click "Install Now" button
4. App installs to your system

#### Mobile (Android):
1. Visit the site
2. Install prompt appears
3. Tap "Install Now"
4. App added to home screen

#### Mobile (iOS):
1. Visit the site in Safari
2. Follow the instructions shown
3. Tap Share button → "Add to Home Screen"

## 📱 Install Prompt Behavior

The install prompt (`PWAInstallPrompt` component):
- Appears automatically on first visit
- Shows at bottom of screen with animation
- Can be dismissed by clicking X
- Won't show again for 7 days if dismissed
- Automatically hides when app is installed
- Works on all platforms (adaptive UI)

## 🎨 Customization

### Change Theme Colors
Edit `src/app/manifest.ts`:
```typescript
theme_color: '#8B4513',  // Browser chrome color
background_color: '#ffffff',  // Splash screen background
```

### Modify Cached Routes
Edit `public/sw.js`:
```javascript
const urlsToCache = [
  '/',
  '/menu',
  '/contact',
  // Add more routes
];
```

### Regenerate Icons
If you update `public/pwa-logo.png`:
```bash
node scripts/generate-icons.js
```

## 📦 Files Added/Modified

### New Files:
- `src/app/manifest.ts` - PWA manifest configuration
- `src/components/PWAInstallPrompt.tsx` - Install prompt UI
- `public/sw.js` - Service worker
- `scripts/generate-icons.js` - Icon generator
- `public/icon-192x192.png` - Generated PWA icon
- `public/icon-512x512.png` - Generated PWA icon
- `public/apple-touch-icon.png` - Generated iOS icon

### Modified Files:
- `src/app/layout.tsx` - Added PWA metadata and install prompt
- `src/app/globals.css` - Added animation styles
- `next.config.ts` - Added security headers
- `package.json` - Added Sharp dependency

## 🔧 Technical Details

### Service Worker Registration
The service worker is automatically registered when the page loads via the `PWAInstallPrompt` component.

### Browser Support
- Chrome/Edge: Full support including install prompt
- Firefox: Full support
- Safari (Desktop): Basic PWA support
- Safari (iOS 16.4+): Full support with manual installation
- Samsung Internet: Full support

### Offline Support
The service worker caches:
- Main pages (home, menu, contact, etc.)
- Static assets
- API responses (with stale-while-revalidate strategy)

## 🎯 Production Checklist

Before deploying:
- [ ] Update manifest.ts with production URLs
- [ ] Test on multiple devices/browsers
- [ ] Verify HTTPS is enabled (required for PWA)
- [ ] Test offline functionality
- [ ] Check install prompt on different platforms
- [ ] Verify service worker updates properly

## 📖 Documentation Reference

This implementation follows the official Next.js PWA guide:
https://nextjs.org/docs/app/guides/progressive-web-apps

## 🐛 Troubleshooting

### Install prompt not showing?
- Check browser console for errors
- Ensure you're on HTTPS (or localhost)
- Clear browser cache and service workers
- Check if already installed (won't show again)

### Service worker not updating?
- The SW has `Cache-Control: no-cache` header
- Clear application data in DevTools
- Increment CACHE_NAME version in sw.js

### iOS installation not working?
- Safari 16.4+ required
- Must use Safari browser (not Chrome/Firefox on iOS)
- Follow the manual installation instructions shown

---

**Created for Al Taj Ristorante** 🍽️
Your authentic Pak-Indian and Italian cuisine experience, now as a Progressive Web App!
