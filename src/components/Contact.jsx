export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="f1-divider mb-6" />
      <h2 className="text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-f1-muted">Let’s talk about opportunities.</p>

      <div className="mt-6 rounded-2xl border border-white/10 bg-f1-panel p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm text-f1-muted">Email</p>
            <p className="mt-1 font-medium">friendzzaa09@gmail.com</p>
          </div>
          <div>
            <p className="text-sm text-f1-muted">GitHub</p>
            <a
              className="mt-1 inline-block font-medium text-f1-orange hover:underline"
              href="https://github.com/zedzerofreedomtime"
              target="_blank"
              rel="noreferrer"
            >
              zedzerofreedomtime
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}