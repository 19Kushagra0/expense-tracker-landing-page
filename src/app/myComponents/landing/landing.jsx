"use client";
import { React, useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import "@/app/myComponents/landing/landing.css";
import Header from "@/app/myComponents/Header/Header.jsx";
import Navbar from "../Navbar/Navbar";

export default function Landing() {
  const [navBar, setNavBar] = useState(false);

  const showNavBar = () => {
    setNavBar(!navBar);
  };
  useEffect(() => {
    document.body.classList.add("landing-page-active");
    return () => {
      document.body.classList.remove("landing-page-active");
    };
  }, []);

  return (
    <div className="outer">
      <Header showNavBar={showNavBar} />
      {navBar ? <Navbar showNavBar={showNavBar} /> : null}
      <section className="landing-page">
        {/* LEFT SECTION */}
        <div className="left-landing">
          <div className="title-text">
            <span className="gray">SPEND</span>
            <span className="black">TRACK</span>
            <span className="gray">SPLIT</span>
          </div>

          <div className="hero-img-container">
            <Image
              className="hero-img"
              src="/images/hero-banner.png"
              alt="banner-img"
              width={377}
              height={815}
              sizes="(max-width: 768px) 80vw, (max-width: 128s0px) 40vw, 360px"
              // priority
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="right-landing">
          <p className="hero-description">
            <span>See where, when,</span> <br />
            <span>with whom and how</span> <br />
            <span>you spend</span>
          </p>

          <div className="qr-container">
            <div className="qr-apple">
              <Image
                src="/icons/applestore-qr.svg"
                alt="apple store"
                width={128}
                height={128}
              />
            </div>
            <div className="qr-play-store">
              <Image
                src="/icons/playstore-qr.svg"
                alt="play store"
                width={128}
                height={128}
              />
            </div>
          </div>

          <div className="store-icons-container">
            <div className="store-icons">
              <div className="apple-icon">
                <Image
                  src="/icons/apple-svg.svg"
                  alt="apple store"
                  height={18}
                  width={18}
                />
              </div>
              <div className="divider"></div>
              <div className="playstore-icon">
                <Image
                  src="/icons/playstore-svg.svg"
                  alt="play store"
                  height={18}
                  width={18}
                />
              </div>
              <p>Download App</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
