import { ImageResponse } from "next/og";
import JoinGroupOg from "./Join-groupOg";

// ❌ remove: export const runtime = "edge";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const groupName = searchParams.get("groupName") || "Join our group";

  return new ImageResponse(<JoinGroupOg groupName={groupName} />, {
    width: 1200,
    height: 630,
  });
}
