import { ImageResponse } from "next/og";
import TermOg from "./TermOg"; // ✅ fixed — no extra slash, local relative import

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(<TermOg />, {
    width: 1200,
    height: 630,
  });
}
