const projects = [
  {
    name: "Safezone Town Website",
    role: "Frontend / UI",
    desc: "เว็บไซต์รวบรวมข้อมูลเมือง Roleplay พร้อมโครงสร้างเมนูที่ช่วยให้ผู้ใช้เข้าถึงกฎและข้อมูลสำคัญได้ง่าย",
    highlights: [
      "จัดหมวดหมู่ข้อมูลจำนวนมากให้สแกนง่าย",
      "พัฒนา Dropdown และ Toggle Menu สำหรับมือถือ",
      "ออกแบบ UI แนว Cyber / Futuristic ให้เข้ากับคอนเซ็ปต์เมือง",
    ],
    tech: ["HTML", "CSS", "JS", "PHP"],
    link: "https://safezoneee.netlify.app/",
  },
  {
    name: "Saber Town Website",
    role: "Web Design / Responsive Layout",
    desc: "เว็บไซต์ข้อมูลเมือง Saber Town ที่ออกแบบให้ผู้เล่นค้นหากฎ เมนู และรายละเอียดต่าง ๆ ได้สะดวก",
    highlights: [
      "วางโครงสร้างเนื้อหาให้เหมาะกับข้อมูลหลายหมวด",
      "ออกแบบหน้าตาให้ใช้งานง่ายทั้ง Desktop และ Mobile",
      "ปรับรายละเอียด UI ให้เข้ากับบรรยากาศเกม Roleplay",
    ],
    tech: ["HTML", "CSS", "JS", "PHP"],
    link: "https://saber-town.netlify.app/",
  },
];

function IconExternalLink(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"
      />
      <path
        fill="currentColor"
        d="M5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="f1-divider mb-6" />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">โปรเจกต์</h2>
          <p className="mt-2 text-sm text-f1-muted">ผลงานเว็บไซต์ที่ออกแบบและพัฒนาเพื่อใช้งานจริง</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        {projects.map((p) => (
          <article key={p.name} className="rounded-lg border border-white/10 bg-f1-panel p-5 transition hover:border-f1-orange/50">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-f1-orange">{p.role}</p>
                <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>

                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-f1-muted">
                  {p.desc}
                </p>
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-f1-orange/35 px-3 py-2 text-sm font-medium text-f1-orange transition hover:border-f1-orange hover:bg-f1-orange/10"
                aria-label={`เปิดเว็บไซต์ ${p.name}`}
              >
                เปิดเว็บไซต์
                <IconExternalLink />
              </a>
            </div>

            <ul className="mt-4 grid gap-2 text-sm text-f1-muted sm:grid-cols-3">
              {p.highlights.map((item) => (
                <li key={item} className="rounded-lg border border-white/10 bg-black/20 p-3">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-f1-orange/25 bg-f1-orange/10 px-2 py-1 text-xs text-f1-orange"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
