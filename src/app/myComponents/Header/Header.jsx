import React from "react";
import "@/app/myComponents/Header/Header.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

export const inter = Inter({
  subsets: ["display"],
});
export default function Header({ showNavBar }) {
  return (
    <header className="header">
      <div className="left-header">
        <div className="logo">
          <Image
            src="/icons/logo.svg"
            alt="play store"
            height={36}
            width={36}
          />
        </div>
      </div>

      <div className="right-header">
        <Link href="/career" className="careers">
          Careers
        </Link>
        <Link href="/privacy" className="privacy">
          Privacy
        </Link>
        <Link href="/terms" className="terms">
          Terms
        </Link>
        <div onClick={showNavBar} className="menu-btn">
          <Image
            src="/icons/menu-icon.svg"
            alt="apple store"
            height={24}
            width={24}
          />
        </div>
      </div>
    </header>
  );
}
