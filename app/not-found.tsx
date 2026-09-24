import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="not-found wrap">
      <span className="eyebrow">404 / OUT OF BOUNDS</span>
      <h1>
        This room
        <br />
        doesn’t exist.
      </h1>
      <p>Let’s get you back to the games.</p>
      <Link href="/#games" className="button button-primary">
        Explore the games →
      </Link>
    </main>
  );
}
