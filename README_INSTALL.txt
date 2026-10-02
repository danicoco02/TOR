TRYOUT READY V4 — INSTALLABLE PWA
===================================

WHAT THIS VERSION ADDS
- Installable app manifest
- Home-screen app icons (192 and 512)
- Standalone/full-screen app launch
- Service worker and offline caching
- Existing V3 workout saving/tracking retained
- YouTube tutorial videos remain online-only

IMPORTANT
A PWA must be served over HTTPS (or localhost). Opening index.html directly from a ZIP/file folder will NOT enable installation or the service worker.

FREE HOSTING OPTION: GITHUB PAGES
1. Create a free GitHub account if needed.
2. Create a new PUBLIC repository, for example: tryout-ready.
3. Upload ALL files from this folder to the repository root.
4. In the repository, open Settings > Pages.
5. Under Build and deployment, choose Deploy from a branch.
6. Select branch: main and folder: /(root), then Save.
7. GitHub will provide an HTTPS site address after deployment.
8. Open that site on the phone.

ANDROID / CHROME
1. Open the HTTPS app address in Chrome.
2. Tap the browser menu.
3. Choose Install app or Add to Home screen.
4. Confirm Install.

IPHONE / SAFARI
1. Open the HTTPS app address in Safari.
2. Tap Share.
3. Choose Add to Home Screen.
4. Tap Add.

OFFLINE BEHAVIOR
Open the app online at least once. The core HTML/CSS/JavaScript and icons are then cached.
Embedded YouTube videos require internet access.

UPDATES
When you upload a changed version, users may need to refresh/reopen the app. If you make major changes to cached files, change the CACHE value near the top of service-worker.js (for example tryout-ready-v4-2).

DATA
Player/workout data is stored locally in the browser/app storage on that device. Continue using the app's Export Backup feature before clearing browser data or changing devices.
