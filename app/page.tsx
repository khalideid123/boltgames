import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/lib/games";
import { siteUrl } from "@/lib/site";
import { GameCard } from "@/components/game-card";
import { Contact } from "@/components/contact";
import { Arrow, Bolt } from "@/components/icons";

export const metadata: Metadata = {
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
};
const opportunities = [
  "Publishing partnerships",
  "Licensing & distribution",
  "Funding & investment",
  "Platform partnerships",
  "Game & IP acquisitions",
];

export default function Home() {
  return (
    <main id="main">
      <section className="hero wrap">
        <div className="hero-eyebrow">
          <span className="eyebrow">INDEPENDENT SPIRIT. ORIGINAL PLAY.</span>
          <span className="hero-index">BOLT GAMES / STUDIO</span>
        </div>
        <div className="hero-layout">
          <h1>
            Small studio.
            <br />{" "}
            <span className="hero-second">
              Lasting <span className="lime">impressions.</span>
            </span>
          </h1>
          <div className="hero-aside">
            <p>
              Original games, built with intent.
              <br />
              An independent solo studio exploring the playful, the unexpected,
              and the unforgettable.
            </p>
            <div className="hero-actions">
              <Link href="#games" className="button button-primary">
                View games <Arrow />
              </Link>
              <Link href="#contact" className="button button-text">
                Contact <Arrow diagonal />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="games" className="games-section wrap">
        <div className="section-eyebrow">
          <h2>01 / THE GAMES</h2>
          <span>DIFFERENT WORLDS. ONE INDEPENDENT VISION.</span>
        </div>
        <div className="games-grid">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
        <div className="games-endnote">
          <span>From quick-fire guesses to rooms you can’t quite trust.</span>
          <span>ORIGINAL GAMES BY BOLT</span>
        </div>
      </section>
      <section
        id="about"
        className="about-section wrap section-space"
        data-reveal
      >
        <div className="section-eyebrow">
          <span>02 / THE STUDIO</span>
          <Bolt />
        </div>
        <div className="about-layout">
          <h2>
            One developer.
            <br />A world of ideas.
          </h2>
          <div className="about-copy">
            <p className="large-copy">
              Bolt Games is an independent solo game studio built around a
              simple belief: a strong idea deserves a game that does it justice.
            </p>
            <p>
              From the first concept to the details that make a game feel right,
              the focus is on original experiences, thoughtful polish, and a
              reason to come back.
            </p>
            <div className="studio-values">
              <span>Original concepts</span>
              <span>Intentional design</span>
              <span>Replayable experiences</span>
            </div>
          </div>
        </div>
      </section>
      <section id="publishers" className="partnership-section" data-reveal>
        <div className="wrap section-space">
          <div className="section-eyebrow">
            <span>03 / PUBLISHING & PARTNERSHIPS</span>
            <span>LET’S EXPLORE THE POSSIBILITIES</span>
          </div>
          <div className="partnership-layout">
            <div>
              <h2>
                Independent vision.
                <br />
                <span className="muted">Shared ambition.</span>
              </h2>
              <p>
                Bolt Games welcomes conversations with publishers, platforms,
                and partners who see potential in original games.
              </p>
              <p>
                Explore the projects, try the playable build, and let’s discuss
                the right opportunity.
              </p>
            </div>
            <div className="opportunities">
              {opportunities.map((item, i) => (
                <div className="opportunity" key={item}>
                  <span className="mono">0{i + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
