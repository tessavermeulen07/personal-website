interface ServiceCardProps {
  imagePlaceholder: string;
  header: string;
  description: string;
}

function ServiceCard({ imagePlaceholder, header, description }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-card-image">
        <div className="service-image-placeholder">{imagePlaceholder}</div>
      </div>
      <div className="service-card-content">
        <h3 className="service-card-header">{header}</h3>
        <p className="service-card-description">{description}</p>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  const services = [
    {
      imagePlaceholder: "Service 1",
      header: "Lorem ipsum dolor sit amet",
      description: "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      imagePlaceholder: "Service 2",
      header: "Ut enim ad minim veniam",
      description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      imagePlaceholder: "Service 3",
      header: "Duis aute irure dolor",
      description: "In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="services-title">What I offer</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imagePlaceholder={service.imagePlaceholder}
              header={service.header}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}