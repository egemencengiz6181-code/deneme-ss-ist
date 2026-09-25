import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const alt = "Deneme Üssü – İstanbul'un Premium Sınav Kulübü";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 80px",
          gap: 64,
          background: "radial-gradient(ellipse at 20% 0%, #2E1C00 0%, #0A1628 45%, #060D18 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <img src={logoSrc} width={320} height={320} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 8, color: "#D4AF37", textTransform: "uppercase" }}>
            İstanbul · Premium Sınav Kulübü
          </div>
          <div style={{ fontSize: 108, fontWeight: 900, lineHeight: 1, marginTop: 20 }}>DENEME</div>
          <div style={{ fontSize: 108, fontWeight: 900, lineHeight: 1, color: "#D4AF37" }}>ÜSSÜ</div>
          <div style={{ fontSize: 30, marginTop: 28, color: "rgba(255,255,255,0.75)" }}>
            {`7 Aşamalı Sistem · Dijital Takip · ${site.branchCount} Şube`}
          </div>
        </div>
      </div>
    ),
    size
  );
}
