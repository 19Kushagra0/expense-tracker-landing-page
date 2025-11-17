"use client";

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

  // Avoid body class manipulation if possible. If needed:
  useEffect(() => {
    document.body.classList.add("landing-page-active");
    return () => document.body.classList.remove("landing-page-active");
  }, []);

  return (
    <div className={`${inter.className} outer`}>
      <Header showNavBar={toggleNav} />
      {navBar && <Navbar showNavBar={toggleNav} />}

      <section className="landing-page">
        <div className="left-landing">

          {/* LEFT TEXT */}
          <div className="title-text">
            <span className="gray">SPEND</span>
            <span className="black">TRACK</span>
            <span className="gray">SPLIT</span>
          </div>

          {/* HERO IMAGE */}
          <div className="img-container-outer">
            <div className="hero-img-container">
              <Image
                src="/images/hero-banner.png"
                alt="App preview screen"
                priority
                fill
                className="hero-img"
                sizes="(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 360px"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <aside className="right-landing">

            {/* HERO DESCRIPTION */}
            <p className="hero-description">
              See where, when,<br />
              with whom and how<br />
              you spend.
            </p>

            {/* DESKTOP QR */}
            <div className="qr-container">
              <a href="#" aria-label="Download from Apple Store">
                <Image
                  src="/icons/applestore-qr.svg"
                  alt="Apple Store QR"
                  width={112}
                  height={112}
                />
              </a>

              <a href="#" aria-label="Download from Google Play Store">
                <Image
                  src="/icons/playstore-qr.svg"
                  alt="Play Store QR"
                  width={112}
                  height={112}
                />
              </a>
            </div>

            {/* MOBILE STORE BUTTON */}
            <a
              href="#"
              className="store-icons-container"
              aria-label="Download mobile app"
            >
              <div className="store-icons">
                <Image
                  src="/icons/apple-svg.svg"
                  alt="Apple Store"
                  height={15}
                  width={15}
                  className="apple-icon"
                />

                <div className="divider" />

                <Image
                  src="/icons/playstore-svg.svg"
                  alt="Google Play Store"
                  height={15}
                  width={15}
                  className="playstore-icon"
                />

                <span>Download App</span>
              </div>
            </a>
          </aside>
        </div>
      </section>
    </div>
  );
}
