import { useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";

const filters = ["All", "Web", "Frontend", "Responsive", "PHP"];

const projects = [
  {
    name: "Safezone Town Website",
    category: "Web",
    tags: ["Frontend", "Responsive", "PHP"],
    desc: "เว็บไซต์รวบรวมข้อมูลเมือง Roleplay พร้อมโครงสร้างเมนูที่ช่วยให้ผู้ใช้เข้าถึงกฎและข้อมูลสำคัญได้ง่าย",
    highlights: ["Dropdown / Toggle Menu", "Cyber UI Theme", "Mobile-first Layout"],
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    link: "https://safezoneee.netlify.app/",
  },
  {
    name: "Saber Town Website",
    category: "Web",
    tags: ["Frontend", "Responsive", "PHP"],
    desc: "เว็บไซต์ข้อมูลเมือง Saber Town ที่ออกแบบให้ผู้เล่นค้นหากฎ เมนู และรายละเอียดต่าง ๆ ได้สะดวก",
    highlights: ["Structured Content", "Responsive Sections", "Roleplay Visual Style"],
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
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
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter || project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="portfolio-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading label="03" title="PROJECT">
          ผลงานเว็บไซต์ที่ออกแบบและพัฒนาเพื่อใช้งานจริง พร้อมรายละเอียดบทบาท เทคโนโลยี และลิงก์สำหรับทดลองใช้งาน
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
                <p className="mt-4 max-w-3xl leading-8 text-white/58">{project.desc}</p>

                <div className="mt-6 grid gap-3 md:grid-cols-3">
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

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
                aria-label={`เปิดเว็บไซต์ ${project.name}`}
              >
                <IconExternalLink />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
