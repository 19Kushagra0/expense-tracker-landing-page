import { ImageResponse } from "next/og";
import JoinGroupOg from "./JoinGroupOg";

export const runtime = "edge";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  // Detect ?default (same behavior as before)
  const defaultFlag = searchParams.get("default");

  // Better default name so Instagram always shows wide preview
  const groupName = defaultFlag
    ? "Friends Group"
    : searchParams.get("groupName") || "Friends Group";

  return new ImageResponse(<JoinGroupOg groupName={groupName} />, {
    width: 1200,
    height: 630,
  });
}
