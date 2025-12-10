"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Navbar from "@/app/myComponents/Navbar/Navbar";
import Link from "next/link";
import "@/app/myComponents/landing/landing.css";
const inter = Inter({ subsets: ["latin"] });

export default function Landing() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = "auto"; // restore on leaving page
    };
  }, []);

  const [navBar, setNavBar] = useState(false);
  const showNavBar = () => {
    setNavBar(!navBar);
  };

  return (
    <div className={`${inter.className} landing`}>
      {/* <Header showNavBar={toggleNav} />
      {navBar && <Navbar showNavBar={toggleNav} />} */}
      <div className="landing-header">
        <div className="">
          <Link href="/">
            <Image
              className="landing-logo"
              src="/icons/logo.svg"
              alt="App Logo"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div className="headers-links-container">
          {/* <div className="">Carrers</div>
          <div className="headers-links">Privacy</div>
          <div className="headers-links">Terms</div> */}

          <Link href="/career" className="headers-links">
            Careers
          </Link>
          <Link href="/privacy" className="headers-links">
            Privacy
          </Link>
          <Link href="/terms" className="headers-links">
            Terms
          </Link>
        </div>

        <button
          className="hamberger-container"
          onClick={() => {
            showNavBar();
          }}
        >
          <Image
            className="hamberger"
            src="/icons/menu-icon.svg"
            alt="App Logo"
            width={24}
            height={24}
          />
        </button>
      </div>
      {navBar ? <Navbar showNavBar={showNavBar} /> : null}
      <div className="landing-page">
        <div className="landing-page-title-image">
          <div className="landing-page-title-tagLine">
            <div className="landing-page-title">
              <span>SPEND</span>
              <span className="landing-page-title-black ">TRACK</span>
              <span>SPLIT</span>
            </div>
            <div className="landing-page-tagLine left-tag">
              <div className="tag-text   ">
                <span>See where, when,</span>
                <span> with whom and how </span>
                <span>you spend</span>
              </div>
              <div className="landing-page-dowload ">
                <div className="landing-page-icon-line">
                  <Image
                    className="landing-page-icon"
                    src="/icons/apple-svg.svg"
                    alt="My picture"
                    width={500}
                    height={500}
                  />
                  <div className="landing-page-line"></div>
                  <Image
                    className="landing-page-icon"
                    src="/icons/playstore-svg.svg"
                    alt="My picture"
                    width={500}
                    height={500}
                  />
                </div>
                <span>Dowload App</span>
              </div>
            </div>
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
