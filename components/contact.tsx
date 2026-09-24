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
            For publishing, business inquiries, and conversations about what
            comes next.
          </p>
        </div>
        <div className="contact-list">
          <div className="contact-row">
            <span>Business inquiries</span>
            {site.businessEmail ? (
              <a href={`mailto:${site.businessEmail}`}>
                {site.businessEmail}
                <Arrow diagonal />
              </a>
            ) : (
              <span className="contact-pending">
                Business email coming soon
              </span>
            )}
          </div>
          <div className="contact-row">
            <span>Studio email</span>
            {site.email ? (
              <a href={`mailto:${site.email}`}>
                {site.email}
                <Arrow diagonal />
              </a>
            ) : (
              <span className="contact-pending">
                Studio address coming soon
              </span>
            )}
          </div>
          <div className="contact-row">
            <span>Find the work</span>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub <Arrow diagonal />
            </a>
          </div>
          <div className="contact-row">
            <span>Follow the studio</span>
            {site.socials.length ? (
              <div className="social-links">
                {site.socials.map((social) => (
                  <a
                    href={social.url}
                    key={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                    <Arrow diagonal />
                  </a>
                ))}
              </div>
            ) : (
              <span className="contact-pending">
                Social channels coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
