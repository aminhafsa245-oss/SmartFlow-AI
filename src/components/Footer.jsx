import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer
  className="footer"
  data-aos="fade-up"
>

      <div className="footer-logo">
        SmartFlow <span>AI</span>
      </div>

      <p>
        AI-powered productivity platform for modern teams.
      </p>

      <div className="footer-links">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
      </div>

      <div className="social-icons">
  <a href="#"><FaGithub /></a>
  <a href="#"><FaLinkedin /></a>
  <a href="#"><FaTwitter /></a>
</div>

      <p className="copyright">
        © 2026 SmartFlow AI. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;