export type Game = {
  slug: string;
  name: string;
  theme: "friendguess" | "room" | "custom";
  cover?: { src: string; alt: string; label: string };
  genre: string;
  status: string;
  platform: string;
  players: string;
  release: string;
  tagline: string;
  summary: string;
  overviewHeading: string;
  mediaHeading?: string;
  overview: string;
  features: { title: string; description: string }[];
  publisherNotes: { title: string; description: string }[];
  playUrl?: string;
  gallery: { src: string; alt: string; caption: string }[];
};

// Adding a record creates its card, game page, metadata and sitemap entry.
export const games: Game[] = [
  {
    slug: "friendguess",
    name: "FriendGuess",
    theme: "friendguess",
    genre: "Guessing / Party",
    status: "Playable now",
    platform: "Web browser",
    players: "Solo · 2–10 online",
    release: "Playable browser build",
    tagline: "One more clue. One more round.",
    summary:
      "Follow the clues, trust your instincts, and chase your next best score. Play solo or bring your friends.",
    overviewHeading: "A little curiosity.\nA lot of replayability.",
    overview:
      "FriendGuess turns a simple question into a reason to play again. Take on ten-round solo runs with Milo, the fox who holds the answers, or start a private room and race your friends to the right guess. Quick rounds, timed clues, and rewarding progression keep every run moving.",
    playUrl: "https://friendguess-delta.vercel.app/",
    features: [
      {
        title: "Your next best run",
        description:
          "Choose Easy, Medium, or Hard. Read the clues, beat the clock, and build a streak across ten rounds.",
      },
      {
        title: "Better with friends",
        description:
          "Create a room or join with a nickname and code. The Answerer rotates; the first correct guess wins the round.",
      },
      {
        title: "Progress that stays with you",
        description:
          "Earn XP, gain levels, unlock badges, and track personal records. Progress is saved in your browser.",
      },
      {
        title: "A fresh daily challenge",
        description:
          "Return for a date-seeded set of questions shared by all players. Compete against your own best daily results.",
      },
      {
        title: "Every clue is a choice",
        description:
          "Hints unlock as time passes. Take an early clue or hold out for a higher score.",
      },
      {
        title: "Built to play again",
        description:
          "Speed bonuses, streaks, scoring, recent runs, and replayable rounds make the next attempt count.",
      },
    ],
    publisherNotes: [
      {
        title: "Available to evaluate",
        description:
          "The browser build is playable now, with solo and real-time multiplayer modes. No installation or account is required.",
      },
      {
        title: "Format & audience",
        description:
          "A casual guessing and party format with short solo sessions, private multiplayer rooms, and repeat-play progression.",
      },
      {
        title: "Current scope",
        description:
          "Progress and records are device-local. The daily challenge has personal records, not a global leaderboard. No console or storefront release is announced.",
      },
    ],
    gallery: [
      {
        src: "/images/friendguess-hub.webp",
        alt: "FriendGuess home screen with Milo, solo play and multiplayer options",
        caption:
          "01 / The starting point — solo runs, friends, and daily challenges.",
      },
      {
        src: "/images/friendguess-solo.webp",
        alt: "FriendGuess solo gameplay showing a timed round, clues and answer field",
        caption: "02 / Solo gameplay — read the clues and make your guess.",
      },
      {
        src: "/images/friendguess-multiplayer.webp",
        alt: "FriendGuess multiplayer screen with create and join room options",
        caption:
          "03 / Play together — create a private room or join with a code.",
      },
    ],
  },
  {
    slug: "the-room-remembers",
    name: "The Room Remembers",
    theme: "room",
    genre: "Memory / Psychological horror",
    status: "In development",
    platform: "To be announced",
    players: "Single-player concept",
    release: "No release date announced",
    tagline: "Something changed. Did you notice?",
    summary:
      "Study the room. The lights go out. Something changes. Find it before the room gets the better of you.",
    overviewHeading: "Remember the room.\nQuestion everything.",
    mediaHeading: "The room is taking shape.",
    overview:
      "The Room Remembers is a 3D memory horror project built around one unsettling question: can you trust what you remember? You have a short time to inspect a room. The lights go out. When they return, something is different. Identifying the change is how you survive — and each new room asks more of your memory.",
    features: [
      {
        title: "Look closely",
        description:
          "A brief inspection phase turns furniture, paintings, doors, and small details into things worth remembering.",
      },
      {
        title: "Find what changed",
        description:
          "The planned changes range from moved or missing objects to flipped paintings and unexpected doors or windows.",
      },
      {
        title: "Question the room",
        description:
          "Mirrors, misleading details, altered architecture, and increasingly impossible spaces are part of the concept.",
      },
      {
        title: "Feel the pressure",
        description:
          "The intended progression grows more unsettling and difficult, with a threatening shadowy presence planned for later.",
      },
    ],
    publisherNotes: [
      {
        title: "Development stage",
        description:
          "An in-development concept. Features and visual direction are subject to change. No public playable build is currently linked here.",
      },
      {
        title: "A clear central mechanic",
        description:
          "Observe, remember, identify. The concept pairs an immediately understandable memory loop with escalating psychological tension.",
      },
      {
        title: "Open for discussion",
        description:
          "Publishing, development funding, platform opportunities, and other project-specific partnerships can be discussed as the game develops.",
      },
    ],
    gallery: [],
  },
];

export const getGame = (slug: string) =>
  games.find((game) => game.slug === slug);
