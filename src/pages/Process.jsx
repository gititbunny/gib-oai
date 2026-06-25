import { Link } from "react-router-dom";
import "../styles/process.css";

const processSteps = [
  {
    number: "01",
    title: "Project Request",
    text: "You start by filling in the project request form or sending an email with the basic details of what you need.",
  },
  {
    number: "02",
    title: "Discovery",
    text: "We discuss your business type, goals, pages, features, style direction, content, and whether you need booking or store features.",
  },
  {
    number: "03",
    title: "Quote",
    text: "You receive a package recommendation or custom quote with pricing, timeline, payment terms, and project requirements.",
  },
  {
    number: "04",
    title: "Deposit",
    text: "Work begins once the required deposit has been paid and the needed project information has been shared.",
  },
  {
    number: "05",
    title: "Design Direction",
    text: "The website structure, visual direction, colours, layout approach, and launch graphic direction are prepared.",
  },
  {
    number: "06",
    title: "Website Build",
    text: "The website is built and the main pages, buttons, forms, inquiry flow, and responsive layout are set up.",
  },
  {
    number: "07",
    title: "Review",
    text: "You review the website and request the revisions included in your package before final approval.",
  },
  {
    number: "08",
    title: "Final Payment",
    text: "Final payment is completed before the website is launched, connected to a domain, or handed over.",
  },
  {
    number: "09",
    title: "Launch",
    text: "The website goes live, the domain is connected where needed, and final launch graphics can be prepared or delivered.",
  },
  {
    number: "10",
    title: "Support",
    text: "After launch, you can request paid updates or choose monthly support if you want ongoing help.",
  },
];

const processNotes = [
  {
    title: "Payments",
    text: "A deposit is required before work starts. Final payment is required before website launch, handover, or final file delivery.",
  },
  {
    title: "Revisions",
    text: "Each package includes a set number of revisions. Extra revisions, major direction changes, or new requests may be quoted separately.",
  },
  {
    title: "Client Content",
    text: "Clients are responsible for providing business details, text, images, prices, services, contact details, and any existing branding where available.",
  },
];

function Process() {
  return (
    <>
      <section className="page-section process-hero-section">
        <div className="container process-hero-grid">
          <div>
            <p className="eyebrow">Process</p>
            <h1>A clear step-by-step process from request to launch.</h1>
            <p className="page-intro">
              Git It Bunny keeps the project process simple, clear, and
              beginner-friendly so you know what happens before work starts,
              during the build, and before your website goes live.
            </p>
          </div>

          <div className="process-hero-card">
            <p>Simple client journey</p>
            <strong>
              Request, quote, deposit, design, build, review, launch, and
              support.
            </strong>
          </div>
        </div>
      </section>

      <section className="section-block full-process-section">
        <div className="container">
          <div className="section-heading section-heading-center">
            <p className="eyebrow">How It Works</p>
            <h2>From first message to final launch.</h2>
            <p>
              The full process helps both sides stay aligned on expectations,
              timeline, content, payments, revisions, and launch.
            </p>
          </div>

          <div className="full-process-grid">
            {processSteps.map((step) => (
              <article className="full-process-card" key={step.number}>
                <span>{step.number}</span>
                <h2>{step.title}</h2>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block process-notes-section">
        <div className="container process-notes-layout">
          <div className="process-notes-content">
            <p className="eyebrow">Important Notes</p>
            <h2>Clear expectations help the project run smoothly.</h2>
            <p>
              Before a project starts, it is important to understand how payment,
              revisions, content, third-party costs, and client feedback affect
              the timeline.
            </p>

            <Link to="/terms" className="btn btn-primary">
              Read Terms
            </Link>
          </div>

          <div className="process-notes-list">
            {processNotes.map((note) => (
              <article className="process-note-card" key={note.title}>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block client-ready-section">
        <div className="container">
          <div className="client-ready-card">
            <div>
              <p className="eyebrow">Before We Start</p>
              <h2>What should you prepare?</h2>
              <p>
                You do not need to have everything perfect before reaching out,
                but having these details ready can make the quote and project
                process much smoother.
              </p>
            </div>

            <ul>
              <li>Business name and contact details</li>
              <li>Services, prices, or packages</li>
              <li>Logo or brand colours if available</li>
              <li>Business photos or preferred stock image style</li>
              <li>Website pages or features you need</li>
              <li>Deadline or preferred launch period</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-card">
            <div className="final-cta-content">
              <p className="eyebrow">Ready to Start?</p>
              <h2>Start with the project request form.</h2>
              <p>
                Share what your business needs, and Git It Bunny can guide you
                toward the right service, package, timeline, and next steps.
              </p>

              <div className="final-cta-actions">
                <Link to="/contact" className="btn btn-primary">
                  Start Your Project
                </Link>

                <a
                  href="mailto:gititbunny@gmail.com?subject=Process%20Question"
                  className="btn btn-secondary"
                >
                  Email a Question
                </a>
              </div>
            </div>

            <div className="final-cta-note">
              <span>Clear Steps</span>
              <span>Quote First</span>
              <span>Launch Support</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Process;