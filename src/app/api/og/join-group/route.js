import { ImageResponse } from "next/og";
import JoinGroupOg from "./JoinGroupOg";

export const runtime = "edge";

// Load both fonts once per cold start
const interSemiBold = fetch(
  new URL("./font/Inter_28pt-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interMedium = fetch(
  new URL("./font/Inter_28pt-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const defaultFlag = searchParams.get("default");
  const groupName = defaultFlag
    ? "Your Group"
    : searchParams.get("groupName") || "Your Group";

  return new ImageResponse(<JoinGroupOg groupName={groupName} />, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Inter",
        data: await interSemiBold,
        weight: 600,
        style: "normal",
      },
      {
        name: "Inter",
        data: await interMedium,
        weight: 500,
        style: "normal",
      },
    ],
  });
}
//
