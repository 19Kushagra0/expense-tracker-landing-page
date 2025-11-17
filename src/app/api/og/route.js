import { ImageResponse } from "next/og";
import LandingOg from "@/app/api/og/landingOg/LandingOg";
import TermOg from "@/app/api/og/termOg/TermOg";
import PrivacyOg from "@/app/api/og/privacyOg/PrivacyOg";

// export const runtime = "edge";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("groupName");

  if (page === "landingPage") {
    return new ImageResponse(<LandingOg />, {
      width: 1200,
      height: 630,
    });
  }

  if (page === "termsPage") {
    return new ImageResponse(<TermOg />, {
      width: 1200,
      height: 630,
    });
  }

  if (page === "privacyPage") {
    return new ImageResponse(<PrivacyOg />, {
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 60,
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
