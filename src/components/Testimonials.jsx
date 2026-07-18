import "../styles/Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      review:
        "SmartFlow AI has completely transformed the way our team works. It's fast, intuitive, and incredibly reliable.",
    },
    {
      name: "David Miller",
      role: "Software Engineer",
      review:
        "The automation features save us hours every week. Highly recommended for any growing team.",
    },
    {
      name: "Emily Brown",
      role: "Marketing Lead",
      review:
        "The AI summaries and analytics have significantly improved our productivity and collaboration.",
    },
  ];

  return (
    <section
  className="testimonials"
  id="testimonials"
  data-aos="fade-up"
>
      <p className="section-tag">TESTIMONIALS</p>

      <h2>What Our Customers Say</h2>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">⭐⭐⭐⭐⭐</div>

            <p className="review">"{item.review}"</p>

            <h3>{item.name}</h3>

            <span>{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;