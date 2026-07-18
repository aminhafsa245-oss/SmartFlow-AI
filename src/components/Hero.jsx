import "../styles/Hero.css";

function Hero() {
  return (
    <section
  className="hero"
  id="home"
  data-aos="fade-up"
>

      <div className="hero-left">

        <p className="hero-tag">
          🚀 AI-Powered Productivity
        </p>

        <h1>
          Work Smarter with
          <span> SmartFlow AI</span>
        </h1>

        <p className="hero-description">
          Automate repetitive tasks, generate ideas,
          summarize documents, and collaborate
          effortlessly with the power of AI.
        </p>

        <div className="hero-badge">
  ⭐ Rated 4.9/5 by 10,000+ users
</div>

        <div className="hero-buttons">
          <button className="primary-btn">
            Start Free Trial
          </button>

          <button className="secondary-btn">
           View Live Demo
          </button>
        </div>

        <div className="hero-users">
          ⭐⭐⭐⭐⭐
          <span> Trusted by 10,000+ professionals</span>
        </div>

      </div>

      <div className="hero-right">
  <img
    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
    alt="AI Dashboard"
  />
</div>
    </section>
  );
}

export default Hero;