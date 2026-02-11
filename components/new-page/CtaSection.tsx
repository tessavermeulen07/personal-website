interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function CtaSection({
  title = "Lorem ipsum dolor sit amet",
  description = "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  buttonText = "Ask for information"
}: CtaSectionProps) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-description">{description}</p>
          <button className="cta-button">{buttonText}</button>
        </div>
      </div>
    </section>
  );
}