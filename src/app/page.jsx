import LandingPage from "@/app/myComponents/landing/landing";

export const metadata = {
  title: "Home | My Website",
  description: "Welcome to my awesome homepage.",
  openGraph: {
    title: "Home | My Website",
    description: "Welcome to my awesome homepage.",
    images: [
      {
        url: "https://my-app.vercel.app/api/og", // dynamic OG URL
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
