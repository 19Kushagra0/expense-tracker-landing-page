import { ImageResponse } from "next/og";
import TermOg from "@/app/api/og/termOg/TermOg";

export const runtime = "edge"; // ✅ recommended for OG images

export async function GET() {
  return new ImageResponse(<TermOg />, {
    width: 1200,
    height: 630,
  });
}
