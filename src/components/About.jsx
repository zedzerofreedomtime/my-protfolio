export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="f1-divider mb-6" />

      <h2 className="text-xl font-semibold">About Me</h2>

      {/* การ์ดหลัก */}
      <div className="mt-6 rounded-2xl border border-white/10 bg-f1-panel p-6">

        <h3 className="text-lg font-semibold">
          เมธาสิทธิ์ สังข์วารี
        </h3>

        <p className="mt-2 text-f1-muted leading-relaxed">
          นักศึกษาสาขาเทคโนโลยีสารสนเทศและเศรษฐกิจดิจิทัล
          สนใจการพัฒนาเว็บไซต์ โดยเฉพาะ Frontend และ UI Design
          ชื่นชอบการออกแบบระบบที่เรียบ ใช้งานง่าย และมีประสิทธิภาพ
        </p>

        {/* Education */}
        <div className="mt-6">
          <p className="text-sm text-f1-muted">Education</p>

          <div className="mt-2 rounded-xl border border-white/10 bg-black/30 p-4">
            <p className="font-medium">
              มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ
            </p>

            <p className="text-sm text-f1-muted mt-1">
              คณะวิทยาศาสตร์และเทคโนโลยี
            </p>

            <p className="text-sm text-f1-muted">
              สาขาเทคโนโลยีสารสนเทศและเศรษฐกิจดิจิทัล
            </p>

            <p className="text-sm text-f1-orange mt-2">
              2022 - ปัจจุบัน
            </p>
          </div>
        </div>

        {/* Mini Info */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3 text-xs text-f1-muted">
          <div className="rounded-xl border border-white/10 bg-black/20 p-3">
            <div className="text-white/70">Focus</div>
            <div className="mt-1 text-f1-orange">Frontend</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-3">
            <div className="text-white/70">Style</div>
            <div className="mt-1">Clean UI</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-3">
            <div className="text-white/70">Theme</div>
            <div className="mt-1">F1 Orange / Black</div>
          </div>
        </div>

      </div>
    </section>
  );
}