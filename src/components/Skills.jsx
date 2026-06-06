const skills = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "UI / Styling", items: ["Tailwind CSS", "MUI", "Responsive Design", "UI/UX Basics"] },
  { title: "Backend / Database", items: ["PHP", "MySQL"] },
  { title: "Tools", items: ["GitHub", "VS Code", "Netlify"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="f1-divider mb-6" />
      <h2 className="text-2xl font-semibold">ทักษะทางเทคนิค</h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <div key={s.title} className="rounded-lg border border-white/10 bg-f1-panel p-5">
            <h3 className="font-medium text-f1-orange">{s.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-f1-muted">
              {s.items.map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-f1-orange" />
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
