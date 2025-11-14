import { Suspense } from "react";
import JoinGroup from "./components/Join-group";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const hdrs = headers();

  const host = hdrs.get("x-forwarded-host");
  const proto = hdrs.get("x-forwarded-proto") || "https";
  const path = hdrs.get("x-invoke-path") || "/join-group";

  const fullUrl = `${proto}://${host}${path}`;

  const url = new URL(fullUrl);
  const groupName = url.searchParams.get("groupName") || "Your Group";

  const base = "https://expense-tracker-alpha-lyart.vercel.app";

  return {
    title: `${groupName} | Numora`,
    openGraph: {
      title: `${groupName} | Numora`,
      images: [
        `${base}/api/og/join-group?groupName=${encodeURIComponent(groupName)}`,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${groupName} | Numora`,
      images: [
        `${base}/api/og/join-group?groupName=${encodeURIComponent(groupName)}`,
      ],
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <JoinGroup />
    </Suspense>
  );
}
