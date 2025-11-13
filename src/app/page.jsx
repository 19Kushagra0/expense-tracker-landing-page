import Image from "next/image";
import LandingPage from "@/app/myComponents/landing/landing";
export const metadata = {
  title: "Home | My Website",
  description: "Welcome to my awesome homepage.",
  openGraph: {
    title: "Home | My Website",
    description: "Welcome to my awesome homepage.",
    images: [
      {
        url: "/images/og-landing.png", // image path
        width: 1918, // your custom width
        height: 968, // your custom height
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
