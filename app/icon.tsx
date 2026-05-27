import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: "#c9a84c",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: 11,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "0.5px",
          }}
        >
          有明
        </span>
        <div
          style={{
            width: 16,
            height: 2,
            borderRadius: 1,
            background: "rgba(255,255,255,0.5)",
            marginTop: 2,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
