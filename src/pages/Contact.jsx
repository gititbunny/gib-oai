import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import "../styles/contact.css";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/getitbunny",
    icon: <FaInstagram />,
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@getitbunny",
    icon: <FaTiktok />,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/getitbunny",
    icon: <FaFacebookF />,
  },
  {
    name: "Pinterest",
    url: "https://pinterest.com/getitbunny",
    icon: <FaPinterestP />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/getitbunny",
    icon: <FaLinkedinIn />,
  },
];

function Contact() {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/success"))
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("Something went wrong. Please try again or email Get It Bunny directly.");
      });
  };

  useEffect(() => {
  if (location.hash === "#project-form") {
    const formSection = document.getElementById("project-form");

    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
}, [location]);

  return (
    <>
      <section className="page-section contact-hero-section">
        <div className="container contact-hero-grid">
          <div>
            <p className="eyebrow">Start a Project</p>
            <h1>Tell Get It Bunny what you need help with.</h1>
            <p className="page-intro">
              Start with the project request form or send an email so your
              inquiry is clear, professional, and easy to follow up on.
            </p>
          </div>

          <div className="contact-intro-card">
            <p>Best way to start</p>
            <strong>Use the project form for website, booking, or launch graphic inquiries.</strong>
          </div>
        </div>
      </section>

      <section className="section-block contact-options-section">
        <div className="container">
          <div className="contact-options-grid">
            <article className="contact-option-card featured-contact-option">
              <span>01</span>
              <h2>Project Request Form</h2>
              <p>
                Best for new website projects, package inquiries, booking
                websites, and launch graphics.
              </p>
              <a href="#project-form" className="btn btn-primary">
                Fill in the Form
              </a>
            </article>

            <article className="contact-option-card">
              <span>02</span>
              <h2>Email</h2>
              <p>
                Best for formal inquiries, follow-ups, quotes, documents, and
                project communication.
              </p>
              <a
                href="mailto:gititbunny@gmail.com?subject=Website%20Project%20Inquiry"
                className="btn btn-secondary"
              >
                Email Get It Bunny
              </a>
            </article>

            <article className="contact-option-card">
              <span>03</span>
              <h2>Quick Question</h2>
              <p>
                WhatsApp is available for quick questions, but project details
                should still be sent through the form or email.
              </p>
              <a
                href="https://wa.me/27000000000?text=Hi%20Git%20It%20Bunny%2C%20I%20have%20a%20quick%20question%20about%20a%20website%20project."
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Quick WhatsApp Question
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section-block project-form-section" id="project-form">
        <div className="container form-layout-grid">
          <div className="form-side-content">
            <p className="eyebrow">Project Request Form</p>
            <h2>Share the details needed to understand your project.</h2>
            <p>
              The more clearly you explain what your business needs, the easier
              it is to recommend the right package, timeline, and quote.
            </p>

            <div className="form-note-card">
              <strong>Before submitting</strong>
              <p>
                You do not need to have everything ready yet. Basic information
                about your business, service type, and project goal is enough to
                start the conversation.
              </p>
            </div>
          </div>

          <form
            name="project-request"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="project-form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="project-request" />

            <p className="hidden-field">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <div className="form-grid">
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>

              <label>
                Business name
                <input
                  type="text"
                  name="businessName"
                  placeholder="Your business name"
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Phone / WhatsApp number
                <input
                  type="tel"
                  name="phone"
                  placeholder="+27..."
                />
              </label>

              <label>
                Business type
                <input
                  type="text"
                  name="businessType"
                  placeholder="Beauty, coaching, photography, etc."
                />
              </label>

              <label>
                Service needed
                <select name="serviceNeeded" required defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Business Website">Business Website</option>
                  <option value="Booking Website">Booking Website</option>
                  <option value="Social Launch Kit">Social Launch Kit</option>
                  <option value="Online Store Setup">Online Store Setup</option>
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
              </label>

              <label>
                Package interested in
                <select name="packageInterested" defaultValue="">
                  <option value="" disabled>
                    Select a package
                  </option>
                  <option value="Landing Page Package">
                    Landing Page Package
                  </option>
                  <option value="Business Website Package">
                    Business Website Package
                  </option>
                  <option value="Booking Website Package">
                    Booking Website Package
                  </option>
                  <option value="Social Launch Kit">Social Launch Kit</option>
                  <option value="Online Store Setup - Custom Quote">
                    Online Store Setup - Custom Quote
                  </option>
                  <option value="Need Guidance">I need guidance</option>
                </select>
              </label>

              <label>
                Budget range
                <select name="budgetRange" defaultValue="">
                  <option value="" disabled>
                    Select your budget range
                  </option>
                  <option value="R3,500 - R5,000">R3,500 - R5,000</option>
                  <option value="R5,000 - R8,500">R5,000 - R8,500</option>
                  <option value="R8,500 - R12,500">R8,500 - R12,500</option>
                  <option value="R12,500+">R12,500+</option>
                  <option value="Not Sure Yet">Not sure yet</option>
                </select>
              </label>

              <label>
                Do you already have a domain?
                <select name="hasDomain" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Not Sure">Not sure</option>
                </select>
              </label>

              <label>
                Do you need booking features?
                <select name="needsBooking" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Maybe">Maybe</option>
                </select>
              </label>

              <label>
                Do you need launch graphics?
                <select name="needsLaunchGraphics" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Maybe">Maybe</option>
                </select>
              </label>

              <label>
                Project deadline
                <input
                  type="text"
                  name="deadline"
                  placeholder="Example: End of August"
                />
              </label>
            </div>

            <label>
              Short project description
              <textarea
                name="projectDescription"
                rows="6"
                placeholder="Tell me about your business, what you need, and what you want the website or graphics to help you achieve."
                required
              ></textarea>
            </label>
            <label className="privacy-consent">
              <input
                type="checkbox"
                name="privacyConsent"
                checked={privacyAccepted}
                onChange={(event) => setPrivacyAccepted(event.target.checked)}
                required
              />

              <span>
                I agree that Get It Bunny may use my information to respond to my inquiry
                and prepare a quote. I have read the{" "}
                <Link to="/privacy-policy">Privacy Policy</Link>.
              </span>
            </label>

            <button
              type="submit"
              className="btn btn-primary form-submit-btn"
              disabled={!privacyAccepted}
            >
              Submit Project Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;