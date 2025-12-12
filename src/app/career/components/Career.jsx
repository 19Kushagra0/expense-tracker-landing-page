"use client";
import React, { useState } from "react";
import "@/app/career/components/Career.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/myComponents/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });
const Career = () => {
  const [navBar, setNavBar] = useState(false);
  const showNavBar = () => {
    setNavBar(!navBar);
  };

  return (
    <div className={`${inter.className} career-container`}>
      <div className="landing-header">
        <div className="white">
          <Link className="white" href="/">
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
          <Link href="/career" className="headers-links   career-black">
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
      <div className="career-box">
        {/*  */}
        <div className="career-functional-box">
          <div className="career-functional-text-input">
            <div className="career-functional-text">
              Add any link of images or PDF or literally anything to help us
              understand your best
            </div>
            <div className="career-input-button">
              <input
                placeholder="Paste your link here"
                className="career-input"
                type="text"
              />
              <button className="career-button-text">submit</button>
            </div>
          </div>
          <button className="career-functional-button">
            <div className="career-functional-image-container">
              <Image
                className="career-functional-button-image"
                src="/career-icons/add-icon.svg" // file must be inside /public
                width={200}
                height={60}
                alt="Play Store"
              />
            </div>
          </button>
        </div>
        {/*  */}
      </div>
      <div className="career-line-conatiner">
        <div className="career-line"></div>
      </div>
      <div className="career-footer">
        <Link className="white" href="/">
          <svg
            className="career-numora-icon"
            height={36}
            width={36}
            viewBox="0 0 35 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2188 1.14714C15.868 -0.38238 19.132 -0.38238 21.7812 1.14714L30.7188 6.30733C33.368 7.83685 35 10.6635 35 13.7226V24.0428C35 27.1018 33.368 29.9285 30.7188 31.4581L21.7812 36.6182C19.6801 37.8313 17.1924 38.082 14.9313 37.3709V18.3261C14.9313 14.9923 12.2286 12.2896 8.89478 12.2896C5.56092 12.2896 2.85829 14.9923 2.85829 18.3261V30.4284C1.06016 28.8223 0 26.5081 0 24.0428V13.7226C0 10.6635 1.63199 7.83685 4.2812 6.30733L13.2188 1.14714Z"
              fill="black"
            />
          </svg>
        </Link>

        <div className="footer-links-container">
          <Link
            href="/career"
            className="footer-links   career-display-none   career-black"
          >
            Careers
          </Link>

          <Link href="/privacy" className="footer-links  career-display-none">
            Privacy
          </Link>
          <Link href="/terms" className="footer-links    career-display-none">
            Terms
          </Link>
          <span className="career-trademark-logo  ">© 2025 Numora</span>
        </div>
      </div>
    </div>
  );
};

export default Career;
