import SectionHeading from "./SectionHeading";

const projects = [
  {
    name: "PC Shop",
    type: "E-commerce System",
    summary:
      "ระบบร้านค้าออนไลน์สำหรับสินค้า PC พร้อม catalog, product detail, cart, checkout, order tracking และ PC Builder",
    accent: "#0b7cff",
    icon: "PC",
    githubLink: "https://github.com/zedzerofreedomtime/pcshop-fn",
    workflow: ["Catalog", "Product Detail", "Cart", "Checkout", "Track Order", "PC Builder"],
    tech: ["Angular", "TypeScript", "ASP.NET Core", "PostgreSQL", "Redis", "Docker"],
    screensTitle: "Product Screens",
    screensCopy:
      "รูปหน้าจอจริงจากโปรเจค PC Shop ใน repository ของนาย แสดง flow หน้าร้าน สินค้า ตะกร้า checkout และการติดตามคำสั่งซื้อ",
    image: "/project-pcshop-storefront.png",
  },
  {
    name: "InvoiceMini",
    type: "Business Document System",
    summary:
      "ระบบจัดการลูกค้า สินค้า ใบเสนอราคา ใบแจ้งหนี้ ใบเสร็จ และ dashboard สรุปรายได้สำหรับธุรกิจขนาดเล็ก",
    accent: "#11a36a",
    icon: "IM",
    githubLink: "https://github.com/zedzerofreedomtime/InvoiceMini-fn",
    workflow: ["Customer", "Product", "Quotation", "Invoice", "Receipt", "PDF"],
    tech: ["Next.js", "React", "TypeScript", "Go", "Gin", "PostgreSQL", "JWT"],
    screensTitle: "Real Dashboard Screen",
    screensCopy:
      "ภาพจริงจากหน้า Dashboard ของ InvoiceMini แสดงยอดรายได้ เอกสารล่าสุด กราฟรายเดือน และเมนูจัดการเอกสารธุรกิจ",
    image: "/project-invoicemini-real.png",
  },
  {
    name: "Ecosystem Manager",
    type: "AI Growth Dashboard",
    summary:
      "ผู้ช่วยวิเคราะห์ข้อมูลธุรกิจ SME จาก Facebook Page พร้อมสรุป insight, daily brief และคำแนะนำด้วย AI",
    accent: "#ff8c00",
    icon: "AI",
    githubLink: "https://github.com/fulltank-garage/shadow-ceo",
    workflow: ["Connect Page", "Collect Data", "AI Summary", "Growth Brief", "LINE Notify", "Admin Logs"],
    tech: ["React", "Vite", "Go", "Gin", "PostgreSQL", "Redis", "Gemini API", "LINE API"],
    screensTitle: "Real Analytics Screen",
    screensCopy:
      "ภาพจริงจากหน้า Dashboard ของ Ecosystem Manager แสดง performance summary, KPI, inbox signal และ daily growth brief",
    image: "/project-ecosystem-real.png",
  },
  {
    name: "AutoNexus",
    type: "Car Marketplace",
    summary:
      "แพลตฟอร์มซื้อขายรถยนต์ออนไลน์ รองรับการค้นหา เปรียบเทียบ ดูรายละเอียด ติดต่อผู้ขาย และส่งคำขอสินเชื่อ",
    accent: "#e44837",
    icon: "AN",
    githubLink: "https://github.com/zedzerofreedomtime/ZedSellAuto",
    workflow: ["Browse Cars", "Compare", "Vehicle Detail", "Favorites", "Test Drive", "Loan Request"],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Go", "Gin", "PostgreSQL", "Redis"],
    screensTitle: "Real Marketplace Screen",
    screensCopy:
      "ภาพจริงจากหน้า marketplace ของ AutoNexus แสดงหมวดหมู่รถ ตัวกรอง และรายการรถพร้อมรูปจากระบบ",
    image: "/project-autonexus-real.png",
  },
  {
    name: "Safezone Town Website",
    type: "Roleplay Community Website",
    summary:
      "เว็บไซต์รวมข้อมูลเมือง Roleplay พร้อมโครงสร้างเมนูสำหรับกฎ ข้อมูลสำคัญ และการใช้งานบนมือถือ",
    accent: "#8b5cf6",
    icon: "SZ",
    githubLink: "https://github.com/zedzerofreedomtime/safezone",
    link: "https://safezoneee.netlify.app/",
    workflow: ["Home", "Rules", "Jobs", "Menu", "Responsive", "Deploy"],
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    screensTitle: "Real Website Screen",
    screensCopy:
      "ภาพจริงจากหน้าเว็บไซต์ Safezone Town แสดงโทนสี เมนูหลัก และเนื้อหากฎของเมืองจากไฟล์โปรเจคจริง",
    image: "/project-safezone-real.png",
  },
  {
    name: "Saber Town Website",
    type: "Information Website",
    summary:
      "เว็บไซต์ข้อมูลเมือง Saber Town สำหรับให้ผู้เล่นค้นหากฎ เมนู และรายละเอียดต่าง ๆ ได้สะดวกบนหลายขนาดหน้าจอ",
    accent: "#f43f5e",
    icon: "ST",
    githubLink: "https://github.com/zedzerofreedomtime/saber_Tonw",
    link: "https://saber-town.netlify.app/",
    workflow: ["Landing", "Info", "Rules", "Navigation", "Mobile", "Netlify"],
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    screensTitle: "Real Website Screen",
    screensCopy:
      "ภาพจริงจากหน้าเว็บไซต์ Saber Town แสดงหน้าแรก โลโก้ เมนู และสไตล์ neon community ของโปรเจคจริง",
    image: "/project-saber-real.png",
  },
];

