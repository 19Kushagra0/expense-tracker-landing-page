"use client";
//
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

import Header from "@/app/myComponents/Header/Header";
import Navbar from "../Navbar/Navbar";

import "@/app/myComponents/landing/landing.css";
const inter = Inter({ subsets: ["latin"] });

export default function Landing() {
  const [navBar, setNavBar] = useState(false);
  const toggleNav = () => setNavBar((prev) => !prev);

  return (
    <div className={`${inter.className} landing`}>
      {/* <Header showNavBar={toggleNav} />
      {navBar && <Navbar showNavBar={toggleNav} />} */}
      <div className="landing-header">
        <div className="">
          <div className="landing-logo"></div>
        </div>
        <div className="headers-links-container">
          <div className="headers-links">Carrers</div>
          <div className="headers-links">Privacy</div>
          <div className="headers-links">Terms</div>
        </div>
      </div>
      <div className="landing-page">
        <div className="landing-page-title-image">
          <div className="landing-page-title">
            <span>SPEND</span>
            <span>TRACK</span>
            <span>SPLIT</span>
          </div>
          <picture className="landing-page-image">
            {/* 1800px and above */}
            <source srcSet="/images/largest.svg" media="(min-width: 1800px)" />

            {/* 1440px and above */}
            <source srcSet="/images/large.svg" media="(min-width: 1440px)" />

            {/* 1280px and above */}
            <source srcSet="/images/medium.svg" media="(min-width: 1280px)" />

            {/* 800px and above */}
            <source srcSet="/images/small.svg" media="(min-width: 800px)" />

            {/* fallback */}
            <img src="/images/small.svg" alt="Landing image" />
          </picture>
        </div>

        <div className="landing-page-tagLine-qr">
          <div className="landing-page-tagLine">
            <div className="tag-text">
              <span>See where, when,</span>
              <span> with whom and how </span>
              <span>you spend</span>
            </div>
          </div>
          <div className="landing-page-tagLine-qr-container">
            <Image
              className="landing-page-tagLine-qr-image1"
              src="/images/playStore.svg"
              alt="Play Store"
              width={200}
              height={200}
            />
            <Image
              className="landing-page-tagLine-qr-image2"
              src="/images/apple.svg"
              alt="Play Store"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
