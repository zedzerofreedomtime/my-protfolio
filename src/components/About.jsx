import SectionHeading from "./SectionHeading";

const education = [
  {
    level: "ปริญญาตรี",
    school: "มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์สุพรรณบุรี",
    detail: "คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศและเศรษฐกิจดิจิทัล",
    period: "2024 - ปัจจุบัน",
  },
  {
    level: "ประกาศนียบัตรวิชาชีพชั้นสูง",
    school: "วิทยาลัยเทคนิคสุพรรณบุรี",
    detail: "สาขาเทคโนโลยีคอมพิวเตอร์",
    period: "2022 - 2024",
  },
  {
    level: "ประกาศนียบัตรวิชาชีพ",
    school: "วิทยาลัยเทคนิคสุพรรณบุรี",
    detail: "สาขาเทคนิคคอมพิวเตอร์",
    period: "2019 - 2022",
  },
];

export default function About() {
  return (
    <section id="about" className="portfolio-section">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading label="01" title="EDUCATION">
          ประวัติการศึกษาของผม ตั้งแต่สายเทคนิคคอมพิวเตอร์และเทคโนโลยีคอมพิวเตอร์
          จนถึงปัจจุบันที่กำลังศึกษาด้านเทคโนโลยีสารสนเทศและเศรษฐกิจดิจิทัล
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
