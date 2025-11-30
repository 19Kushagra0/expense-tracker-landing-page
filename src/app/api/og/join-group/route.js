import { ImageResponse } from "next/og";
import JoinGroupOg from "./JoinGroupOg";

export const runtime = "edge";

// 1) Load your font files from the fonts folder
const interMediumFont = fetch(
  new URL("./fonts/Inter_28pt-Medium.woff2", import.meta.url)
).then((res) => res.arrayBuffer());

const interSemiBoldFont = fetch(
  new URL("./fonts/Inter_28pt-SemiBold.woff2", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const defaultFlag = searchParams.get("default");
  const groupName = defaultFlag
    ? "Your Group"
    : searchParams.get("groupName") || "Your Group";

  // 2) Wait for fonts once
  const [interMedium, interSemiBold] = await Promise.all([
    interMediumFont,
    interSemiBoldFont,
  ]);

  // 3) Generate the OG image with fonts registered
  return new ImageResponse(<JoinGroupOg groupName={groupName} />, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter", // must match fontFamily in JoinGroupOg.jsx
        data: interMedium,
        weight: 500,
        style: "normal",
      },
      {
        name: "Inter",
        data: interSemiBold,
        weight: 600,
        style: "normal",
      },
    ],
  });
}
