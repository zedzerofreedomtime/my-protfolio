import SectionHeading from "./SectionHeading";

const contacts = [
  { label: "Email", value: "friendzzaa09@gmail.com", href: "mailto:friendzzaa09@gmail.com" },
  { label: "Phone", value: "093-1805195", href: "tel:0931805195" },
  { label: "GitHub", value: "zedzerofreedomtime", href: "https://github.com/zedzerofreedomtime" },
  { label: "Resume", value: "เปิดไฟล์ Resume", href: "/resume-methasit-sangwaree.pdf" },
  { label: "Facebook", value: "เมธาสิทธิ์ สังข์วารี", href: "https://www.facebook.com/methasit.sangwaree/?locale=th_TH" },
  { label: "Instagram", value: "@friend_zed", href: "https://www.instagram.com/friend_zed/" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path fill="currentColor" d="M13 5h6v6h-2V8.41l-9.29 9.3-1.42-1.42 9.3-9.29H13V5z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="portfolio-section portfolio-section--contact">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading label="04" title="CONTACT">
          พร้อมพูดคุยเรื่องฝึกงาน โครงงาน Full-Stack หรือโอกาสพัฒนาเว็บไซต์และเว็บแอปพลิเคชัน
          สามารถติดต่อผมได้ผ่านช่องทางด้านล่าง
        </SectionHeading>

        <div className="contact-grid">
          {contacts.map((item) => {
            const isExternal = item.href.startsWith("http") || item.href.startsWith("/");

            return (
              <a
                key={item.label}
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="contact-row"
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <ArrowIcon />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
