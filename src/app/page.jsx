import LandingPage from "@/app/myComponents/landing/landing";

export const metadata = {
  title: "Home | My Website",
  description: "Welcome to my  homepage.",
  openGraph: {
    title: "Home | My Website",
    description: "Welcome to my  homepage.",
    images: [
      {
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
