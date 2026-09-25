import { site } from "@/lib/site";
import { Arrow } from "./icons";

export function Contact() {
  return (
    <section
      id="contact"
      className="contact-section wrap section-space"
      data-reveal
    >
      <div className="section-eyebrow">
        <span>04 / CONTACT</span>
        <span>START A CONVERSATION</span>
      </div>
      <div className="contact-layout">
        <div>
          <h2>
            Great games.
            <br />
            <span className="muted">New possibilities.</span>
          </h2>
          <p>
            For publishing partnerships and conversations about what comes next.
          </p>
        </div>
        <div className="contact-list">
          <div className="contact-row">
            <span>Location</span>
            <span>Based out of Dallas</span>
          </div>
          <div className="contact-row">
            <span>Email</span>
            <a href={`mailto:${site.email}`}>
              {site.email} <Arrow diagonal />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
