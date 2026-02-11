interface HeroSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function HeroSection({
  title = "This is a headline",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  buttonText = "Learn More"
}: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-description">{description}</p>
            <button className="hero-button">{buttonText}</button>
          </div>
          <div className="hero-right">
            <div className="video-placeholder">
              <div className="video-icon">▶</div>
              <span>Video Content</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}