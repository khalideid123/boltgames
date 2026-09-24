# Delivery verification

Verified against the local **production build**, September 24, 2026.

## Checks completed

- `npm run build`, `npm run lint`, and `npm run typecheck` pass.
- Homepage, FriendGuess, and The Room Remembers checked at 1440px desktop, 768px tablet, 390px mobile, and 320px narrow mobile widths.
- All 12 page/viewport combinations have no horizontal overflow, broken visible images, or automated axe WCAG A/AA violations.
- Each page has a unique title, description, one H1, semantic landmarks, and descriptive image alternatives.
- All internal link URLs and hash targets resolve. Both external destinations (FriendGuess and the GitHub profile) return HTTP 200.
- Desktop navigation, mobile menu, Escape dismissal, game links, publisher/contact links, and return navigation exercised.
- All three gallery buttons open their images. Next, previous, wraparound, arrow keys, Close, and Escape tested.
- No browser page exceptions or failed local resource responses during the final interaction checks.
- Reduced-motion settings disable smooth scrolling and reveals. Scrolling reveals content as intended; content remains available without JavaScript.
- Tablet layout also passes a 200% text enlargement overflow check. Navigation can reflow rather than clip.
- Unknown game URLs return HTTP 404 with the branded recovery page.
- Room concept artwork is explicitly distinguished from gameplay; planned features and unannounced platforms are labeled honestly.

## Performance review

The homepage and game pages are prerendered; assets are local and optimized. All five original image files combined are approximately 309 KiB. Gallery enlargement only requests the full image after opening the viewer. No animation framework, 3D engine, external font request, analytics script, or runtime content fetch is included.

Local mobile Lighthouse returned **100 accessibility, 100 best practices, and 100 SEO**. It reported first contentful paint around 0.8 seconds, largest contentful paint around 2.6 seconds, zero total blocking time, and zero cumulative layout shift. The sandbox browser did not return a usable Speed Index/overall performance score, so no aggregate performance score is claimed. These are local lab observations, not measurements from Vercel or guarantees for visitors' devices. Run a deployed Lighthouse check after choosing the production domain.

## Scope and remaining setup

Testing used Chromium with responsive viewports, not physical iOS/Android devices or Safari. Automated accessibility checks supplement the keyboard/layout review; they are not a compliance certification.

The repository is ready for a standard Vercel Next.js import. No Vercel deployment is created as part of this delivery. Add a real contact email before publisher outreach and set the final origin for production SEO. Email/social placeholders are intentionally non-interactive; there is no unconnected submission form.

## Visual review

- [Desktop homepage](previews/desktop.webp)
- [Tablet homepage](previews/tablet.webp)
- [Mobile homepage](previews/mobile.webp)
- [FriendGuess page](previews/friendguess.webp)
- [The Room Remembers page](previews/the-room-remembers.webp)
