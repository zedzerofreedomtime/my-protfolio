export default function Hero() {
  return (
    <section id="home" className="hero-shell">
      <div className="hero-grid mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:pt-20">
        <div className="hero-copy max-w-3xl">
          <p className="hero-role">FULL-STACK DEVELOPER</p>
          <h1 className="signature-title">
            Methasit<span>.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/58 sm:text-lg">
            เมธาสิทธิ์ สังข์วารี นักศึกษาปริญญาตรีจากมหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ
            ศูนย์สุพรรณบุรี สนใจการพัฒนาเว็บไซต์และเว็บแอปพลิเคชันแบบ Full-Stack
            โดยให้ความสำคัญทั้ง UX/UI ที่ใช้งานง่าย ความสวยงามของหน้าเว็บ
            และระบบ Back-End ที่มีโครงสร้างดี ใช้งานได้จริง
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
              <p className="mt-2 normal-case tracking-normal text-white/65">UX/UI + API</p>
            </div>
            <div>
              <p className="text-f1-orange">Stack</p>
              <p className="mt-2 normal-case tracking-normal text-white/65">React / Go</p>
            </div>
            <div>
              <p className="text-f1-orange">Goal</p>
              <p className="mt-2 normal-case tracking-normal text-white/65">Full-Stack</p>
            </div>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <div className="hero-portrait">
            <img src="/profile-methasit-student.png" alt="เมธาสิทธิ์ สังข์วารี" />
            <div className="hero-portrait__scan" />
          </div>
          <div className="hero-portrait-caption">
            <span>MET</span>
            <span>RMUTSB</span>
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
