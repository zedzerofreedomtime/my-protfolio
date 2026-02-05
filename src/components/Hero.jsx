export default function Hero() {
  return (
    <section id="home" className="py-14">
      <div className="f1-checker rounded-2xl border border-white/10 bg-f1-panel p-7">
        <p className="text-xs tracking-widest text-f1-muted">
          FRONTEND • UI • PERFORMANCE
        </p>

        <h1 className="mt-3 text-3xl sm:text-4xl font-semibold">
          เมธาสิทธิ์ สังข์วารี <span className="text-f1-orange">.DEV</span>
        </h1>

        <p className="mt-3 text-f1-muted leading-relaxed">
          ผมพัฒนาเว็บอินเทอร์เฟซที่เรียบ ใช้งานง่าย และลื่นไหล
          โทนการออกแบบได้แรงบันดาลใจจากความเป็น F1 (เน้นความเร็วและความคมชัด)
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-f1-orange px-4 py-2 text-sm font-medium text-black hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-f1-text hover:border-f1-orange/60"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}