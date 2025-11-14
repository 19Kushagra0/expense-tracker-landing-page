import { Suspense } from "react";
import JoinGroup from "@/app/join-group/components/Join-group";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ searchParams }) {
  const groupName = searchParams.groupName || "Join our group";

  // Same t parameter from URL (for WhatsApp cache busting)
  const t = searchParams.t || Date.now();

  // Dynamic OG image URL
  const ogImage = `https://expense-tracker-alpha-lyart.vercel.app/api/og/join-group?groupName=${encodeURIComponent(
    groupName
  )}&t=${t}`;

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

export default function Page() {
  return (
    <Suspense fallback={null}>
      <JoinGroup />
    </Suspense>
  );
}
