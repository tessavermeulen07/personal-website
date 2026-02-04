import Card from "./Card";

const cardData = [
  {
    icon: "🎨",
    title: "Web Development",
    description:
      "Creating responsive and modern web applications using React, Next.js, and TypeScript. Focus on clean code, performance, and accessibility.",
    buttonText: "Bekijk",
    buttonHref: "#projects",
  },
  {
    icon: "🤖",
    title: "AI Integration",
    description:
      "Implementing AI-powered features including chatbots, content generation, and intelligent automation using cutting-edge AI APIs and models.",
    buttonText: "Ontdek",
    buttonHref: "#ai",
  },
  {
    icon: "📱",
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces with a focus on user experience. Creating design systems and prototypes that bring ideas to life.",
    buttonText: "Klik",
    buttonHref: "#design",
  },
];

export default function CardGrid() {
  return (
    <section className="cards-section" id="projects">
      <div className="container">
        <h2 className="cards-section-title">What I Do</h2>
        <div className="card-grid">
          {cardData.map((card) => (
            <Card
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              buttonHref={card.buttonHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
