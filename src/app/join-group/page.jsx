import JoinGroup from "./components/Join-group";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const groupName = params.groupName || "Your Group";

  return {
    openGraph: {
      images: [
        {
          url: `/api/og/join-group?groupName=${groupName}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function Page({ searchParams }) {
  const params = await searchParams; // ⬅️ FIX
  const groupName = params.groupName || "Your Group";

  return <JoinGroup groupName={groupName} />;
}
//
//
//
