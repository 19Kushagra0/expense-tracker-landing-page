import React from "react";
import Privacy from "./components/Privacy";
import Header from "../myComponents/Header/Header";

export const metadata = {
  title: "Privacy Policy | My Website",
  description:
    "Read the Privacy Policy for My Website to learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | My Website",
    description:
      "Read the Privacy Policy for My Website to learn how we collect, use, and protect your personal information.",
    images: [
      {
        url: "https://expense-tracker-alpha-lyart.vercel.app/api/og/privacyOg", // ✅ your OG Privacy image route
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function page() {
  return (
    <div>
      <Privacy />
    </div>
  );
}
