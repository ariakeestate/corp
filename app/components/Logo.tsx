type LogoProps = {
  /** ライト背景上で使う場合は "dark"、ダーク背景上は "light" */
  variant?: "dark" | "light";
  className?: string;
};

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const isDark = variant === "dark";

  // カラーパレット
  const gold = "#c9a84c";
  const navy = "#1b3a6b";
  const white = "#ffffff";

  const markBg = isDark ? navy : gold;
  const markText = white;
  const textColor = isDark ? navy : white;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 48"
      role="img"
      aria-label="有明不動産株式会社"
      className={className}
      fill="none"
    >
      {/* ── アイコンマーク ── */}
      {/* 外枠の正方形（角丸） */}
      <rect x="0" y="4" width="40" height="40" rx="6" fill={markBg} />

      {/* 内側の装飾ライン（金色の枠） */}
      {!isDark && (
        <rect
          x="3"
          y="7"
          width="34"
          height="34"
          rx="4"
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
        />
      )}
      {isDark && (
        <rect
          x="3"
          y="7"
          width="34"
          height="34"
          rx="4"
          fill="none"
          stroke={gold}
          strokeWidth="1"
        />
      )}

      {/* 「有明」テキスト（マーク内） */}
      <text
        x="20"
        y="20"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'Noto Sans JP', 'Hiragino Sans', sans-serif"
        fontSize="10"
        fontWeight="700"
        fill={markText}
        letterSpacing="0.5"
      >
        有明
      </text>

      {/* 下部の細いゴールドライン（アクセント） */}
      <rect x="10" y="35" width="20" height="1.5" rx="1" fill={gold} opacity={isDark ? "1" : "0.6"} />

      {/* ── テキスト部分 ── */}
      {/* 社名・メイン */}
      <text
        x="52"
        y="20"
        fontFamily="'Noto Sans JP', 'Hiragino Sans', sans-serif"
        fontSize="14"
        fontWeight="700"
        fill={textColor}
        letterSpacing="1"
      >
        有明不動産
      </text>

      {/* サブテキスト */}
      <text
        x="53"
        y="36"
        fontFamily="'Noto Sans JP', 'Hiragino Sans', sans-serif"
        fontSize="8.5"
        fontWeight="400"
        fill={textColor}
        opacity="0.7"
        letterSpacing="0.5"
      >
        株式会社
      </text>

      {/* テキスト下のゴールドアンダーライン */}
      <rect x="52" y="41" width="48" height="1.5" rx="1" fill={gold} />
    </svg>
  );
}
