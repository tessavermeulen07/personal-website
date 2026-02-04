interface CardProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
}

export default function Card({
  icon,
  title,
  description,
  buttonText,
  buttonHref = "#",
}: CardProps) {
  return (
    <article className="card">
      <div className="card-icon" aria-hidden="true">
        {icon}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a href={buttonHref} className="card-button">
        {buttonText}
      </a>
    </article>
  );
}
