export default function Hero() {
  return (
    <section id="home" className="hero-shell">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
        <div className="max-w-3xl">
          <p className="hero-role">FRONTEND DEVELOPER</p>
          <h1 className="signature-title">
            Methasit<span>.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/58 sm:text-lg">
            ผมเป็นนักศึกษาสาขาเทคโนโลยีสารสนเทศและเศรษฐกิจดิจิทัล สนใจการพัฒนาเว็บไซต์ฝั่งผู้ใช้
            โดยเน้น UI ที่อ่านง่าย Responsive Design และประสบการณ์ใช้งานที่เหมาะกับทั้งมือถือและคอมพิวเตอร์
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="cinematic-button cinematic-button--primary">
              ดูผลงาน
            </a>
            <a
              href="/resume-methasit-sangwaree.pdf"
              target="_blank"
              rel="noreferrer"
              className="cinematic-button"
            >
              เปิด Resume
            </a>
            <a href="#contact" className="cinematic-button">
              ติดต่อ
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-y border-white/10 py-5 text-xs uppercase tracking-[0.22em] text-white/45">
            <div>
              <p className="text-f1-orange">Focus</p>
              <p className="mt-2 normal-case tracking-normal text-white/65">UI / Responsive</p>
            </div>
            <div>
              <p className="text-f1-orange">Stack</p>
              <p className="mt-2 normal-case tracking-normal text-white/65">React / Tailwind</p>
            </div>
            <div>
              <p className="text-f1-orange">Status</p>
              <p className="mt-2 normal-case tracking-normal text-white/65">Available</p>
            </div>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <div className="hero-portrait">
            <img src="https://img2.pic.in.th/1723951980165.jpg" alt="เมธาสิทธิ์ สังข์วารี" />
            <div className="hero-portrait__scan" />
          </div>
          <div className="hero-portrait-caption">
            <span>MET</span>
            <span>SUPHANBURI</span>
            <span>2026</span>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
        <span />
        Scroll
      </a>
    </section>
  );
}
