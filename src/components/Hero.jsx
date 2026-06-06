export default function Hero() {
  return (
    <section id="home" className="pt-8 pb-4 sm:py-16">
      <div className="f1-checker rounded-lg border border-white/10 bg-f1-panel p-5 sm:p-8">
        <div className="grid gap-8 md:grid-cols-[190px_1fr] md:items-center">
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-[180px]">
              <img
                src="https://img2.pic.in.th/1723951980165.jpg"
                alt="เมธาสิทธิ์ สังข์วารี"
                className="aspect-square w-full rounded-lg border border-white/10 object-cover"
              />

              <div className="mt-3 text-xs text-f1-muted">
                <div className="flex items-center justify-between">
                  <span>STATUS</span>
                  <span className="font-medium text-f1-orange">AVAILABLE</span>
                </div>

                <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[60%] bg-f1-orange" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
              เมธาสิทธิ์ สังข์วารี
              <span className="block text-f1-orange">Frontend Developer</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-f1-muted">
              นักศึกษาสาขาเทคโนโลยีสารสนเทศและเศรษฐกิจดิจิทัล สนใจงานพัฒนาเว็บไซต์ฝั่งผู้ใช้
              โดยเน้น UI ที่อ่านง่าย Responsive Design และประสบการณ์ใช้งานที่เหมาะกับทั้งมือถือและคอมพิวเตอร์
            </p>

            <div className="mt-5 flex flex-wrap gap-2 text-sm text-f1-muted">
              {["React", "Tailwind CSS", "JavaScript", "PHP / MySQL"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-black/25 px-3 py-1">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-f1-orange px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
              >
                ดูผลงาน
              </a>

              <a
                href="/resume-methasit-sangwaree.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-f1-orange/45 px-4 py-2 text-sm font-medium text-f1-text transition hover:border-f1-orange hover:text-f1-orange"
              >
                เปิด Resume
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-f1-text transition hover:border-f1-orange/60"
              >
                ติดต่อ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
