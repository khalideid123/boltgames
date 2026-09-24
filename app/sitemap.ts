import type { MetadataRoute } from "next";
import { games } from "@/lib/games";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return [
    { url: siteUrl, priority: 1 },
    ...games.map((game) => ({
      url: `${siteUrl}/games/${game.slug}`,
      priority: 0.8,
    })),
  ];
}
