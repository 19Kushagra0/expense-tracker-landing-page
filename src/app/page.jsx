import LandingPage from "@/app/myComponents/landing/landing";

export const metadata = {
  title: "Home | My Website",
  description: "Welcome to my awesome homepage.",
  openGraph: {
    title: "Home | My Website",
    description: "Welcome to my awesome homepage.",
    images: [
      {
        // 👇 updated to match your new OG route
        url: "https://expense-tracker-alpha-lyart.vercel.app/api/og/landingOg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="app">
      <LandingPage />
    </div>
  );
}
