import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <section className="w-full max-w-xl bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-10 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1b3a6b] mb-4">
          送信ありがとうございました
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          お問い合わせを受け付けました。
          <br />
          内容を確認のうえ、担当者よりご連絡いたします。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#1b3a6b] text-white font-bold hover:bg-[#2a5298] transition-colors"
          >
            トップページへ戻る
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#1b3a6b] text-[#1b3a6b] font-bold hover:bg-blue-50 transition-colors"
          >
            もう一度問い合わせる
          </Link>
        </div>
      </section>
    </main>
  );
}
