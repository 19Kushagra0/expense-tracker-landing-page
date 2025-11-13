import React from "react";
import Terms from "@/app/terms/components/Terms";
import Header from "../myComponents/Header/Header";

export const metadata = {
  title: "Terms of Service | My Website",
  description:
    "Read the Terms of Service for My Website to understand your rights, responsibilities, and how we handle your data.",
  openGraph: {
    title: "Terms of Service | My Website",
    description:
      "Read the Terms of Service for My Website to understand your rights, responsibilities, and how we handle your data.",
    images: [
      {
        url: "https://expense-tracker-alpha-lyart.vercel.app/api/og/termOg",
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
