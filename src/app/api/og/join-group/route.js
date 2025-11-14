import { ImageResponse } from "next/og";
import JoinGroupOg from "./JoinGroupOg"; // make sure file name matches exactly

export async function GET(req) {
  // Read the URL search parameters
  const { searchParams } = new URL(req.url);

  // Take groupName from URL ?groupName=Delhi
  const groupName = searchParams.get("groupName") || "Join our group";

  // Return OG image (1200 × 630)
  return new ImageResponse(<JoinGroupOg groupName={groupName} />, {
    width: 1200,
    height: 630,
  });
}
