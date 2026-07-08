import { Link } from "react-router-dom";
import "../styles/legal.css";

const termsSections = [
  {
    title: "1. Introduction",
    text: [
      "These Terms & Conditions explain how Git It Bunny works with clients who request website design, website development, online store setup, booking website setup, launch graphics, or related creative services.",
      "By requesting a quote, approving a project, paying a deposit, or working with Git It Bunny, you agree to these terms.",
    ],
  },
  {
    title: "2. Services",
    text: [
      "Git It Bunny provides creative and digital services including landing pages, business websites, booking websites, online store setup, social launch graphics, design support, website updates, and related add-ons.",
      "The exact services included in your project will be listed in your quote, invoice, proposal, or written project agreement.",
    ],
  },
  {
    title: "3. Quotes & Pricing",
    text: [
      "Pricing shown on the website is a starting price and may change depending on the project size, platform, number of pages, content needs, features, complexity, timeline, and additional requests.",
      "Custom projects, online stores, advanced booking systems, extra pages, extra revisions, large product uploads, or third-party integrations may be quoted separately.",
      "A quote is only valid for the period stated on the quote. If no period is stated, the quote may be updated if the project details change.",
    ],
  },
  {
    title: "4. Deposits & Payments",
    text: [
      "A deposit is required before work begins. The deposit secures your project slot and allows Git It Bunny to start planning, designing, or building the project.",
      "The remaining balance must be paid before the final website launch, domain connection, handover, or delivery of final files.",
      "Work may be paused if payments are late, incomplete, or not received by the agreed date.",
    ],
  },
  {
    title: "5. Project Scope",
    text: [
      "The project scope includes only the pages, features, graphics, revisions, and services agreed to in writing.",
      "Any additional requests outside the original scope may require a new quote or extra fee.",
      "Examples of extra scope include new pages, major layout changes, new design direction, extra graphics, advanced forms, product uploads, platform integrations, or changes requested after approval.",
    ],
  },
  {
    title: "6. Client Responsibilities",
    text: [
      "Clients are responsible for providing accurate business details, text, images, prices, services, contact details, policies, branding, login details, and any other information needed for the project.",
      "Clients must make sure they have the right to use any images, logos, fonts, copy, brand assets, or content they provide.",
      "Delays in providing content, feedback, approvals, or payments may delay the project timeline.",
    ],
  },
  {
    title: "7. Timelines",
    text: [
      "Estimated timelines are provided as a guide and may depend on project complexity, client feedback, content readiness, third-party platforms, and payment status.",
      "Git It Bunny will do its best to meet agreed timelines, but timelines may change if the client delays feedback, adds new requests, changes direction, or does not provide required content on time.",
    ],
  },
  {
    title: "8. Revisions",
    text: [
      "Each package includes a set number of revisions. Revisions must be related to the agreed project scope.",
      "Extra revisions, major direction changes, or new requests may be charged separately.",
      "Once a design, page, graphic, or website section has been approved, later changes may be treated as additional work.",
    ],
  },
  {
    title: "9. Third-Party Costs",
    text: [
      "Third-party costs are not included unless clearly stated in your quote.",
      "These may include domain registration, hosting, email accounts, Shopify fees, Wix fees, Squarespace fees, paid templates, apps, plugins, booking tools, payment gateway fees, stock images, fonts, or other external services.",
      "Clients are responsible for paying third-party platforms directly unless another arrangement is agreed in writing.",
    ],
  },
  {
    title: "10. Online Store Setup",
    text: [
      "Online store setup is quoted separately because pricing depends on the platform, number of products, payment setup, shipping setup, policy requirements, and store complexity.",
      "Git It Bunny can assist with store structure, design direction, basic setup, product page guidance, and launch support, depending on the agreed quote.",
      "Clients remain responsible for product information, prices, inventory details, shipping rules, refund policies, payment provider approval, and legal compliance for their store.",
    ],
  },
  {
    title: "11. Booking Websites",
    text: [
      "Booking websites may include booking request forms, inquiry forms, contact buttons, or follow-up flows.",
      "Advanced booking features such as automatic calendars, payments, reminders, client accounts, or third-party booking systems may require custom setup and may include extra third-party fees.",
    ],
  },
  {
    title: "12. Website Launch & Handover",
    text: [
      "A website will only be launched, connected to a domain, or handed over once final payment has been received and the project has been approved.",
      "After launch, Git It Bunny is not responsible for issues caused by client edits, third-party platform changes, expired domains, hosting problems, unpaid subscriptions, plugin issues, or changes made outside the agreed project.",
    ],
  },
  {
    title: "13. Support & Updates",
    text: [
      "Support after launch is not automatically included unless stated in the quote or package.",
      "Clients can request paid updates, maintenance, graphics, edits, or monthly support after the project is complete.",
      "Urgent support, new features, major changes, or ongoing maintenance may be quoted separately.",
    ],
  },
  {
    title: "14. Refunds",
    text: [
      "Refunds are handled according to the Git It Bunny Refund Policy.",
      "Deposits are generally non-refundable once work has started, because time, planning, design, and project preparation may already have been committed.",
      "Clients should read the Refund Policy before paying a deposit or approving a project.",
    ],
  },
  {
    title: "15. Portfolio Use",
    text: [
      "Git It Bunny may display completed work, screenshots, mockups, or project previews in its portfolio, website, social media, or marketing materials unless the client requests confidentiality in writing before the project begins.",
      "Private client information, passwords, sensitive business details, or confidential information will not be shared publicly.",
    ],
  },
  {
    title: "16. Limitation of Liability",
    text: [
      "Git It Bunny will take reasonable care when providing services, but cannot guarantee specific business results, sales, bookings, website traffic, social media engagement, or customer inquiries.",
      "Git It Bunny is not responsible for losses caused by third-party platforms, hosting providers, payment gateways, plugins, client changes, incorrect client information, or external technical issues.",
    ],
  },
  {
    title: "17. Privacy",
    text: [
      "Personal information submitted through the website, contact form, email, or project request process will be handled according to the Git It Bunny Privacy Policy.",
      "Clients should not send passwords, sensitive information, or private account details unless requested through a safe and appropriate method.",
    ],
  },
  {
    title: "18. Changes to These Terms",
    text: [
      "Git It Bunny may update these Terms & Conditions when services, pricing, policies, or legal requirements change.",
      "The latest version will be available on this page.",
    ],
  },
  {
    title: "19. Contact",
    text: [
      "For questions about these Terms & Conditions, clients can contact Git It Bunny using the contact form or email address provided on the website.",
    ],
  },
];

function Terms() {
  return (
    <>
      <section className="page-section legal-hero-section">
        <div className="container legal-hero-grid">
          <div>
            <p className="eyebrow">Legal</p>
            <h1>Terms & Conditions</h1>
            <p className="page-intro">
              These terms explain how Git It Bunny projects work, including
              payments, deposits, timelines, revisions, client responsibilities,
              third-party costs, launch, support, and refunds.
            </p>
          </div>

          <div className="legal-hero-card">
            <span>Last updated</span>
            <strong>July 2026</strong>
            <p>
              Please read these terms before requesting a quote or starting a
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
              <strong>Important:</strong> These terms are written for clarity
              and business protection. They are not a replacement for formal
              legal advice.
            </div>

            {termsSections.map((section) => (
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

export default Terms;