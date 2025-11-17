import Terms from "@/app/terms/components/Terms";

export const dynamic = "force-dynamic"; // MUST for reading searchParams

export async function generateMetadata({ searchParams }) {
  const params = await searchParams; // ⭐ REQUIRED FIX
  const groupName = params.groupName || "termsPage";

  return {
    title: "Terms of Service | My Website",
    description:
      "Read the Terms of Service for My Website to understand your rights, responsibilities, and how we handle your data.",
    openGraph: {
      title: "Terms of Service | My Website",
      description:
        "Read the Terms of Service for My Website to understand your rights, responsibilities, and how we handle your data.",
      url: "https://expense-tracker-alpha-lyart.vercel.app/terms",
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

export default function Page() {
  return (
    <div>
      <Terms />
    </div>
  );
}
//
