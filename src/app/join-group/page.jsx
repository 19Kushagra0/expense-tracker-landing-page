import { Suspense } from "react";
import JoinGroup from "./components/Join-group";

export const dynamic = "force-dynamic";

export async function generateMetadata({ searchParams }) {
  const groupName = searchParams?.groupName || "Your Group";

  return {
    title: `${groupName} | Numora`,
    openGraph: {
      title: `${groupName} | Numora`,
      images: [`/api/og/join-group?groupName=${encodeURIComponent(groupName)}`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${groupName} | Numora`,
      images: [`/api/og/join-group?groupName=${encodeURIComponent(groupName)}`],
    },
  };
}
//
export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <JoinGroup />
    </Suspense>
  );
}
