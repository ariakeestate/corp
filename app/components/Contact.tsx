const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojbpzvp";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#1b3a6b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] font-medium tracking-[0.2em] text-sm uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            お問い合わせ
          </h2>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto rounded" />
          <p className="mt-6 text-white/70 max-w-xl mx-auto">
            物件のご相談・ご質問はお気軽にお問い合わせください。
            営業時間内にご連絡させていただきます。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Sidebar: phone CTA */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 rounded-2xl p-6 text-white mb-4">
              <p className="text-[#c9a84c] font-bold text-sm mb-2">
                お電話でのお問い合わせ
              </p>
              <a
                href="tel:0336211881"
                className="text-2xl font-bold hover:text-[#c9a84c] transition-colors"
              >
                03-3621-1881
              </a>
              <p className="text-white/60 text-sm mt-3">
                受付時間：9:30 〜 19:00
                <br />
                定休日：水曜日
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-white">
              <p className="text-[#c9a84c] font-bold text-sm mb-2">所在地</p>
              <p className="text-sm text-white/80 leading-relaxed">
                〒130-0003
                <br />
                東京都墨田区横川４丁目６－７
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_next" value="/thanks/" />
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      お名前
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="山田 太郎"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3a6b] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      メールアドレス
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="example@email.com"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3a6b] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    電話番号
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="03-XXXX-XXXX"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3a6b] focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    お問い合わせ種別
                  </label>
                  <select
                    id="subject"
                    name="_subject"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3a6b] focus:border-transparent bg-white"
                  >
                    <option value="">選択してください</option>
                    <option value="賃貸（アパート・マンション）">
                      賃貸（アパート・マンション）
                    </option>
                    <option value="賃貸（事務所・店舗）">
                      賃貸（事務所・店舗）
                    </option>
                    <option value="賃貸（駐車場）">賃貸（駐車場）</option>
                    <option value="売買（一戸建て）">売買（一戸建て）</option>
                    <option value="売買（アパート・マンション）">
                      売買（アパート・マンション）
                    </option>
                    <option value="その他">その他</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    メッセージ
                    <span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="ご要望・ご質問をご記入ください"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3a6b] focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1b3a6b] text-white font-bold rounded-lg hover:bg-[#2a5298] transition-colors"
                >
                  送信する
                </button>

                <p className="text-xs text-gray-400 text-center">
                  送信いただいた情報は、お問い合わせへの回答のみに使用します。
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
