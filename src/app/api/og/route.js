import { ImageResponse } from "next/og";
import LandingOg from "@/app/components/og/LandingOg";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(<LandingOg />, {
    width: 1200,
    height: 630,
  });
}
