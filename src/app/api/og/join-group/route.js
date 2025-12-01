import { ImageResponse } from "next/og";
import JoinGroupOg from "./JoinGroupOg";

export const runtime = "edge"; // OG images must run on edge

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  // Read groupName from URL
  const groupName = searchParams.get("groupName") || "Your Group";

  // Return OG Image
  return new ImageResponse(<JoinGroupOg groupName={groupName} />, {
    width: 1200,
    height: 630,
  });
}
//
