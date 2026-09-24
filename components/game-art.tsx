import Image from "next/image";
import type { Game } from "@/lib/games";

export function GameArt({
  game,
  priority = false,
}: {
  game: Game;
  priority?: boolean;
}) {
  return (
    <div className={`game-art art-${game.theme}`}>
      {game.theme === "custom" ? (
        <>
          {game.cover && (
            <Image
              className="room-art"
              src={game.cover.src}
              alt={game.cover.alt}
              fill
              sizes="(max-width: 700px) 100vw, 60vw"
              priority={priority}
            />
          )}
          <div className="room-shade" />
          <div className="custom-wordmark" aria-hidden="true">
            {game.name}
          </div>
          <span className="art-caption">
            {game.cover?.label ?? "ARTWORK COMING SOON"}
          </span>
        </>
      ) : game.theme === "friendguess" ? (
        <>
          <div className="art-orbit" aria-hidden="true" />
          <div className="friend-wordmark" aria-hidden="true">
            <span>Friend</span>Guess
            <span className="art-subtitle">GOOD CLUES. GREAT COMPANY.</span>
          </div>
          <Image
            className="milo-art"
            src="/images/milo.webp"
            width={480}
            height={472}
            alt="Milo, the orange fox host of FriendGuess"
            priority={priority}
            sizes="(max-width: 700px) 60vw, 36vw"
          />
          <span className="art-caption">ORIGINAL GAME ARTWORK</span>
        </>
      ) : (
        <>
          <Image
            className="room-art"
            src="/images/room-concept.webp"
            alt="Concept illustration of a dimly lit room with a chair, painting and open doorway"
            fill
            sizes="(max-width: 700px) 100vw, 60vw"
            priority={priority}
          />
          <div className="room-shade" />
          <div className="room-wordmark" aria-hidden="true">
            <span>THE ROOM</span>
            <span>REMEMBERS</span>
          </div>
          <span className="art-caption">VISUAL CONCEPT · NOT GAMEPLAY</span>
        </>
      )}
    </div>
  );
}
