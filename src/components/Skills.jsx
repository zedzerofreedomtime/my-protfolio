import SectionHeading from "./SectionHeading";

const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const skillGroups = [
  {
    title: "Front-End",
    skills: [
      { name: "HTML5", icon: `${deviconBase}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${deviconBase}/css3/css3-original.svg` },
      { name: "JavaScript", icon: `${deviconBase}/javascript/javascript-original.svg` },
      { name: "TypeScript", icon: `${deviconBase}/typescript/typescript-original.svg` },
      { name: "React.js", icon: `${deviconBase}/react/react-original.svg` },
      { name: "Next.js", icon: `${deviconBase}/nextjs/nextjs-original.svg`, invert: true },
      { name: "Vite", icon: `${deviconBase}/vitejs/vitejs-original.svg` },
      { name: "Tailwind CSS", icon: `${deviconBase}/tailwindcss/tailwindcss-original.svg` },
      { name: "Angular", icon: `${deviconBase}/angularjs/angularjs-original.svg` },
    ],
  },
  {
    title: "Back-End",
    skills: [
      { name: "Golang", icon: `${deviconBase}/go/go-original-wordmark.svg`, wide: true },
      { name: "PHP", icon: `${deviconBase}/php/php-original.svg`, wide: true },
      { name: "JWT Authentication", label: "JWT" },
      { name: "LUA", icon: `${deviconBase}/lua/lua-original.svg` },
      { name: "ASP.NET Core Web API (.NET 8)", icon: `${deviconBase}/dot-net/dot-net-original.svg` },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: `${deviconBase}/mysql/mysql-original-wordmark.svg`, wide: true },
      { name: "PostgreSQL", icon: `${deviconBase}/postgresql/postgresql-original.svg` },
      { name: "Redis", icon: `${deviconBase}/redis/redis-original.svg` },
    ],
  },
  {
    title: "Dev Tools",
    skills: [
      { name: "Git", icon: `${deviconBase}/git/git-original.svg` },
      { name: "GitHub", icon: `${deviconBase}/github/github-original.svg`, invert: true },
      { name: "VS Code", icon: `${deviconBase}/vscode/vscode-original.svg` },
      { name: "Docker", icon: `${deviconBase}/docker/docker-original.svg` },
      { name: "CLI", label: "CLI" },
      { name: "Codex", label: "CX" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="portfolio-section portfolio-section--compact">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading label="02" title="SKILLS">
          เทคโนโลยีและเครื่องมือที่ผมใช้ในการพัฒนาเว็บแอปพลิเคชัน ครอบคลุมตั้งแต่ Front-End, Back-End,
          Database ไปจนถึงเครื่องมือสำหรับพัฒนาและดูแลระบบให้พร้อมใช้งานจริง
        </SectionHeading>

        <div className="skills-board mt-12">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-group">
              <h3 className="skill-group__title">{group.title}</h3>
              <div className="skill-icon-grid">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-icon" title={skill.name} aria-label={skill.name}>
                    {skill.icon ? (
                      <img
                        className={[
                          "skill-icon__image",
                          skill.invert ? "skill-icon__image--invert" : "",
                          skill.wide ? "skill-icon__image--wide" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        src={skill.icon}
                        alt=""
                        loading="lazy"
                      />
                    ) : (
                      <span className="skill-icon__label">{skill.label}</span>
                    )}
                    <span className="skill-icon__name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
