import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import "@/app/myComponents/landing/landing.css";
import Header from "@/app/myComponents/Header/Header.jsx";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="outer">
      <Header />

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
                src="/images/apple-qr.png"
                alt="apple store"
                width={128}
                height={128}
              />
            </div>
            <div className="qr-play-store">
              <Image
                src="/images/qr-playstore.png"
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
