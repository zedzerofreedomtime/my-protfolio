export default function Hero() {
  return (
    <section id="home" className="py-14">
      <div className="f1-checker rounded-2xl border border-white/10 bg-f1-panel p-7">

        <div className="grid gap-8 md:grid-cols-[180px_1fr] md:items-center">

          {/* ⭐ LEFT : PROFILE */}
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-[180px]">
             <img
              src="https://img2.pic.in.th/1723951980165.jpg"
              alt="profile"
              className="w-full aspect-square object-cover rounded-2xl border border-white/10"
              />

              <div className="mt-3 text-xs text-f1-muted">
                <div className="flex items-center justify-between">
                  <span>STATUS</span>
                  <span className="text-f1-orange">AVAILABLE</span>
                </div>

                <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-[60%] bg-f1-orange" />
                </div>
              </div>
            </div>
          </div>


          {/* ⭐ RIGHT : TEXT */}
          <div>
            <p className="text-xs tracking-widest text-f1-muted">
              FRONTEND • UI • PERFORMANCE
            </p>

            <h1 className="mt-3 text-3xl sm:text-4xl font-semibold">
              เมธาสิทธิ์ สังข์วารี <span className="text-f1-orange">.DEV</span>
            </h1>

            <p className="mt-3 text-f1-muted leading-relaxed">
              ผมเป็นนักศึกษาระดับปริญญาตรีจาก มหาวิทยาลัยเทคโนโลยีราชมงคลสุวรรณภูมิ ศูนย์สุพรรณบุรี ผมสนใจการพัฒนาเว็บไซต์ฝั่งผู้ใช้งาน 
              โดยให้ความสำคัญกับ UI/UX, ความสวยงามของหน้าเว็บ และการออกแบบให้รองรับการใช้งานบนมือถือและคอมพิวเตอร์ได้อย่างเหมาะสม 
              ผมพร้อมที่จะพัฒนาทักษะด้าน ด้านการทำ UX,UI เพื่อสร้างผลงานที่ใช้งานได้จริง และเติบโตสู่การเป็น Front-End Developer ในอนาคต
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

        </div>
      </div>
    </section>
  );
}