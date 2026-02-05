import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // ปิดเมนูเมื่อขยายเป็น desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false); // md = 768px
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ปิดเมนูเมื่อกด ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-f1-bg/80 backdrop-blur">
      <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="font-semibold tracking-wide text-f1-text"
        >
          My<span className="text-f1-orange">Portfolio</span>
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-5 text-sm text-f1-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-f1-orange transition">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Burger button (mobile) */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={[
            "burger md:hidden",
            "bg-white border border-black/10 shadow-sm",
            open ? "is-open" : "",
          ].join(" ")}
        >
          <div className="burger-lines">
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-200",
          open ? "max-h-72" : "max-h-0",
        ].join(" ")}
      >
        <div className="mx-auto max-w-4xl px-4 pb-4">
          <div className="rounded-2xl border border-white/10 bg-f1-panel">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-f1-muted hover:text-f1-orange hover:bg-white/5 transition"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}