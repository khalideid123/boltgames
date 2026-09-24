import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { games, getGame } from "@/lib/games";
import { siteUrl } from "@/lib/site";
import { GameArt } from "@/components/game-art";
import { Gallery } from "@/components/gallery";
import { Arrow } from "@/components/icons";

export function generateStaticParams() {
  return games.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return {};
  return {
    title: game.name,
    description: `${game.tagline} ${game.summary} ${game.status} from Bolt Games.`,
    ...(siteUrl ? { alternates: { canonical: `/games/${game.slug}` } } : {}),
    openGraph: {
      title: `${game.name} | Bolt Games`,
      description: game.summary,
      type: "website",
      siteName: "Bolt Games",
    },
    twitter: { card: "summary", title: game.name, description: game.summary },
  };
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();
  const other = games.find((item) => item.slug !== game.slug);
  return (
    <main id="main" className={`game-page page-${game.theme}`}>
      <section className="game-intro wrap">
        <Link className="back-link" href="/#games">
          ← All games
        </Link>
        <div className="game-heading">
          <div>
            <div className="eyebrow">
              BOLT GAMES / {game.genre.toUpperCase()}
            </div>
            <h1>{game.name}</h1>
            <p className="game-tagline">{game.tagline}</p>
          </div>
          <div className="game-intro-actions">
            <span
              className={`detail-status ${game.playUrl ? "is-playable" : ""}`}
            >
              {game.playUrl && <span className="status-dot" />}
              {game.status}
            </span>
            {game.playUrl ? (
              <a
                className="button button-primary"
                href={game.playUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Play FriendGuess <Arrow diagonal />
              </a>
            ) : (
              <Link className="button button-outline" href="#concept">
                Explore the concept <Arrow />
              </Link>
            )}
          </div>
        </div>
        <div className="detail-art">
          <GameArt game={game} priority />
        </div>
        {game.theme === "room" && (
          <p className="media-disclosure">
            AI-generated visual concept placeholder. This is not a gameplay
            screenshot or a representation of final game visuals.
          </p>
        )}
      </section>
      <section
        id="concept"
        className="game-overview wrap section-space"
        data-reveal
      >
        <div className="overview-copy">
          <span className="eyebrow">
            {game.playUrl ? "THE OVERVIEW" : "THE CONCEPT"}
          </span>
          <h2>{game.overviewHeading}</h2>
          <p>{game.overview}</p>
        </div>
        <aside className="game-facts" aria-label="Game facts">
          <div className="eyebrow">AT A GLANCE</div>
          <dl>
            {[
              ["Genre", game.genre],
              ["Platform", game.platform],
              ["Players", game.players],
              ["Status", game.status],
              ["Release", game.release],
              ["Developer", "Bolt Games · Solo independent studio"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>
      {game.theme === "room" && (
        <section
          className="concept-loop wrap"
          aria-label="Core gameplay concept"
          data-reveal
        >
          {[
            ["01", "Observe", "A short time to take in every detail."],
            ["02", "Lights out", "The familiar slips away in the dark."],
            ["03", "Identify", "Find the change. Trust your memory."],
          ].map(([num, title, desc]) => (
            <div key={num}>
              <span className="mono">{num}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </section>
      )}
      <section className="features-section wrap section-space" data-reveal>
        <div className="section-eyebrow">
          <h2>
            {game.playUrl ? "WHAT’S IN THE GAME" : "THE PLANNED EXPERIENCE"}
          </h2>
          <span>
            {game.playUrl
              ? "PICK UP. PLAY. COME BACK."
              : "CONCEPT FEATURES · SUBJECT TO CHANGE"}
          </span>
        </div>
        <div className="feature-grid">
          {game.features.map((feature, i) => (
            <article key={feature.title}>
              <span className="feature-number">0{i + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="media-section wrap" data-reveal>
        <div className="section-eyebrow">
          <h2>
            {game.gallery.length
              ? "A LOOK INSIDE"
              : "FROM THE DEVELOPMENT ROOM"}
          </h2>
          <span>
            {game.gallery.length
              ? "ACTUAL BROWSER BUILD · SELECT TO ENLARGE"
              : "MORE TO COME"}
          </span>
        </div>
        {game.gallery.length ? (
          <Gallery images={game.gallery} />
        ) : (
          <div className="media-pending">
            <span className="media-pending-number">WORK IN PROGRESS</span>
            <h3>{game.mediaHeading ?? "A closer look is coming."}</h3>
            <p>
              Gameplay screenshots, footage, and further concept art will be
              shared here as development progresses.
            </p>
            <span className="pending-line">
              Gameplay footage & screenshots · Coming later
            </span>
          </div>
        )}
      </section>
      <section
        className="game-publisher-section wrap section-space"
        data-reveal
      >
        <div className="section-eyebrow">
          <h2>FOR PUBLISHERS & PARTNERS</h2>
          <span>PROJECT NOTES</span>
        </div>
        <div className="publisher-notes">
          {game.publisherNotes.map((note) => (
            <article key={note.title}>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </article>
          ))}
        </div>
        <div className="game-publisher-cta">
          <p>Interested in {game.name}?</p>
          <Link className="text-link" href="/#contact">
            Let’s discuss the project <Arrow diagonal />
          </Link>
        </div>
      </section>
      {other && (
        <section className="next-game wrap" data-reveal>
          <span className="eyebrow">MORE FROM BOLT GAMES</span>
          <Link href={`/games/${other.slug}`}>
            <span>{other.name}</span>
            <Arrow diagonal />
          </Link>
        </section>
      )}
    </main>
  );
}
