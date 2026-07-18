import "../styles/Pricing.css";
import { FaCheckCircle } from "react-icons/fa";

function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "$0",
      period: "/month",
      features: [
        "Basic AI Assistant",
        "5 AI Requests / Day",
        "Email Support",
        "Community Access",
      ],
      button: "Get Started",
      active: false,
    },
    {
      title: "Pro",
      price: "$19",
      period: "/month",
      features: [
        "Unlimited AI Requests",
        "Advanced Analytics",
        "Priority Support",
        "Cloud Sync",
      ],
      button: "Start Free Trial",
      active: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited Team Members",
        "Dedicated Manager",
        "API Access",
        "24/7 Premium Support",
      ],
      button: "Contact Sales",
      active: false,
    },
  ];

  return (
    <section
  className="pricing"
  id="pricing"
  data-aos="fade-up"
>

      <p className="section-tag">PRICING</p>

      <h2>Simple & Transparent Pricing</h2>

      <p className="section-description">
        Choose the plan that best fits your needs.
      </p>

      <div className="pricing-grid">

        {plans.map((plan, index) => (
          <div
            className={`pricing-card ${plan.active ? "popular" : ""}`}
            key={index}
          >
            {plan.active && <div className="badge">Most Popular</div>}

            <h3>{plan.title}</h3>

            <div className="price">
              {plan.price}
              <span>{plan.period}</span>
            </div>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <FaCheckCircle className="check-icon" />
                  {feature}
                </li>
              ))}
            </ul>

            <button>{plan.button}</button>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Pricing;