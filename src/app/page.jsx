import Image from "next/image";
import LandingPage from "@/app/myComponents/landing/landing";
export const metadata = {
  title: "Home | My Website",
  description: "Welcome to my awesome homepage.",
  openGraph: {
    title: "Home | My Website",
    description: "Welcome to my awesome homepage.",
    images: ["/images/og-landing.png"],
  },
};
export default function Home() {
  return (
    <div className="app">
      <LandingPage />
    </div>
  );
}
