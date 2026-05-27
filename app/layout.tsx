import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "有明不動産株式会社 | 墨田区の不動産",
  description:
    "有明不動産は音楽・芸術の街『すみだ』にある不動産屋です。東京スカイツリーが見える物件をお探しなら有明不動産へ。賃貸・売買のご相談はお気軽にどうぞ。",
  keywords: "有明不動産, 墨田区, 不動産, 賃貸, 売買, スカイツリー",
  openGraph: {
    title: "有明不動産株式会社",
    description: "音楽・芸術の街『すみだ』にある不動産屋",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
