export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1b3a6b]"
    >
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Skytree silhouette */}
      <div className="absolute right-0 bottom-0 w-80 h-full opacity-10 flex items-end justify-end pr-8">
        <svg
          viewBox="0 0 200 600"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4/5"
        >
          {/* Simplified Skytree silhouette */}
          <polygon points="100,0 115,200 125,200 135,350 120,350 120,600 80,600 80,350 65,350 75,200 85,200" />
          <rect x="85" y="220" width="30" height="15" />
          <rect x="82" y="270" width="36" height="10" />
          <ellipse cx="100" cy="200" rx="18" ry="10" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b3a6b] via-[#1b3a6b]/80 to-[#2a5298]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center text-white">
        <p className="text-[#c9a84c] font-medium tracking-[0.3em] text-sm mb-6 uppercase">
          Ariake Real Estate
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          音楽と芸術の街
          <br />
          <span className="text-[#c9a84c]">すみだ</span>の不動産屋
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          東京スカイツリーを望む墨田区で、
          <br className="hidden sm:block" />
          あなたにぴったりの物件をお探しします。
          <br />
          賃貸・売買、お気軽にご相談ください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#c9a84c] text-white font-bold rounded hover:bg-[#b8963d] transition-colors text-base"
          >
            お問い合わせ
          </a>
          <a
            href="#services"
            className="inline-block px-8 py-4 bg-white/10 border-2 border-white/60 text-white font-bold rounded hover:bg-white/20 transition-colors text-base"
          >
            取扱物件を見る
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs">
        <span>SCROLL</span>
        <div className="w-px h-10 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
