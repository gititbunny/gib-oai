import { Link } from "react-router-dom";
import "../styles/faqs.css";

const faqGroups = [
  {
    title: "Projects & Services",
    questions: [
      {
        question: "What services does Git It Bunny offer?",
        answer:
          "Git It Bunny offers landing pages, business websites, booking websites, social launch graphics, and custom online store setup through platforms like Shopify, Wix, Squarespace, or similar tools.",
      },
      {
        question: "Do you only work with service-based businesses?",
        answer:
          "Service-based businesses are the main focus, but Git It Bunny can also help product-based businesses that need online store setup, product pages, launch graphics, or a clearer online presence.",
      },
      {
        question: "Can I request something custom?",
        answer:
          "Yes. If your project does not fit into one package, you can request a custom quote. Custom pricing depends on the pages, features, platform, content, and complexity of the project.",
      },
    ],
  },
  {
    title: "Payments & Pricing",
    questions: [
      {
        question: "Do I need to pay a deposit?",
        answer:
          "Yes. A deposit is required before work starts. The deposit secures your project slot and allows the design and build process to begin.",
      },
      {
        question: "When is the final payment due?",
        answer:
          "Final payment is required before the website is launched, connected to a domain, handed over, or before final design files are delivered.",
      },
      {
        question: "Are domain, hosting, Shopify, Wix, or Squarespace fees included?",
        answer:
          "No. Third-party costs such as domain registration, hosting, Shopify, Wix, Squarespace, premium plugins, paid apps, email accounts, or platform subscriptions are separate from Git It Bunny service fees unless stated in a custom quote.",
      },
    ],
  },
  {
    title: "Timelines & Revisions",
    questions: [
      {
        question: "How long does a website take?",
        answer:
          "Estimated timelines depend on the package and how quickly content is provided. Landing pages usually take around 5–7 business days, business websites around 10–14 business days, and booking websites around 2–3 weeks. Custom projects may take longer.",
      },
      {
        question: "What can delay a project?",
        answer:
          "Projects can be delayed by missing content, late feedback, major direction changes, unpaid invoices, third-party platform issues, or additional requests added after the project has started.",
      },
      {
        question: "Are revisions included?",
        answer:
          "Yes, each package includes a set number of revisions. Extra revisions, major changes, new sections, new pages, or changes outside the original scope may be quoted separately.",
      },
    ],
  },
  {
    title: "Content & Client Responsibilities",
    questions: [
      {
        question: "What do I need to provide before the project starts?",
        answer:
          "You should provide your business name, contact details, services, prices, images, brand colours, logo if available, page content, social links, and any important information customers need to know.",
      },
      {
        question: "Can Git It Bunny help if I do not have all my content ready?",
        answer:
          "Yes. Git It Bunny can help guide the structure and direction of your content, but you are still responsible for providing accurate business details, prices, service information, policies, and final approvals.",
      },
      {
        question: "Do I need professional photos?",
        answer:
          "Professional photos are helpful, but not always required. If you do not have brand photos yet, stock images or simple visual direction can be used depending on the project.",
      },
    ],
  },
  {
    title: "Booking & Online Store Setup",
    questions: [
      {
        question: "Do booking websites include automatic bookings?",
        answer:
          "Booking websites can include a booking request form and follow-up flow. Full automatic booking systems, calendars, payments, or third-party booking tools may require custom setup and may include extra platform fees.",
      },
      {
        question: "Can you build an online store?",
        answer:
          "Yes. Online store setup is available as a custom service through platforms like Shopify, Wix, Squarespace, or similar tools. Pricing depends on the platform, number of products, payment setup, shipping needs, and store complexity.",
      },
      {
        question: "Do you upload all my products for me?",
        answer:
          "Product upload support depends on the quote. A small number of sample products may be included for setup guidance, while larger product uploads may be quoted separately.",
      },
    ],
  },
  {
    title: "Communication & Support",
    questions: [
      {
        question: "How do clients contact Git It Bunny?",
        answer:
          "Clients can start with the project request form or email. WhatsApp can be used for quick questions or follow-ups, but project details are best handled through the form or email for clarity.",
      },
      {
        question: "Do you offer support after launch?",
        answer:
          "Yes. After launch, you can request paid updates or choose monthly support if you want ongoing help with small changes, updates, graphics, or website maintenance.",
      },
      {
        question: "Can I update the website myself later?",
        answer:
          "That depends on the platform and project setup. Some websites can be built in a way that allows easier client updates, while custom-coded websites may need developer support for changes.",
      },
    ],
  },
];

function FAQs() {
  return (
    <>
      <section className="page-section faqs-hero-section">
        <div className="container faqs-hero-grid">
          <div>
            <p className="eyebrow">FAQs</p>
            <h1>Questions clients usually ask before starting a project.</h1>
            <p className="page-intro">
              Here are clear answers about services, pricing, payments,
              timelines, revisions, content, online stores, bookings, and
              support.
            </p>
          </div>

          <div className="faqs-hero-card">
            <span>Before You Start</span>
            <strong>
              Read through the basics so your project request feels easier and
              clearer.
            </strong>
          </div>
        </div>
      </section>

      <section className="section-block faqs-list-section">
        <div className="container faqs-layout">
          <aside className="faqs-sidebar">
            <p className="eyebrow">Topics</p>
            <ul>
              {faqGroups.map((group) => (
                <li key={group.title}>
                  <a href={`#${group.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`}>
                    {group.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="faqs-groups">
            {faqGroups.map((group) => (
              <section
                className="faq-group"
                id={group.title.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}
                key={group.title}
              >
                <h2>{group.title}</h2>

                <div className="faq-items">
                  {group.questions.map((item) => (
                    <details className="faq-item" key={item.question}>
                      <summary>{item.question}</summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-card">
            <div className="final-cta-content">
              <p className="eyebrow">Still Unsure?</p>
              <h2>Start with the project request form.</h2>
              <p>
                You do not need to know the perfect package yet. Share what your
                business needs and Git It Bunny can guide you toward the right
                service, quote, and next step.
              </p>

              <div className="final-cta-actions">
                <Link to="/contact#project-form" className="btn btn-primary">
                  Start Your Project
                </Link>

                <Link to="/pricing" className="btn btn-secondary">
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="final-cta-note">
              <span>Clear Answers</span>
              <span>Quote First</span>
              <span>No Pressure</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQs;