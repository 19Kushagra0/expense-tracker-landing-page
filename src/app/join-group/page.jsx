export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

import React, { Suspense } from "react";
import JoinGroup from "@/app/join-group/components/Join-group";

export function generateMetadata({ searchParams }) {
  const groupName = searchParams.groupName || "Join our group";
  const version = Date.now(); // cache-buster

  const img = `https://expense-tracker-alpha-lyart.vercel.app/api/og/join-group?groupName=${encodeURIComponent(
    groupName
  )}&v=${version}`;

  return {
    title: `${groupName} | Join Group`,
    description: "Add, track, and split expenses with your friends",
    openGraph: {
      title: `${groupName} | Join Group`,
      description: "Add, track, and split expenses with your friends",
      images: [{ url: img, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      images: [img],
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div />}>
      <JoinGroup />
    </Suspense>
  );
}
