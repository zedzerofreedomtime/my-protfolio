import SectionHeading from "./SectionHeading";

const education = [
  {
    level: "Bachelor Degree",
    school: "มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์สุพรรณบุรี",
    detail: "กำลังศึกษาระดับปริญญาตรี และพัฒนาทักษะด้าน Front-End, Back-End, Database และการออกแบบระบบเว็บแอปพลิเคชัน",
    period: "Present",
  },
  {
    level: "Development Direction",
    school: "Full-Stack Developer Path",
    detail: "ฝึกสร้างระบบที่ครบทั้งหน้าเว็บ API ฐานข้อมูล Authentication Integration และ Monitoring เพื่อให้พร้อมต่อการทำงานจริง",
    period: "Ongoing",
  },
  {
    level: "Project Experience",
    school: "Shadow CEO / AutoNexus / Web Portfolio",
    detail: "มีประสบการณ์ทำโครงงานเว็บแดชบอร์ด ระบบซื้อขายรถยนต์ออนไลน์ และเว็บไซต์ที่เน้น Responsive UI",
    period: "2024 - 2026",
  },
];

export default function About() {
  return (
    <section id="about" className="portfolio-section">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading label="01" title="PROFILE">
          ผมเป็นนักศึกษาที่สนใจการพัฒนาเว็บไซต์และเว็บแอปพลิเคชันแบบ Full-Stack
          ตั้งแต่การออกแบบ UX/UI ให้เข้าใจง่าย ไปจนถึงการวางระบบ Back-End
          ที่ดูแลต่อได้และเชื่อมต่อบริการจริงได้ครบถ้วน
        </SectionHeading>

        <div className="space-y-10">
          <div className="about-panel">
            <p className="text-lg leading-9 text-white/70">
              ปัจจุบันผมกำลังพัฒนาทักษะทั้ง Front-End และ Back-End อย่างต่อเนื่อง
              เพื่อสร้างผลงานที่ตอบโจทย์ผู้ใช้งานได้ครบทั้งระบบ ผมให้ความสำคัญกับหน้าเว็บที่สวย
              ใช้งานง่าย รองรับหลายอุปกรณ์ และระบบหลังบ้านที่มีโครงสร้างชัดเจน เชื่อมต่อ API,
              Database, AI Service และ Third-party Integration ได้จริง
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["UX/UI Design", "Back-End API", "System Integration"].map((item) => (
                <div key={item} className="mini-stat">
                  <span />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="timeline-wrap">
            <div className="timeline-heading">
              <span>EDUCATION / EXPERIENCE</span>
              <span>03 records</span>
            </div>

            <div className="space-y-5">
              {education.map((item, index) => (
                <article key={`${item.school}-${item.period}`} className="timeline-item">
                  <div className="timeline-index">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-f1-orange">{item.level}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.school}</h3>
                    <p className="mt-2 leading-7 text-white/55">{item.detail}</p>
                  </div>
                  <p className="timeline-period">{item.period}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
