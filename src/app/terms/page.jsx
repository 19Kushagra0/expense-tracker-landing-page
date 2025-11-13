import React from "react";
import Terms from "@/app/terms/components/Terms";
import Header from "../myComponents/Header/Header";

export const metadata = {
  title: "Home | My Website",
  description: "Welcome to my awesome homepage.",
  openGraph: {
    title: "Home | My Website",
    description: "Welcome to my awesome homepage.",
    images: [
      {
        url: "https://expense-tracker-alpha-lyart.vercel.app/api/og", // dynamic OG URL
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function page() {
  return (
    <div>
      <Terms />
    </div>
  );
}
