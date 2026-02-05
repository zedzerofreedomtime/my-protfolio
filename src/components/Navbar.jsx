export default function Navbar() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-f1-bg/80 backdrop-blur">
      <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-wide">
          My<span className="text-f1-orange">Portfolio</span>
        </a>

        <nav className="flex gap-4 text-sm text-f1-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-f1-orange transition">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}