import { Link } from "react-router-dom";
import "../styles/global.css";

function Success() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="legal-content-card">
          <p className="eyebrow">Message Sent</p>
          <h1>Thank you! Your project request has been submitted.</h1>
          <p className="page-intro">
            Git It Bunny has received your request. You can expect a response
            after your project details have been reviewed.
          </p>

          <div className="final-cta-actions">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>

            <Link to="/pricing" className="btn btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Success; 