function IconGitHub(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.75 5.64.75 12.03c0 5.12 3.19 9.46 7.62 10.99.56.11.77-.25.77-.55v-2.1c-3.1.69-3.75-1.53-3.75-1.53-.5-1.31-1.22-1.66-1.22-1.66-1-.7.07-.69.07-.69 1.1.08 1.68 1.15 1.68 1.15.98 1.7 2.57 1.21 3.2.92.1-.72.38-1.21.69-1.49-2.47-.29-5.07-1.26-5.07-5.62 0-1.24.43-2.25 1.14-3.04-.11-.29-.5-1.45.11-3.02 0 0 .94-.31 3.08 1.16.9-.26 1.86-.39 2.82-.39.96 0 1.92.13 2.82.39 2.14-1.47 3.08-1.16 3.08-1.16.61 1.57.22 2.73.11 3.02.71.79 1.14 1.8 1.14 3.04 0 4.37-2.6 5.33-5.08 5.61.39.34.74 1.02.74 2.06v3.06c0 .3.2.66.78.55 4.42-1.53 7.61-5.87 7.61-10.99C23.25 5.64 18.27.5 12 .5z"
      />
    </svg>
  );
}

function IconFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06C2 17.08 5.66 21.2 10.44 22v-7.03H7.9v-2.9h2.54V9.86c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.58v1.9h2.78l-.44 2.9h-2.34V22C18.34 21.2 22 17.08 22 12.06z"
      />
    </svg>
  );
}

function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4z"
      />
      <path
        fill="currentColor"
        d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
      />
      <circle cx="17.25" cy="6.75" r="1.1" fill="currentColor" />
    </svg>
  );
}

function ContactItem({ label, href, text, Icon }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      <p className="text-sm text-f1-muted">{label}</p>
      <a
        className="mt-2 inline-flex items-center gap-2 font-medium text-f1-text hover:text-f1-orange transition"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <span className="grid place-items-center w-8 h-8 rounded-lg border border-white/10 bg-white/5 text-f1-orange">
          <Icon />
        </span>
        <span className="hover:underline underline-offset-4">{text}</span>
      </a>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="f1-divider mb-6" />
      <h2 className="text-xl font-semibold">ติดต่อ</h2>

      <div className="mt-6 rounded-2xl border border-white/10 bg-f1-panel p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-f1-muted">Email</p>
            <a
              className="mt-2 inline-flex items-center gap-2 font-medium text-f1-text hover:text-f1-orange transition"
              href="mailto:friendzzaa09@gmail.com"
            >
              <span className="grid place-items-center w-8 h-8 rounded-lg border border-white/10 bg-white/5 text-f1-orange">
                {/* mail icon */}
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5v2.2z"
                  />
                </svg>
              </span>
              <span className="hover:underline underline-offset-4">friendzzaa09@gmail.com</span>
            </a>
          </div>

          <ContactItem
            label="GitHub"
            href="https://github.com/zedzerofreedomtime"
            text="zedzerofreedomtime"
            Icon={IconGitHub}
          />

          {/* แก้ลิงก์เป็นของนาย */}
          <ContactItem
            label="Facebook"
            href="https://www.facebook.com/methasit.sangwaree/?locale=th_TH"
            text="เมธาสิทธิ์ สังข์วารี"
            Icon={IconFacebook}
          />

          <ContactItem
            label="Instagram"
            href="https://www.instagram.com/friend_zed/"
            text="@friend_zed"
            Icon={IconInstagram}
          />
        </div>
      </div>
    </section>
  );
}