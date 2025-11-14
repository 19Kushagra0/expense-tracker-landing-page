import { ImageResponse } from "next/og";
import JoinGroupOg from "./JoinGroupOg";

export const runtime = "edge"; // recommended for OG image
export const dynamic = "force-dynamic"; // ensure dynamic query works

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const groupName = searchParams.get("groupName") || "Your Group";

  return new ImageResponse(<JoinGroupOg groupName={groupName} />, {
    width: 1200,
    height: 630,
    emoji: "twemoji",
  });
}
