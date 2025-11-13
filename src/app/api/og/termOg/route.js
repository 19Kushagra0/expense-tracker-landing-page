// import { ImageResponse } from "next/og";
// import LandingOg from "@/app/api/og/landingOg/LandingOg";
// import TermOg from "@/app/api/og/termOg/TermOg";

// export const runtime = "edge";

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const page = searchParams.get("groupName");

//   if (page === "landingPage") {
//     return new ImageResponse(<LandingOg />, {
//       width: 1200,
//       height: 630,
//     });
//   }

//   if (page === "termsPage") {
//     return new ImageResponse(<TermOg />, {
//       width: 1200,
//       height: 630,
//     });
//   }

//   return new ImageResponse(
//     (
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           fontSize: 60,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         OG Not Found
//       </div>
//     ),
//     {
//       width: 1200,
//       height: 630,
//     }
//   );
// }
