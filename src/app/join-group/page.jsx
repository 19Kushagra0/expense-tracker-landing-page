import { Suspense } from "react";
import JoinGroup from "@/app/join-group/components/Join-group";

export async function generateMetadata({ searchParams }) {
  const groupName = searchParams.groupName || "Join our group";

  // OG image without version param
  const ogImage = `https://expense-tracker-alpha-lyart.vercel.app/api/og/join-group?groupName=${encodeURIComponent(
    groupName
  )}`;

  return {
    title: `${groupName} | Join Group`,
    description: "Add, track, and split expenses with your friends",
    openGraph: {
      title: `${groupName} | Join Group`,
      description: "Add, track, and split expenses with your friends",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
  };
}

export default function Page({ searchParams }) {
  return (
    <Suspense fallback={null}>
      <JoinGroup groupName={searchParams.groupName} />
    </Suspense>
  );
}
