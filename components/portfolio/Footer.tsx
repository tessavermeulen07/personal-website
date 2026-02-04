export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          {currentYear} Portfolio. Built with{" "}
          <a
            href="https://react.dev"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          and plain CSS.
        </p>
      </div>
    </footer>
  );
}
