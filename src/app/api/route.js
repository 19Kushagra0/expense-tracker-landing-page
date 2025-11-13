import { ImageResponse } from "next/og";
import LandingOg from "@/app/api/og/landingOg/LandingOg";

export const runtime = "edge";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("groupName");

  // Only Landing Page support for now
  if (page === "landingPage") {
    return new ImageResponse(<LandingOg />, {
      width: 1200,
      height: 630,
    });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          fontSize: 60,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        OG Not Found
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
