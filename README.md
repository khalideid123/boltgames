# Bolt Games

Official website for Bolt Games, an independent **solo** game studio. Built with Next.js App Router, React, and TypeScript for Vercel.

## Run locally

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production verification:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

The homepage and both game pages are prerendered. Client JavaScript is limited to the mobile menu, screenshot viewer, and intersection-based reveals. Fonts and images are hosted locally; there is no third-party tracking, external font dependency, or database requirement.

## Deploy to Vercel

1. Import `khalideid123/boltgames` from GitHub.
2. Select **Next.js** and leave the root directory at the repository root.
3. Keep `npm run build` as the build command and use Vercel's default Next.js output configuration.
4. Add `NEXT_PUBLIC_SITE_URL` with your confirmed production origin (including `https://`) for canonical URLs and the sitemap. Without it, Vercel's `VERCEL_PROJECT_PRODUCTION_URL` is used when available. Local builds intentionally omit production canonical URLs instead of inventing a domain.
5. Deploy. No API keys or paid services are required by the site.

This delivery commits the deployment-ready project; it does not create a Vercel project or purchase a domain.

## Replace these placeholders

| Item                           | Where                                                        | Current behavior                                                 |
| ------------------------------ | ------------------------------------------------------------ | ---------------------------------------------------------------- |
| Studio email                   | `NEXT_PUBLIC_STUDIO_EMAIL`                                   | Non-clickable “Studio address coming soon”                       |
| Business email                 | `NEXT_PUBLIC_BUSINESS_EMAIL`                                 | Falls back to studio email if set; otherwise a clear placeholder |
| Social accounts                | `site.socials` in `lib/site.ts`                              | Non-clickable “Social channels coming soon”                      |
| Final production domain        | `NEXT_PUBLIC_SITE_URL`                                       | Uses verified Vercel project domain when available               |
| The Room Remembers artwork     | `public/images/room-concept.webp`, `components/game-art.tsx` | Clearly labeled AI-generated visual concept, not gameplay        |
| The Room Remembers screenshots | Its `gallery` in `lib/games.ts`                              | An honest work-in-progress media area                            |
| Game platforms, release dates  | `lib/games.ts`                                               | Only confirmed information; unannounced fields say so            |

Set an active business email **before using the site for outreach**. A contact form is intentionally absent until there is a real destination. Environment changes require a rebuild/redeployment because the pages are prerendered. See `.env.example`.

## Add another game

1. Add optimized WebP artwork and screenshots under `public/images/`.
2. Add a new `Game` object to the `games` array in `lib/games.ts` with a unique URL-safe `slug`.
3. Use `theme: 'custom'` and supply `cover: { src, alt, label }`. Custom games automatically get a title overlay. With no artwork, the component uses a neutral, explicitly labeled placeholder.
4. Fill in the summary, genre, status, platforms, overview heading, overview, features, publisher notes, and screenshot gallery. The optional `mediaHeading` customizes the empty media area. Add `playUrl` only when a public build exists.
5. Run the checks above and redeploy.

The homepage card, `/games/[slug]` route, metadata, and sitemap entry are created from the record. No new route file is necessary. The Room Remembers core-loop section is deliberately specific to that project; other games use the shared overview, features, media, and publisher sections.

## Content and assets

- FriendGuess features were checked against `khalideid123/friendguess` at commit `3166a5a`. Its original Milo artwork is reused with the owner's instruction.
- FriendGuess screenshots are real screenshots of that unchanged repository's local production build. No scores, player counts, or game interfaces were fabricated. Multiplayer imagery shows the entry screen, not a claim of active users.
- `room-concept.webp` is an AI-generated visual placeholder created for this website. It is not a game screenshot or a promise about final graphics. The page and card disclose this.
- Concept prompt: “Cinematic 3D concept of a dark domestic room with worn chair, lamp-lit side table, askew painting, and cool-lit open doorway; charcoal green-gray palette, aged textures, restrained ominous atmosphere. No people, violence, text, UI, or logos.” Generated using built-in imagegen, then optimized to WebP.
- The Bolt wordmark and simple lightning favicon are website branding, not a claim of trademark registration.
- Outfit is bundled locally under the SIL Open Font License; see `public/fonts/OFL.txt`.

## Key files

- `lib/games.ts` — game content and metadata
- `lib/site.ts` — official contacts and site identity
- `app/page.tsx` — homepage
- `app/games/[slug]/page.tsx` — reusable dedicated game page
- `components/` — shared navigation, artwork, cards, contact, footer, and gallery
- `app/globals.css` — responsive design tokens and styling, including reduced-motion support
- `docs/QA.md` — delivery checks and limitations
