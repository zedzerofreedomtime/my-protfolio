const skills = [
  { title: "ภาษาโปรแกรม", items: ["HTML", "CSS", "JavaScript", "PHP"] },
  { title: "การพัฒนาส่วนติดต่อผู้ใช้งาน", items: ["React", "MUI", "Tailwind css  "] },
  { title: "ฐานข้อมูล", items: ["MySQL "] },
  { title: "เครื่องมือ", items: ["Github ", "VS Code"],  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="f1-divider mb-6" />
      <h2 className="text-xl font-semibold">ทักษะทางเทคนิค</h2>

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