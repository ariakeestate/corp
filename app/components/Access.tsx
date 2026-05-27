export default function Access() {
  return (
    <section id="access" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] font-medium tracking-[0.2em] text-sm uppercase mb-3">
            Access
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1b3a6b] mb-4">
            アクセス
          </h2>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto rounded" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 aspect-video">
            <iframe
              src="https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%A2%A8%E7%94%B0%E5%8C%BA%E6%A8%AA%E5%B7%9D%EF%BC%94%E4%B8%81%E7%9B%AE%EF%BC%96%E2%88%92%EF%BC%97&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="有明不動産 地図"
            />
          </div>

          {/* Address info */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-[#1b3a6b] mb-6">
                店舗情報
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">住所</p>
                    <p className="font-medium text-gray-900">
                      〒130-0003
                      <br />
                      東京都墨田区横川４丁目６－７
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">電話番号</p>
                    <a
                      href="tel:0336211881"
                      className="font-medium text-[#1b3a6b] hover:underline text-lg"
                    >
                      03-3621-1881
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🖨️</span>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">FAX</p>
                    <p className="font-medium text-gray-900">03-3623-6180</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">営業時間</p>
                    <p className="font-medium text-gray-900">
                      9:30 〜 19:00
                      <br />
                      <span className="text-sm text-gray-500">
                        定休日：水曜日
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="https://maps.google.com/?q=東京都墨田区横川４丁目６－７"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1b3a6b] font-medium hover:underline text-sm"
              >
                Google マップで開く →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
