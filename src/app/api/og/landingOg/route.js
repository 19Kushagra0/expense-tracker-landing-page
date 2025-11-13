import { ImageResponse } from "next/og";
import LandingOg from "@/app/api/og/landingOg/LandingOg";

export const runtime = "edge"; // ✅ recommended for OG images

export async function GET() {
  return new ImageResponse(<LandingOg />, {
    width: 1200,
    height: 630,
  });
}

// http://localhost:3000/api/og?title=Home
