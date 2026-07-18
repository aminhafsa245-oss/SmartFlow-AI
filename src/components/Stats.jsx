import "../styles/Stats.css";

function Stats() {
  const stats = [
    { number: "10K+", label: "Happy Users" },
    { number: "500K+", label: "Tasks Automated" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section
  className="stats"
  id="stats"
  data-aos="zoom-in"
>
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;