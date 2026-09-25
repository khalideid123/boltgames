import Link from "next/link";
import { Bolt, Arrow } from "./icons";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer wrap">
      <div className="footer-top">
        <Link href="/" className="brand" aria-label="Bolt Games home">
          <Bolt />
          <span>
            BOLT <span className="brand-light">GAMES</span>
          </span>
        </Link>
        <p>Independent by design.</p>
        <a
          className="text-link"
          href={`mailto:${site.email}`}
        >
          Email us <Arrow diagonal />
        </a>
      </div>
      <div className="footer-wordmark" aria-hidden="true">
        BOLT GAMES<span>↗</span>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Bolt Games</span>
        <span>An independent solo game studio.</span>
        <Link href="#top">Back to top ↑</Link>
      </div>
    </footer>
  );
}
