// Replace null values when the studio's official contact details are ready.
// Empty entries render honest, non-clickable placeholders — never broken links.
export const site = {
  name: "Bolt Games",
  description:
    "An independent solo game studio creating original games. Explore FriendGuess, a playable browser party game, and The Room Remembers, a memory horror game in development.",
  email: process.env.NEXT_PUBLIC_STUDIO_EMAIL || null,
  businessEmail:
    process.env.NEXT_PUBLIC_BUSINESS_EMAIL ||
    process.env.NEXT_PUBLIC_STUDIO_EMAIL ||
    null,
  github: "https://github.com/khalideid123",
  socials: [] as { label: string; url: string }[],
};

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const siteUrl = configuredUrl
  ? new URL(configuredUrl).origin
  : productionHost
    ? `https://${productionHost}`
    : undefined;
