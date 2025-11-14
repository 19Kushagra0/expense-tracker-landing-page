import JoinGroup from "@/app/join-group/components/Join-group";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ searchParams }) {
  const groupName = searchParams.groupName || "Join our group";

  const ogUrl = `/api/og/join-group?groupName=${encodeURIComponent(groupName)}`;

  return {
    title: `${groupName} | Join Group`,
    description: "Add, track, and split expenses with your friends",
    openGraph: {
      title: `${groupName} | Join Group`,
      description: "Add, track, and split expenses with your friends",
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogUrl],
    },
  };
}

export default function Page({ searchParams }) {
  const groupName = searchParams.groupName || "Join our group";

  return <JoinGroup groupName={groupName} />;
}
