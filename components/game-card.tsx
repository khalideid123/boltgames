import Link from "next/link";
import type { Game } from "@/lib/games";
import { GameArt } from "./game-art";
import { Arrow } from "./icons";

export function GameCard({ game }: { game: Game }) {
  return (
    <article className={`game-card card-${game.theme}`}>
      <Link href={`/games/${game.slug}`} className="game-visual-link">
        <span className="sr-only">Explore {game.name}. </span>
        <GameArt game={game} priority />
        <span className={`status-badge ${game.playUrl ? "status-live" : ""}`}>
          {game.playUrl && <span className="status-dot" />} {game.status}
        </span>
        <span className="art-link-icon">
          <Arrow diagonal />
        </span>
      </Link>
      <div className="game-card-info">
        <div className="game-meta">
          <span>{game.genre}</span>
          <span>{game.platform}</span>
        </div>
        <h3>
          <Link href={`/games/${game.slug}`}>{game.name}</Link>
        </h3>
        <p>{game.summary}</p>
        {game.playUrl ? (
          <a
            className="text-link"
            href={game.playUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Play ${game.name} (opens in a new tab)`}
          >
            Play now <Arrow diagonal />
          </a>
        ) : (
          <Link className="text-link" href={`/games/${game.slug}`}>
            Explore game <Arrow />
          </Link>
        )}
      </div>
    </article>
  );
}
