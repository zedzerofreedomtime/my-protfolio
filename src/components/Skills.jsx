import SectionHeading from "./SectionHeading";

const skills = [
  { title: "HTML / CSS", type: "Frontend", level: 5 },
  { title: "JavaScript", type: "Frontend", level: 4 },
  { title: "React", type: "Frontend", level: 4 },
  { title: "Tailwind CSS", type: "Styling", level: 4 },
  { title: "MUI", type: "UI Library", level: 3 },
  { title: "PHP", type: "Backend", level: 3 },
  { title: "MySQL", type: "Database", level: 3 },
  { title: "GitHub / Netlify", type: "Tools", level: 4 },
];

export default function Skills() {
  return (
    <section id="skills" className="portfolio-section portfolio-section--compact">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading label="02" title="SKILLS">
          เครื่องมือและทักษะที่ใช้สร้างเว็บจริง ตั้งแต่โครงสร้างหน้าเว็บไปจนถึงการจัดวางและ deploy
        </SectionHeading>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill) => (
            <article key={skill.title} className="skill-card">
              <p className="text-xs uppercase tracking-[0.22em] text-white/35">{skill.type}</p>
              <h3 className="mt-3 text-xl font-semibold">{skill.title}</h3>
              <div className="mt-7 flex gap-2" aria-label={`${skill.level} out of 5`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index} className={index < skill.level ? "skill-dot skill-dot--active" : "skill-dot"} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
