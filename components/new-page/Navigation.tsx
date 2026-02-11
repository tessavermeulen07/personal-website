"use client";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  return (
    <header className="navigation">
      <div className="container">
        <div className="navigation-content">
          <a href="/" className="navigation-logo">
            My Site
          </a>
          <nav className="navigation-nav" aria-label="Main navigation">
            <ul className="navigation-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="navigation-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}