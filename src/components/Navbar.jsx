import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <a href="#home" className="logo">
        SmartFlow <span>AI</span>
      </a>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>
        </li>

        <li>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
        </li>

        <li>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>
            Testimonials
          </a>
        </li>

        <li>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
        </li>

      </ul>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Get Started</button>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
}

export default Navbar;