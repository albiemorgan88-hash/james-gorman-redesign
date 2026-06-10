import { ImageResponse } from "next/og";
import { createElement } from "react";

export const runtime = "edge";

export async function GET() {
  const h = createElement;

  return new ImageResponse(
    h(
      "div",
      {
        style: {
          alignItems: "stretch",
          background: "linear-gradient(135deg, #060B1A 0%, #0E1530 42%, #2D4BD4 100%)",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: 72,
          width: "100%",
        },
      },
      h(
        "div",
        { style: { display: "flex", flexDirection: "column", justifyContent: "space-between", width: 720 } },
        h(
          "div",
          { style: { color: "#FF9466", fontSize: 28, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" } },
          "OpenClaw Consultant UK",
        ),
        h(
          "div",
          null,
          h(
            "div",
            { style: { fontSize: 78, fontWeight: 800, letterSpacing: -2, lineHeight: 0.98 } },
            "Safe OpenClaw setup, skills and agent workflows.",
          ),
          h(
            "div",
            { style: { color: "rgba(255,255,255,0.72)", fontSize: 30, lineHeight: 1.35, marginTop: 28 } },
            "Practical permission matrices, approval gates and implementation support for UK and remote teams.",
          ),
        ),
        h("div", { style: { color: "rgba(255,255,255,0.64)", fontSize: 26 } }, "openclawconsultant.co.uk"),
      ),
      h(
        "div",
        {
          style: {
            alignItems: "center",
            alignSelf: "center",
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: 32,
            display: "flex",
            flexDirection: "column",
            height: 360,
            justifyContent: "center",
            width: 300,
            background: "rgba(255,255,255,0.06)",
          },
        },
        h("div", { style: { color: "#FF9466", fontSize: 96, fontWeight: 900, lineHeight: 1 } }, "OC"),
        h(
          "div",
          { style: { color: "rgba(255,255,255,0.68)", fontSize: 24, marginTop: 16, textAlign: "center" } },
          "Setup",
          h("br"),
          "Controls",
          h("br"),
          "Support",
        ),
      ),
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
