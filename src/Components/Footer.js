import React from "react";
import "./Footer.css";
import { Button } from "./Buttons/Button";
import { Link } from "react-router-dom";
const link = "https://www.linkedin.com/in/martin-holt-lykke/";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Subscribe and get great deals on food in your inbox
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe whenever you want
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
          </div>
          <div className="footer-link-items">
            <h2>
              <Link to="/ContactUs">Contact Us</Link>
            </h2>
            <Link to="/ContactUs">Contact</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <p className="text-light">On the road..</p>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Save A Meal
              <i className="fas fa-utensils" />
            </Link>
          </div>
          <small className="website-rights">Martin Lykke © 2021</small>
          <small className="website-rights">
            Made with React <i className="fab fa-react"></i>
          </small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="social-icon-link instagram"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="social-icon-link youtube"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="social-icon-link twitter"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>

            <a
              className="social-icon-link"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
