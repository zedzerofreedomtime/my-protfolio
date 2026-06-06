const education = [
  {
    school: "มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์สุพรรณบุรี",
    degree: "คณะวิทยาศาสตร์และเทคโนโลยี",
    major: "สาขาเทคโนโลยีสารสนเทศและเศรษฐกิจดิจิทัล",
    period: "2024 - ปัจจุบัน",
  },
  {
    school: "วิทยาลัยเทคนิคสุพรรณบุรี",
    degree: "ประกาศนียบัตรวิชาชีพชั้นสูง",
    major: "สาขาเทคโนโลยีคอมพิวเตอร์ งานคอมพิวเตอร์ฮาร์ดแวร์",
    period: "2022 - 2024",
  },
  {
    school: "วิทยาลัยเทคนิคสุพรรณบุรี",
    degree: "ประกาศนียบัตรวิชาชีพ",
    major: "สาขาช่างเทคนิคคอมพิวเตอร์",
    period: "2019 - 2022",
  },
];

export default function About() {
  return (
    <section id="about" className="pt-8 pb-12 sm:py-12">
      <div className="f1-divider mb-6" />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-2xl font-semibold">เกี่ยวกับผม</h2>
          <p className="mt-4 leading-relaxed text-f1-muted">
            ผมชอบสร้างหน้าเว็บที่ใช้งานได้จริง จัดข้อมูลให้เข้าใจง่าย และพัฒนา UI ให้ดูสะอาดบนหลายขนาดหน้าจอ
            เป้าหมายตอนนี้คือเติบโตในสาย Frontend Development พร้อมต่อยอดทักษะด้าน UI/UX และ Performance
          </p>
        </div>

        <div className="rounded-lg border border-white/10 bg-f1-panel p-5">
          <h3 className="text-lg font-semibold">ประวัติการศึกษา</h3>
          <div className="mt-4 space-y-4">
            {education.map((item) => (
              <article key={`${item.school}-${item.period}`} className="rounded-lg border border-white/10 bg-black/25 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="font-medium">{item.school}</h4>
                    <p className="mt-1 text-sm text-f1-muted">{item.degree}</p>
                    <p className="text-sm text-f1-muted">{item.major}</p>
                  </div>
                  <p className="shrink-0 text-sm font-medium text-f1-orange">{item.period}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
