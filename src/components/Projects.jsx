import { useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";

const filters = ["All", "Full-Stack", "AI", "Dashboard", "Frontend", "Backend"];

const projects = [
  {
    name: "Ecosystem Manager",
    subtitle: "ระบบผู้ช่วยวิเคราะห์การเติบโตธุรกิจด้วย AI",
    category: "Full-Stack",
    tags: ["AI", "Dashboard", "Backend"],
    desc: "แพลตฟอร์มสำหรับช่วยเจ้าของธุรกิจ SME วิเคราะห์ข้อมูลจาก Facebook Page และสรุปข้อมูลเชิงธุรกิจด้วย AI เพื่อช่วยตัดสินใจด้านการตลาดและการขายได้ง่ายขึ้น",
    highlights: [
      "React Dashboard สำหรับคะแนนสุขภาพเพจ สรุปโพสต์ และผลวิเคราะห์",
      "Go + Gin API เชื่อม Frontend, Database, AI, LINE และ Meta Graph API",
      "PostgreSQL + Redis สำหรับจัดเก็บข้อมูลธุรกิจและรองรับงานที่ต้องการความเร็ว",
      "Gemini API สำหรับ Daily Growth Brief และคำแนะนำที่เข้าใจง่าย",
      "LINE Messaging API สำหรับส่งสรุปรายวันและแจ้งเตือนผู้ใช้งาน",
      "Admin Dashboard ตรวจสอบ Log และสถานะบริการสำคัญ",
    ],
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "Go",
      "Gin",
      "PostgreSQL",
      "Redis",
      "LINE API",
      "Meta Graph API",
      "Gemini API",
    ],
    githubLink: "https://github.com/fulltank-garage/shadow-ceo",
  },
  {
    name: "AutoNexus",
    subtitle: "ระบบแพลตฟอร์มซื้อขายรถยนต์ออนไลน์",
    category: "Full-Stack",
    tags: ["Frontend", "Backend", "Dashboard"],
    desc: "แพลตฟอร์มซื้อขายรถยนต์ออนไลน์ รองรับการค้นหา เปรียบเทียบ ดูรายละเอียด ติดต่อซื้อขาย นัดหมายทดลองขับ และส่งคำขอสินเชื่อผ่านระบบ",
    highlights: [
      "Next.js + React + TypeScript สำหรับหน้าค้นหาและรายละเอียดรถยนต์",
      "Tailwind CSS รองรับการใช้งานทั้ง Desktop และ Mobile",
      "Go + Gin API จัดการผู้ใช้ รถยนต์ รายการโปรด และคำขอต่าง ๆ",
      "ระบบสมาชิก สมัครสมาชิก เข้าสู่ระบบ และจัดการโปรไฟล์",
      "Favorites สำหรับบันทึกรถยนต์ที่สนใจกลับมาดูภายหลัง",
      "Handler / Service / Repository architecture เพื่อขยายระบบต่อได้ง่าย",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Axios", "Go", "Gin", "PostgreSQL", "Redis"],
    githubLink: "https://github.com/zedzerofreedomtime/ZedSellAuto",
  },
  {
    name: "InvoiceMini",
    subtitle: "ระบบจัดการใบแจ้งหนี้ขนาดเล็ก",
    category: "Frontend",
    tags: ["Frontend", "Dashboard"],
    desc: "เว็บแอปสำหรับจัดการข้อมูลใบแจ้งหนี้และสรุปรายการสำคัญ ช่วยให้ผู้ใช้สร้าง ตรวจสอบ และติดตามเอกสารได้เป็นระบบมากขึ้น",
    highlights: [
      "หน้าจัดการข้อมูลใบแจ้งหนี้พร้อมโครงสร้างที่อ่านง่าย",
      "Dashboard สำหรับดูสถานะและข้อมูลสรุปของเอกสาร",
      "Responsive UI รองรับการใช้งานบนหลายขนาดหน้าจอ",
    ],
    tech: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    githubLink: "https://github.com/zedzerofreedomtime/InvoiceMini-fn",
  },
  {
    name: "PC Shop",
    subtitle: "เว็บไซต์หน้าร้านขายคอมพิวเตอร์และอุปกรณ์",
    category: "Frontend",
    tags: ["Frontend"],
    desc: "เว็บไซต์หน้าร้านสำหรับนำเสนอสินค้าเกี่ยวกับคอมพิวเตอร์ ช่วยให้ผู้ใช้ดูข้อมูลสินค้าและเลือกดูรายการได้สะดวกผ่านหน้าเว็บที่จัดวางเป็นหมวดหมู่",
    highlights: [
      "หน้าแสดงรายการสินค้าและรายละเอียดสำคัญ",
      "เลย์เอาต์แบบ responsive สำหรับ Desktop และ Mobile",
      "โครงสร้างหน้าเว็บเหมาะกับการต่อยอดเป็นระบบร้านค้าออนไลน์",
    ],
    tech: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    githubLink: "https://github.com/zedzerofreedomtime/pcshop-fn",
  },
  {
    name: "Safezone Town Website",
    subtitle: "Roleplay community website",
    category: "Frontend",
    tags: ["Frontend"],
    desc: "เว็บไซต์รวบรวมข้อมูลเมือง Roleplay พร้อมโครงสร้างเมนูที่ช่วยให้ผู้ใช้เข้าถึงกฎและข้อมูลสำคัญได้ง่าย",
    highlights: ["Dropdown / Toggle Menu", "Cyber UI Theme", "Mobile-first Layout"],
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://safezoneee.netlify.app/",
    githubLink: "https://github.com/zedzerofreedomtime/safezone",
  },
  {
    name: "Saber Town Website",
    subtitle: "Responsive information website",
    category: "Frontend",
    tags: ["Frontend"],
    desc: "เว็บไซต์ข้อมูลเมือง Saber Town ที่ออกแบบให้ผู้เล่นค้นหากฎ เมนู และรายละเอียดต่าง ๆ ได้สะดวกบนหลายขนาดหน้าจอ",
    highlights: ["Structured Content", "Responsive Sections", "Roleplay Visual Style"],
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://saber-town.netlify.app/",
    githubLink: "https://github.com/zedzerofreedomtime/saber_Tonw",
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

function IconGitHub(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.01-.32 3.3 1.23.95a11.5 11.5 0 0 1 6.54 0c2.22-1.51 3.22-1.23 3.22-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"
      />
    </svg>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter || project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="portfolio-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading label="03" title="PROJECTS">
          ผลงานโครงงานและเว็บไซต์ที่ออกแบบ พัฒนา และเชื่อมระบบให้ใช้งานได้จริง
          ครอบคลุมทั้ง Frontend, Backend, Database, AI Service และ Integration ภายนอก
        </SectionHeading>

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? "filter-chip filter-chip--active" : "filter-chip"}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-5">
          {visibleProjects.map((project, index) => (
            <article key={project.name} className="project-row">
              <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs uppercase tracking-[0.22em] text-f1-orange">{project.category}</p>
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-white md:text-4xl">{project.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/35">
                  {project.subtitle}
                </p>
                <p className="mt-4 max-w-3xl leading-8 text-white/58">{project.desc}</p>

                <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {project.highlights.map((item) => (
                    <div key={item} className="project-highlight">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action"
                    aria-label={`เปิดเว็บไซต์ ${project.name}`}
                  >
                    <IconExternalLink />
                    <span>เข้าชมเว็บไซต์</span>
                  </a>
                ) : null}

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-action project-action--github"
                  aria-label={`เข้าชมบน GitHub ${project.name}`}
                >
                  <IconGitHub />
                  <span>เข้าชมบน GitHub</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
