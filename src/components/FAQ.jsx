import { useState } from "react";
import "../styles/FAQ.css";
import { FaPlus, FaMinus } from "react-icons/fa";

function FAQ() {
  const faqs = [
    {
      question: "What is SmartFlow AI?",
      answer:
        "SmartFlow AI is an AI-powered productivity platform that helps automate tasks, summarize content, and improve team collaboration.",
    },
    {
      question: "Can I use it for free?",
      answer:
        "Yes! Our Starter plan is completely free and gives you access to the basic AI features.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption and follow industry security standards.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes. You can upgrade, downgrade, or cancel your subscription whenever you want.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
  className="faq"
  id="faq"
  data-aos="fade-up"
>

      <p className="section-tag">FAQ</p>

      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">

        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>

            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>

              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </div>

            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQ;