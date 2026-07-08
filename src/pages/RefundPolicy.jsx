import { Link } from "react-router-dom";
import "../styles/legal.css";

const refundSections = [
  {
    title: "1. Introduction",
    text: [
      "This Refund Policy explains how refunds are handled for Git It Bunny services, including website design, website development, booking website setup, online store setup, launch graphics, and related creative services.",
      "By paying a deposit, invoice, or project fee, you agree to this Refund Policy.",
    ],
  },
  {
    title: "2. Deposits",
    text: [
      "Deposits are generally non-refundable once work has started.",
      "This is because project planning, design direction, research, scheduling, communication, setup, and preparation may already have taken place.",
      "A deposit also secures your project slot and prevents that time from being booked by another client.",
    ],
  },
  {
    title: "3. When Refunds May Be Considered",
    text: [
      "A partial refund may be considered if no work has started and the client cancels the project before any planning, design, development, or preparation has begun.",
      "Refunds are reviewed on a case-by-case basis and depend on how much work has already been completed.",
      "Admin fees, transaction fees, or time already spent on the project may be deducted from any approved refund.",
    ],
  },
  {
    title: "4. When Refunds Are Not Available",
    text: [
      "Refunds are not available for completed work, approved designs, delivered graphics, completed website pages, completed setup work, or services already provided.",
      "Refunds are also not available if the client changes their mind after work has started, delays the project, stops responding, changes direction, or decides not to continue after work has been completed.",
      "Once a website has been launched, handed over, connected to a domain, or final files have been delivered, the project is considered complete and non-refundable.",
    ],
  },
  {
    title: "5. Digital Design & Graphics",
    text: [
      "Digital graphics, social launch kits, posters, service menus, brand visuals, and similar creative files are non-refundable once the work has been started, sent for review, approved, or delivered.",
      "Because these are digital and custom-made services, they cannot be returned like physical products.",
    ],
  },
  {
    title: "6. Website Projects",
    text: [
      "Website design and development fees are based on the time, planning, design, build, setup, and creative work required for the project.",
      "If a website project is cancelled after work has started, any refund request will be reviewed based on the stage of the project and the amount of work already completed.",
      "Completed pages, approved sections, setup work, forms, layouts, graphics, platform setup, and development time may be deducted from any possible refund.",
    ],
  },
  {
    title: "7. Online Store Setup",
    text: [
      "Online store setup services are quoted separately and may involve platform setup, product page guidance, payment setup guidance, shipping setup guidance, policy page structure, and launch support.",
      "Refunds for online store setup are not available for work already completed, including platform setup, design direction, product setup guidance, payment or shipping setup guidance, and any store structure already created.",
      "Third-party store platform fees such as Shopify, Wix, Squarespace, apps, plugins, subscriptions, or payment provider fees are not controlled by Git It Bunny and are not refundable through Git It Bunny.",
    ],
  },
  {
    title: "8. Third-Party Costs",
    text: [
      "Third-party costs are not refundable through Git It Bunny.",
      "These may include domains, hosting, email accounts, Shopify fees, Wix fees, Squarespace fees, premium themes, apps, plugins, booking tools, payment gateway fees, stock images, fonts, or any external platform costs.",
      "Clients are responsible for checking the refund terms of third-party providers directly.",
    ],
  },
  {
    title: "9. Client Delays or No Response",
    text: [
      "If a client delays the project by not providing content, feedback, approvals, payments, or required information, the project timeline may be paused.",
      "If a client stops responding for an extended period, the project may be placed on hold.",
      "Payments already made are not automatically refundable because time, planning, scheduling, or work may already have been committed.",
    ],
  },
  {
    title: "10. Change of Mind",
    text: [
      "A change of mind does not automatically qualify for a refund once work has started.",
      "Clients are encouraged to review the quote, package, timeline, deliverables, and project requirements carefully before paying a deposit.",
    ],
  },
  {
    title: "11. Revisions Instead of Refunds",
    text: [
      "If a client is unhappy with part of the work, Git It Bunny will first aim to resolve the issue through the revisions included in the package.",
      "Revision requests must stay within the agreed project scope.",
      "Major direction changes, new requests, or changes outside the original scope may require an extra fee.",
    ],
  },
  {
    title: "12. How to Request a Refund Review",
    text: [
      "To request a refund review, the client must contact Git It Bunny in writing through email or the contact form.",
      "The request should include the project name, payment date, reason for the request, and any relevant details.",
      "Git It Bunny will review the request and respond based on the project stage, work completed, and the terms of this Refund Policy.",
    ],
  },
  {
    title: "13. Policy Updates",
    text: [
      "Git It Bunny may update this Refund Policy when services, pricing, payment structures, or business processes change.",
      "The latest version will be available on this page.",
    ],
  },
  {
    title: "14. Contact",
    text: [
      "For questions about this Refund Policy, clients can contact Git It Bunny using the contact form or email address provided on the website.",
    ],
  },
];

function RefundPolicy() {
  return (
    <>
      <section className="page-section legal-hero-section">
        <div className="container legal-hero-grid">
          <div>
            <p className="eyebrow">Legal</p>
            <h1>Refund Policy</h1>
            <p className="page-intro">
              This policy explains how refunds are handled for deposits,
              website projects, online store setup, graphics, third-party costs,
              cancellations, and completed work.
            </p>
          </div>

          <div className="legal-hero-card">
            <span>Last updated</span>
            <strong>July 2026</strong>
            <p>
              Please read this policy before paying a deposit or starting a
              project.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block legal-content-section">
        <div className="container legal-layout">
          <aside className="legal-sidebar">
            <p className="eyebrow">Support Pages</p>
             <Link to="/faqs">FAQs</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/refund-policy">Refund Policy</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </aside>

          <div className="legal-content-card">
            <div className="legal-notice">
              <strong>Important:</strong> This refund policy is written for
              clarity and business protection. It is not a replacement for
              formal legal advice.
            </div>

            {refundSections.map((section) => (
              <section className="legal-text-section" key={section.title}>
                <h2>{section.title}</h2>

                {section.text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default RefundPolicy;