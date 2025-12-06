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

      <section className="landing-container">
        <div className="landing-content">
          <div className="titleText-and-img-container">
            <div className="landing-title-text">
              <span className="gray">SPEND</span>
              <span className="black">TRACK</span>
              <span className="gray">SPLIT</span>
            </div>

            <div className="hero-img-container">
              <Image src="/images/hero-banner.png"
                alt="App preview screen"
                priority
                className="hero-img"
                width={410}
                height={830}
                style={{ objectFit: "fill" }} />
            </div>
          </div>

          {/* DESKTOP QR and description */}
          <div className="description-and-qr-container">

            <p className="hero-description">
              See where, when,<br />
              with whom and how<br />
              you spend. </p>

            <div className="qr-container">
              <a href="#" aria-label="Download from Apple Store">
                <Image src="/icons/applestore-qr.svg" alt="Apple Store QR"
                  width={112} height={112} /> </a>

              <a href="#" aria-label="Download from Google Play Store">
                <Image src="/icons/playstore-qr.svg" alt="Play Store QR"
                  width={112} height={112} /> </a>
            </div>


            <div className="join-group-button-container">
              <a
                href="https://play.google.com/store/apps/details?id=com.getnumora.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="join-group-button">
                  <div className="join-image-container">
                    <Image
                      className="join-image-icon"
                      src="/icons/apple-svg.svg"
                      alt="apple store"
                      height={15}
                      width={15}

                    />

                    <div className="join-group-image-line"></div>

                    <Image
                      className="join-image-icon"
                      src="/icons/playstore-svg.svg"
                      alt="play store"
                      height={15}
                      width={15}
                    />
                  </div>

                  <span className="join-group-text">Download Numora</span>
                </button>
              </a>
            </div>

          </div>


        </div>

      </section>

    </div>
  );
}
