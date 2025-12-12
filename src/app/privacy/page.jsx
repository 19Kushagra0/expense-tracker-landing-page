import React from "react";
import Privacy from "@/app/privacy/components/Privacy";

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
        // 👇 updated to match your new OG route
        url: "https://expense-tracker-alpha-lyart.vercel.app/api/og/privacyOg",
        width: 1200,
        height: 630,
      },
    ],
  },
};
export default function Page() {
  return (
    <div>
      <Privacy />
    </div>
  );
}
