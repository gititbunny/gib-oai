import { Link } from "react-router-dom";
import "../styles/legal.css";

const privacySections = [
  {
    title: "1. Introduction",
    text: [
      "This Privacy Policy explains how Git It Bunny collects, uses, stores, and protects personal information when you visit the website, submit a project request, send an email, use the contact form, or communicate about services.",
      "This Privacy Policy is intended to support transparency and align with South African privacy principles, including the Protection of Personal Information Act, 2013, also known as POPIA.",
    ],
  },
  {
    title: "2. Personal Information We Collect",
    text: [
      "Git It Bunny may collect personal information that you choose to provide through the website, contact form, project request form, email, or communication channels.",
      "This may include your name, business name, email address, phone or WhatsApp number, business type, project details, budget range, deadline, service preferences, and any other information you submit.",
      "Git It Bunny may also receive technical information such as basic website usage data, device information, browser type, or analytics data if analytics tools are added to the website in future.",
    ],
  },
  {
    title: "3. Why We Collect Personal Information",
    text: [
      "Git It Bunny collects personal information to respond to inquiries, understand project needs, prepare quotes, communicate with clients, provide services, manage projects, send invoices, deliver work, and offer support.",
      "Your information may also be used to improve the website, understand service interest, prevent misuse of forms, and keep project records.",
    ],
  },
  {
    title: "4. Contact Forms & Project Requests",
    text: [
      "When you submit a contact form or project request form, the information you provide is used to respond to your inquiry and assess what service, package, quote, or next step may be suitable.",
      "You should only submit information that is accurate and necessary for the project request.",
      "Please do not submit passwords, sensitive account details, payment card information, or private information through the general contact form.",
    ],
  },
  {
    title: "5. Email, WhatsApp & Communication",
    text: [
      "If you contact Git It Bunny by email, WhatsApp, or another communication method, the information you share may be used to respond to your message, discuss your project, prepare a quote, or provide support.",
      "Project details are best handled through email or the project request form so that important information can be recorded clearly.",
    ],
  },
  {
    title: "6. How We Use Personal Information",
    text: [
      "Git It Bunny may use personal information to communicate with you, prepare quotes, manage projects, provide website or design services, send invoices, deliver work, respond to support requests, and keep business records.",
      "Personal information will not be sold.",
      "Git It Bunny will only use your information for reasonable business purposes connected to your inquiry, project, service request, or legal/business record keeping.",
    ],
  },
  {
    title: "7. Sharing Personal Information",
    text: [
      "Git It Bunny does not sell personal information.",
      "Personal information may be shared only where necessary to provide services, comply with legal obligations, use trusted tools, or complete project-related tasks.",
      "Examples may include website hosting platforms, form handling tools, email providers, payment or invoicing tools, Shopify, Wix, Squarespace, domain providers, hosting providers, or other third-party platforms needed for the project.",
    ],
  },
  {
    title: "8. Third-Party Platforms",
    text: [
      "Some services may require third-party platforms such as Netlify, email providers, Shopify, Wix, Squarespace, domain registrars, hosting providers, booking tools, payment gateways, apps, plugins, or analytics tools.",
      "These platforms may process information according to their own privacy policies and terms.",
      "Clients are encouraged to review the privacy policies of any third-party platforms used for their website, store, domain, email, hosting, bookings, payments, or analytics.",
    ],
  },
  {
    title: "9. Cookies & Analytics",
    text: [
      "The Git It Bunny website may use basic cookies or analytics tools in future to understand website traffic, improve the website, and measure performance.",
      "If analytics, tracking pixels, advertising tools, or cookie-based services are added, this Privacy Policy may be updated to explain how those tools are used.",
    ],
  },
  {
    title: "10. Data Security",
    text: [
      "Git It Bunny aims to handle personal information carefully and take reasonable steps to protect it from loss, misuse, unauthorised access, disclosure, alteration, or destruction.",
      "No online system can be guaranteed completely secure, so clients should avoid sending highly sensitive information through general website forms or unsecured communication channels.",
    ],
  },
  {
    title: "11. Data Retention",
    text: [
      "Personal information may be kept for as long as reasonably needed to respond to inquiries, manage projects, provide services, maintain records, handle support, comply with legal obligations, or resolve disputes.",
      "When information is no longer reasonably needed, Git It Bunny may delete, archive, or securely dispose of it where appropriate.",
    ],
  },
  {
    title: "12. Your POPIA Rights",
    text: [
      "Under POPIA, data subjects may have rights relating to access, correction, deletion, objection, and complaints about how their personal information is processed.",
      "You may contact Git It Bunny to request access to your personal information, ask for incorrect information to be corrected, or request deletion where appropriate.",
      "You may also lodge a POPIA complaint with the Information Regulator if you believe your personal information has been processed in a way that violates POPIA.",
    ],
  },
  {
    title: "13. Direct Marketing",
    text: [
      "Git It Bunny will not use your personal information for unrelated spam.",
      "If newsletters, promotional updates, or direct marketing are introduced in future, consent and opt-out options should be provided where required.",
    ],
  },
  {
    title: "14. Children’s Information",
    text: [
      "Git It Bunny services are intended for business and project inquiries. The website is not designed to knowingly collect personal information from children.",
      "If a parent or guardian believes a child has submitted personal information, they can contact Git It Bunny to request review or deletion where appropriate.",
    ],
  },
  {
    title: "15. International Tools & Storage",
    text: [
      "Some third-party tools used for website forms, hosting, email, storage, analytics, or project platforms may store or process information outside South Africa.",
      "By submitting information through the website or working with Git It Bunny, you understand that trusted third-party tools may be used where necessary to provide services.",
    ],
  },
  {
    title: "16. Updates to This Privacy Policy",
    text: [
      "Git It Bunny may update this Privacy Policy when services, website features, third-party tools, legal requirements, or business processes change.",
      "The latest version will be available on this page.",
    ],
  },
  {
    title: "17. Contact",
    text: [
      "For privacy questions, access requests, correction requests, deletion requests, or concerns about personal information, contact Git It Bunny using the contact form or email address provided on the website.",
    ],
  },
];

function PrivacyPolicy() {
  return (
    <>
      <section className="page-section legal-hero-section">
        <div className="container legal-hero-grid">
          <div>
            <p className="eyebrow">Legal</p>
            <h1>Privacy Policy / POPIA Notice</h1>
            <p className="page-intro">
              This policy explains how Git It Bunny collects, uses, stores, and
              protects personal information submitted through the website,
              project request form, email, or client communication.
            </p>
          </div>

          <div className="legal-hero-card">
            <span>Last updated</span>
            <strong>June 2026</strong>
            <p>
              Please read this policy before submitting personal information
              through the website.
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
              <strong>Important:</strong> This Privacy Policy is written for
              transparency and POPIA-aware business practice. It is not a
              replacement for formal legal advice.
            </div>

            {privacySections.map((section) => (
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

export default PrivacyPolicy;