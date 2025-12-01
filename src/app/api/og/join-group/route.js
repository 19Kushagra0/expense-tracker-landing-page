import { ImageResponse } from "next/og";
import JoinGroupOg from "./JoinGroupOg";

export const runtime = "edge";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const defaultFlag = searchParams.get("default");
  const groupName = defaultFlag
    ? "Your Group"
    : searchParams.get("groupName") || "Your Group";

  return new ImageResponse(<JoinGroupOg groupName={groupName} />, {
    width: 1200,
    height: 630,
  });
}
