interface TestimonialProps {
  quote: string;
  name: string;
  imagePlaceholder: string;
}

function Testimonial({ quote, name, imagePlaceholder }: TestimonialProps) {
  return (
    <article className="testimonial">
      <blockquote className="testimonial-quote">"{quote}"</blockquote>
      <div className="testimonial-author">
        <div className="testimonial-avatar">{imagePlaceholder}</div>
        <span className="testimonial-name">{name}</span>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      name: "John Smith",
      imagePlaceholder: "JS",
    },
    {
      quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      name: "Sarah Johnson",
      imagePlaceholder: "SJ",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">What Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              imagePlaceholder={testimonial.imagePlaceholder}
            />
          ))}
        </div>
      </div>
    </section>
  );
}