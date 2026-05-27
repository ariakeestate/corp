const companyInfo = [
  { label: "商号", value: "有明不動産株式会社" },
  { label: "所在地", value: "〒130-0003 東京都墨田区横川４丁目６－７" },
  { label: "電話番号", value: "03-3621-1881", href: "tel:0336211881" },
  { label: "FAX番号", value: "03-3623-6180" },
  { label: "営業時間", value: "9:30 〜 19:00" },
  { label: "定休日", value: "水曜日" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] font-medium tracking-[0.2em] text-sm uppercase mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1b3a6b] mb-4">
            会社概要
          </h2>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto rounded" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Message */}
          <div>
            <h3 className="text-xl font-bold text-[#1b3a6b] mb-4">
              すみだで暮らす、働く、あなたを支える
            </h3>
            <p className="text-gray-700 leading-loose mb-6">
              有明不動産は、音楽・芸術の街として知られる
              東京都墨田区に根ざした不動産会社です。
              東京スカイツリーを望む、活気あふれるこの街で、
              お客様の「住む」「働く」「始める」を全力でサポートします。
            </p>
            <p className="text-gray-700 leading-loose mb-6">
              地域に密着した豊富な物件情報と、
              長年培ったネットワークを活かし、
              お客様一人ひとりのご要望に丁寧にお応えします。
              賃貸・売買のことなら、お気軽にお声がけください。
            </p>
            <div className="flex gap-4">
              <a
                href="tel:0336211881"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1b3a6b] text-white font-bold rounded hover:bg-[#2a5298] transition-colors"
              >
                <span>📞</span>
                <span>電話で問い合わせ</span>
              </a>
            </div>
          </div>

          {/* Right: Company info table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-[#1b3a6b] px-6 py-4">
              <h3 className="text-white font-bold text-lg">会社情報</h3>
            </div>
            <dl className="divide-y divide-gray-100">
              {companyInfo.map(({ label, value, href }) => (
                <div key={label} className="flex px-6 py-4 gap-4">
                  <dt className="text-sm font-medium text-gray-500 w-24 flex-shrink-0">
                    {label}
                  </dt>
                  <dd className="text-sm text-gray-900 font-medium">
                    {href ? (
                      <a
                        href={href}
                        className="text-[#1b3a6b] hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
