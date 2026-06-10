import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Profile", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" onClick={() => setOpen(false)} className="signature-logo text-2xl text-f1-text">
          Methasit<span className="text-f1-orange">.</span>
        </a>

        <nav className="hidden items-center gap-7 text-xs font-medium uppercase tracking-[0.28em] text-white/55 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/resume-methasit-sangwaree.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-f1-orange/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-f1-orange transition hover:border-f1-orange hover:bg-f1-orange/10 lg:inline-flex"
        >
          Resume
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={["burger md:hidden", "border border-white/10 bg-white text-black", open ? "is-open" : ""].join(" ")}
        >
          <div className="burger-lines">
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>

      <div className={["overflow-hidden transition-all duration-300 md:hidden", open ? "max-h-96" : "max-h-0"].join(" ")}>
        <div className="mx-5 mb-5 rounded-xl border border-white/10 bg-[#070707]/95 p-2 shadow-2xl">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-f1-orange"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume-methasit-sangwaree.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-2 block rounded-lg border border-f1-orange/30 px-4 py-3 text-sm font-semibold text-f1-orange"
          >
            เปิด Resume
          </a>
        </div>
      </div>
    </header>
  );
}
