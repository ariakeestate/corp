import Logo from "@/app/components/Logo";

const navLinks = [
  { href: "#services", label: "取扱物件" },
  { href: "#about", label: "会社概要" },
  { href: "#access", label: "アクセス" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo variant="light" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              音楽・芸術の街すみだで、
              <br />
              お客様の「住む」「働く」を支えます。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-[#c9a84c] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-bold text-[#c9a84c] uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>〒130-0003</p>
              <p>東京都墨田区横川４丁目６－７</p>
              <a
                href="tel:0336211881"
                className="block hover:text-white transition-colors font-medium text-white"
              >
                📞 03-3621-1881
              </a>
              <p>FAX 03-3623-6180</p>
              <p className="mt-3">
                営業時間：9:30 〜 19:00
                <br />
                定休日：水曜日
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>© {year} 有明不動産株式会社 All rights reserved.</p>
          <a href="#top" className="hover:text-white transition-colors text-xs">
            ページ上部へ ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
