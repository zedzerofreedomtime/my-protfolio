export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="f1-divider mb-6" />

      <h2 className="text-xl font-semibold">ประวัติการศึกษา</h2>

      {/* การ์ดหลัก */}
      <div className="mt-6 rounded-2xl border border-white/10 bg-f1-panel p-6">

        {/* Education */}
        <div className="mt-6">

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

          {/* Education */}
        <div className="mt-6">

          <div className="mt-2 rounded-xl border border-white/10 bg-black/30 p-4">
            <p className="font-medium">
              วิทยาลัยเทคนิคสุพรรณบุรี
            </p>

            <p className="text-sm text-f1-muted mt-1">
              ประกาศนียบัตรวิชาชีพชั้นสูง สาขาวิชาเทคโนโลยีคอมพิวเตอร์
            </p>

            <p className="text-sm text-f1-muted">
              สาขางาน คอมพิวเตอร์ฮาร์ดแวร์
            </p>

            <p className="text-sm text-f1-orange mt-2">
              2022-2024
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mt-6">

          <div className="mt-2 rounded-xl border border-white/10 bg-black/30 p-4">
            <p className="font-medium">
              วิทยาลัยเทคนิคสุพรรณบุรี
            </p>

            <p className="text-sm text-f1-muted mt-1">
              ประกาศนียบัตรวิชาชีพ สาขาวิชาช่างเทคนิคคอมพิวเตอร์
            </p>

            <p className="text-sm text-f1-muted">
              สาขางาน เทคนิคคอมพิวเตอร์
            </p>

            <p className="text-sm text-f1-orange mt-2">
              2019-2022
            </p>
          </div>
        </div>

        

       

      </div>
    </section>
  );
}