const projects = [
  {
    name: "Safezone Town Website",
    desc: `ออกแบบและพัฒนาเว็บไซต์สำหรับรวบรวมข้อมูลเมือง Saber Town ในรูปแบบเว็บที่ใช้งานจริง

จัดหมวดหมู่ข้อมูลและกฎเมือง เช่น กฎพื้นฐาน กฎแพทย์ กฎตำรวจ กฎกิจกรรม เพื่อให้ผู้ใช้งานเข้าถึงข้อมูลได้ง่าย

พัฒนาเมนูแบบ Dropdown และ Toggle Menu เพื่อรองรับข้อมูลจำนวนมาก

ออกแบบ UI Theme แนว Cyber / Futuristic ให้สอดคล้องกับคอนเซ็ปต์เมือง Roleplay

ออกแบบโครงสร้างหน้าเว็บให้รองรับการใช้งานทั้งคอมพิวเตอร์และอุปกรณ์มือถือ`,
    tech: ["HTML", "CSS", "JS", "PHP"],
    link: "https://safezoneee.netlify.app/",
  },
  {
    name: "Saber Town Website",
    desc: `ออกแบบและพัฒนาเว็บไซต์สำหรับรวบรวมข้อมูลเมือง Saber Town ในรูปแบบเว็บที่ใช้งานจริง

จัดหมวดหมู่ข้อมูลและกฎเมือง เช่น กฎพื้นฐาน กฎแพทย์ กฎตำรวจ กฎกิจกรรม เพื่อให้ผู้ใช้งานเข้าถึงข้อมูลได้ง่าย

พัฒนาเมนูแบบ Dropdown และ Toggle Menu เพื่อรองรับข้อมูลจำนวนมาก

ออกแบบ UI Theme แนว Cyber / Futuristic ให้สอดคล้องกับคอนเซ็ปต์เมือง Roleplay

ออกแบบโครงสร้างหน้าเว็บให้รองรับการใช้งานทั้งคอมพิวเตอร์และอุปกรณ์มือถือ`,
    tech: ["HTML", "CSS", "JS", "PHP"],
    link: "https://saber-town.netlify.app/",
  },
];

export default function Projects() {
  return (
   <section id="projects" className="py-12">
      <div className="f1-divider mb-6" />
      <h2 className="text-xl font-semibold">โปรเจค</h2>

      <div className="mt-6 grid gap-4">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-f1-panel p-5 hover:border-f1-orange/50 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium group-hover:text-f1-orange transition">
                  {p.name}
                </h3>

                {/* สำคัญ: ให้รองรับขึ้นบรรทัดจาก backtick */}
                <p className="mt-2 text-sm text-f1-muted whitespace-pre-line">
                  {p.desc}
                </p>
              </div>

              <span className="text-sm text-f1-orange">Open →</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs rounded-full border border-f1-orange/25 bg-f1-orange/10 px-2 py-1 text-f1-orange"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}