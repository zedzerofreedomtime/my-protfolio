export default function Footer() {
  return (
    <footer className="py-10 text-sm text-f1-muted">
      © {new Date().getFullYear()} Metasith. Built with React + Tailwind.
    </footer>
  );
}