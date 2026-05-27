import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          background: "#1b3a6b",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
        }}
      >
        {/* Inner gold border */}
        <div
          style={{
            position: "absolute",
            inset: 10,
            borderRadius: 26,
            border: "2px solid #c9a84c",
            opacity: 0.5,
          }}
        />
        {/* 有明 text */}
        <span
          style={{
            color: "#ffffff",
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "2px",
          }}
        >
          有明
        </span>
        {/* Gold accent line */}
        <div
          style={{
            width: 80,
            height: 4,
            borderRadius: 2,
            background: "#c9a84c",
            marginTop: 12,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
