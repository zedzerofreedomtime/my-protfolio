import SectionHeading from "./SectionHeading";

const education = [
  {
    level: "ปริญญาตรี",
    school: "มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์สุพรรณบุรี",
    detail: "คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศและเศรษฐกิจดิจิทัล",
    period: "สำเร็จการศึกษาแล้ว",
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
        <div>
        <SectionHeading label="THE PERSON BEHIND THE WORK" title="Education.">
          ประวัติการศึกษาของผม ตั้งแต่สายเทคนิคคอมพิวเตอร์และเทคโนโลยีคอมพิวเตอร์
          จนสำเร็จการศึกษาระดับปริญญาตรีด้านเทคโนโลยีสารสนเทศและเศรษฐกิจดิจิทัล
        </SectionHeading>
        </div>

        <div>
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
