import "../styles/HowItWorks.css";
import { FaUserPlus, FaLink, FaRobot } from "react-icons/fa";

function HowItWorks() {
  return (
    <section
  className="how-it-works"
  id="how-it-works"
  data-aos="fade-up"
>

      <p className="section-tag">
        HOW IT WORKS
      </p>

      <h2>Start in 3 Simple Steps</h2>

      <div className="steps">

        <div className="step-card">
          <FaUserPlus className="step-icon" />
          <h3>Create an Account</h3>
          <p>
            Sign up in less than a minute and access your AI workspace.
          </p>
        </div>

        <div className="step-card">
          <FaLink className="step-icon" />
          <h3>Connect Your Tools</h3>
          <p>
            Integrate Google Drive, Slack and other productivity apps.
          </p>
        </div>

        <div className="step-card">
          <FaRobot className="step-icon" />
          <h3>Boost Productivity</h3>
          <p>
            Let AI automate tasks and help your team work faster.
          </p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;