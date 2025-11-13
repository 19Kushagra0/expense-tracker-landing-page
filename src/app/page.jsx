import LandingPage from "@/app/myComponents/landing/landing";

export const dynamic = "force-dynamic"; // ⭐ REQUIRED ⭐

export function generateMetadata({ searchParams }) {
  const groupName = searchParams.groupName || "landingPage";

  return {
    title: "Home | My Website",
    description: "Welcome to my homepage.",
    openGraph: {
      title: "Home | My Website",
      description: "Welcome to my homepage.",
      url: "https://expense-tracker-alpha-lyart.vercel.app/",
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

export default function Home() {
  return (
    <div className="app">
      <LandingPage />
    </div>
  );
}
