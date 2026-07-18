import "../styles/Features.css";
import FeatureCard from "./FeatureCard";

import {
  FaRobot,
  FaFileAlt,
  FaBolt,
  FaChartLine,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";

function Features() {
  return (
    <section
  className="features"
  id="features"
  data-aos="fade-up"
>
      <p className="section-tag">FEATURES</p>

      <h2>Everything You Need to Work Smarter</h2>

      <p className="section-description">
        Powerful AI tools designed to improve productivity,
        automate repetitive work, and help your team collaborate
        more efficiently.
      </p>

      <div className="features-grid">

        <FeatureCard
          icon={<FaRobot />}
          title="AI Assistant"
          description="Ask questions and receive instant AI-powered answers."
        />

        <FeatureCard
          icon={<FaFileAlt />}
          title="Smart Summaries"
          description="Summarize long reports and documents within seconds."
        />

        <FeatureCard
          icon={<FaBolt />}
          title="Task Automation"
          description="Automate repetitive daily workflows effortlessly."
        />

        <FeatureCard
          icon={<FaChartLine />}
          title="Analytics"
          description="Track team productivity with intelligent insights."
        />

        <FeatureCard
          icon={<FaCloud />}
          title="Cloud Sync"
          description="Access your data securely from any device."
        />

        <FeatureCard
          icon={<FaShieldAlt />}
          title="Enterprise Security"
          description="Protect your business with industry-standard security."
        />

      </div>
    </section>
  );
}

export default Features;