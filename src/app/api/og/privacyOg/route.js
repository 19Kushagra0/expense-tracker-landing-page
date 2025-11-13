import { ImageResponse } from "next/og";
import PrivacyOg from "./PrivacyOg"; // ✅ fixed — no extra slash, local relative import

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(<PrivacyOg />, {
    width: 1200,
    height: 630,
  });
}
