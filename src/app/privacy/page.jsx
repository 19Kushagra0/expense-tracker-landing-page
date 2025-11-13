import Privacy from "@/app/privacy/components/Privacy";

export const dynamic = "force-dynamic"; // ✔ required for dynamic OG

export function generateMetadata({ searchParams }) {
  const groupName = searchParams.groupName || "privacyPage";

  return {
    title: "Privacy Policy | My Website",
    description:
      "Read the Privacy Policy for My Website to learn how we collect, use, and protect your personal information.",
    openGraph: {
      title: "Privacy Policy | My Website",
      description:
        "Read the Privacy Policy for My Website to learn how we collect, use, and protect your personal information.",
      url: "https://expense-tracker-alpha-lyart.vercel.app/privacy",
      type: "website",
      images: [
        {
          url: `https://expense-tracker-alpha-lyart.vercel.app/api/og?groupName=${groupName}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function page() {
  return (
    <div>
      <Privacy />
    </div>
  );
}
