import React from "react";
import JoinGroup from "@/app/join-group/components/Join-group";

export function generateMetadata({ searchParams }) {
  const groupName = searchParams.groupName || "Join our group";

  return {
    title: `${groupName} | Join Group`,
    description: "Add, track, and split expenses with your friends",
    openGraph: {
      title: `${groupName} | Join Group`,
      description: "Add, track, and split expenses with your friends",
      images: [
        {
          url: `https://expense-tracker-alpha-lyart.vercel.app/api/og/join-group?groupName=${encodeURIComponent(
            groupName
          )}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [
        `https://expense-tracker-alpha-lyart.vercel.app/api/og/join-group?groupName=${encodeURIComponent(
          groupName
        )}`,
      ],
    },
  };
}

export default function Page() {
  return <JoinGroup />;
}
