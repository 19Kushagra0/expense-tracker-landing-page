import { Suspense } from "react";
import JoinGroup from "./components/Join-group";

export const dynamic = "force-dynamic";

export async function generateMetadata(_, parent) {
  const url = new URL(parent.url);
  const groupName = url.searchParams.get("groupName") || "Your Group";

  const baseUrl = "https://expense-tracker-alpha-lyart.vercel.app";

  const baseUrl = "https://expense-tracker-alpha-lyart.vercel.app";

  return {
    title: `${groupName} | Numora`,
    openGraph: {
      title: `${groupName} | Numora`,
      images: [
        `${baseUrl}/api/og/join-group?groupName=${encodeURIComponent(
          groupName
        )}`,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${groupName} | Numora`,
      images: [
        `${baseUrl}/api/og/join-group?groupName=${encodeURIComponent(
          groupName
        )}`,
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
