"use client";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="header-title">
            Portfolio
          </a>
          <nav className="nav" aria-label="Main navigation">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="nav-link">
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
