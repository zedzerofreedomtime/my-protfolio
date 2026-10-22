import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="editorial-hero">
      <div className="editorial-hero__intro">
        <p className="editorial-eyebrow">FULL-STACK DEVELOPER / THAILAND</p>
        <h1>Methasit<span>Sangwaree<span className="name-dot">.</span></span></h1>
        <div className="editorial-hero__bottom">
          <p>ออกแบบประสบการณ์ที่ใช้ง่าย<br />พัฒนาระบบที่ทำงานได้จริง</p>
          <div className="hero-links">
            <a href="#projects">สำรวจผลงาน <ArrowDown size={20} /></a>
            <a href="/resume-methasit-sangwaree.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={20} /></a>
          </div>
        </div>
      </div>
      <a href="#project-1" className="hero-feature" aria-label="ดูโปรเจค Intervue AI">
        <img src="/project-intervue-01.png" alt="หน้าจอ Dashboard ของ Intervue AI" fetchPriority="high" />
        <span className="hero-feature__caption"><span>FEATURED / 01</span><strong>Intervue AI</strong><ArrowUpRight size={26} /></span>
      </a>
    </section>
  );
}
