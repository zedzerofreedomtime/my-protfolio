const skills = [
  { title: "Frontend", items: ["React", "Tailwind", "HTML/CSS", "JavaScript"] },
  { title: "Backend", items: ["PHP", "Node (basic)", "MySQL"] },
  { title: "Tools", items: ["VS Code", "Git (basic)", "Figma/Canva"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="f1-divider mb-6" />
      <h2 className="text-xl font-semibold">Skills</h2>
      <p className="mt-2 text-f1-muted">What I use to build things.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-f1-panel p-5">
            <h3 className="font-medium text-f1-orange">{s.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-f1-muted">
              {s.items.map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-f1-orange" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}