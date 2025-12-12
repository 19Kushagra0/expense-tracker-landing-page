import { ImageResponse } from "next/og";
import PrivacyOg from "@/app/api/og/privacyOg/PrivacyOg";

export const runtime = "edge"; // ✅ recommended for OG images

export async function GET() {
  return new ImageResponse(<PrivacyOg />, {
    width: 1200,
    height: 630,
  });
}
