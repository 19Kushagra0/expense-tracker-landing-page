import JoinGroup from "./components/Join-group";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;

  // ⬇ New default name so Instagram treats it as dynamic invite (fixes 1:1 square)
  const groupName = params.groupName || "Join the Group";

  const title = `${groupName} - Numora`;
  const description = "Add, track, and split expenses with your friends";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://www.getnumora.com/join-group",
      type: "website",
      images: [
        {
          // ⬇ v=3 forces Instagram to refresh to new OG (don't remove version)
          url: `/api/og/join-group?groupName=${groupName}&v=3`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function Page({ searchParams }) {
  const params = await searchParams;

  // ⬇ Must match the same default above
  const groupName = params.groupName || "Join the Group";

  return <JoinGroup groupName={groupName} />;
}
