import JoinGroup from "./components/Join-group";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const groupName = params.groupName || "Your Group";

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
          url:
            groupName && groupName !== "Your Group"
              ? `/api/og/join-group?groupName=${encodeURIComponent(groupName)}`
              : `/api/og/join-group?default=true`,

          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const groupName = params.groupName || "Your Group";

  return <JoinGroup groupName={groupName} />;
}
//
//
//
