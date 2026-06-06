import { useEffect, useState } from "react";

const links = [
  { label: "หน้าหลัก", href: "#home" },
  { label: "เกี่ยวกับ", href: "#about" },
  { label: "ทักษะ", href: "#skills" },
  { label: "โปรเจกต์", href: "#projects" },
  { label: "ติดต่อ", href: "#contact" },
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-f1-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="font-semibold tracking-wide text-f1-text"
        >
          Methasit<span className="text-f1-orange">.dev</span>
        </a>

        <nav className="hidden gap-5 text-sm text-f1-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-f1-orange">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
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

      <div
        className={[
          "overflow-hidden transition-all duration-200 md:hidden",
          open ? "max-h-72" : "max-h-0",
        ].join(" ")}
      >
        <div className="mx-auto max-w-5xl px-4 pb-4 sm:px-6">
          <div className="rounded-lg border border-white/10 bg-f1-panel">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-f1-muted transition hover:bg-white/5 hover:text-f1-orange"
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
