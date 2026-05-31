import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Krishna Boreda — Engineer, Problem solver, Product builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1033 50%, #0a0a0a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            color: "#818cf8",
            fontFamily: "monospace",
            marginBottom: "16px",
          }}
        >
          Hi, my name is
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "96px",
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.02em",
            marginBottom: "24px",
          }}
        >
          Krishna Boreda
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "32px",
            color: "#a3a3a3",
            fontFamily: "monospace",
          }}
        >
          Engineer · Problem solver · Product builder
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "20px",
            color: "#737373",
            marginTop: "60px",
          }}
        >
          krishnaboreda.com
        </div>
      </div>
    ),
    { ...size }
  );
}