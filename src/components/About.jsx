import SectionHeading from "./SectionHeading";

const education = [
  {
    level: "Bachelor Degree",
    school: "Rajamangala University of Technology Suvarnabhumi",
    detail: "สาขาเทคโนโลยีสารสนเทศและเศรษฐกิจดิจิทัล",
    period: "2024 - Present",
  },
  {
    level: "High Vocational Certificate",
    school: "Suphanburi Technical College",
    detail: "สาขาเทคโนโลยีคอมพิวเตอร์ งานคอมพิวเตอร์ฮาร์ดแวร์",
    period: "2022 - 2024",
  },
  {
    level: "Vocational Certificate",
    school: "Suphanburi Technical College",
    detail: "สาขาช่างเทคนิคคอมพิวเตอร์",
    period: "2019 - 2022",
  },
];

export default function About() {
  return (
    <section id="about" className="portfolio-section">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading label="01" title="ABOUT ME">
          ผมชอบสร้างหน้าเว็บที่ใช้งานได้จริง จัดข้อมูลให้เข้าใจง่าย และปรับประสบการณ์ใช้งานให้เหมาะกับผู้ใช้บนหลายอุปกรณ์
        </SectionHeading>

        <div className="space-y-10">
          <div className="about-panel">
            <p className="text-lg leading-9 text-white/70">
              เป้าหมายของผมคือการเติบโตในสาย Frontend Development พร้อมต่อยอดความเข้าใจด้าน UI/UX,
              Performance และการทำงานร่วมกับทีมพัฒนา เพื่อสร้างเว็บที่ทั้งสวย ใช้งานง่าย และดูแลต่อได้จริง
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Responsive UI", "Clean Layout", "Real Projects"].map((item) => (
                <div key={item} className="mini-stat">
                  <span />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="timeline-wrap">
            <div className="timeline-heading">
              <span>EDUCATION</span>
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