function IconExternalLink(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
      <path fill="currentColor" d="M5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function IconGitHub(props) {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.01.32 3.3 1.23.95a11.5 11.5 0 0 1 6.54 0c2.22-1.51 3.22-1.23 3.22-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"
      />
    </svg>
  );
}

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="portfolio-section projects-showcase-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading label="03" title="Selected systems built for real business workflows">
          รวมโปรเจคที่ออกแบบให้ใช้งานจริง ตั้งแต่ระบบร้านค้าออนไลน์ ระบบเอกสารธุรกิจ dashboard วิเคราะห์ข้อมูล ไปจนถึงเว็บไซต์ community
        </SectionHeading>

        <div className="project-case-grid mt-10">
          {projects.map((project, index) => (
            <article key={project.name} className="project-case" style={{ "--case-accent": project.accent }}>
              <div className="project-case__summary">
                <div className="project-case__identity">
                  <div className="project-case__mark">{project.icon}</div>
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.type}</p>
                  </div>
                </div>

                <p className="project-case__copy">{project.summary}</p>

                <div className="project-case__chips">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-case__actions">
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-case__button">
                    <IconGitHub />
                    <span>View GitHub Repo</span>
                  </a>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-case__button project-case__button--ghost">
                      <IconExternalLink />
                      <span>Live Website</span>
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="project-case__workflow">
                <p>System Workflow</p>
                {project.workflow.map((step, stepIndex) => (
                  <div key={step} className="workflow-step">
                    <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                    <strong>{step}</strong>
                  </div>
                ))}
              </div>

              <div className="project-case__screens">
                <div>
                  <p>Project {String(index + 1).padStart(2, "0")}</p>
                  <h4>{project.screensTitle}</h4>
                  <span>{project.screensCopy}</span>
                </div>
                <ProjectPreview project={project} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ project }) {
  if (project.image) {
    return (
      <div className="project-shot project-shot--image">
        <img src={project.image} alt={`${project.name} project screens`} />
      </div>
    );
  }

  if (project.mockup === "invoice") {
    return (
      <div className="project-shot project-shot--mock">
        <div className="mock-window">
          <div className="mock-window__bar">
            <span />
            <span />
            <span />
          </div>
          <div className="invoice-mock">
            <aside>
              <strong>InvoiceMini</strong>
              <span>Dashboard</span>
              <span>Customers</span>
              <span>Invoices</span>
            </aside>
            <main>
              <div className="mock-stat-row">
                <div>
                  Revenue<strong>฿128,400</strong>
                </div>
                <div>
                  Overdue<strong>3 docs</strong>
                </div>
              </div>
              <div className="mock-table">
                {["Quotation", "Invoice", "Receipt"].map((item) => (
                  <div key={item}>
                    <span>{item}</span>
                    <strong>Ready</strong>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }

  if (project.mockup === "auto") {
    return (
      <div className="project-shot project-shot--mock">
        <div className="auto-grid">
          {["Sedan", "SUV", "EV"].map((car, itemIndex) => (
            <div key={car} className="auto-card">
              <div className="auto-card__media" />
              <strong>{car} #{itemIndex + 1}</strong>
              <span>Finance request ready</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (project.mockup === "ai") {
    return (
      <div className="project-shot project-shot--mock">
        <div className="ai-dashboard">
          <div className="ai-dashboard__score">87</div>
          <div>
            <strong>Daily Growth Brief</strong>
            <span>Page health, content insight, LINE notify</span>
          </div>
          <div className="ai-bars">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-shot project-shot--mock">
      <div className="town-site">
        <div className="town-site__hero" />
        <div className="town-site__nav">
          <span>Rules</span>
          <span>Jobs</span>
          <span>Guide</span>
        </div>
        <div className="town-site__blocks">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
