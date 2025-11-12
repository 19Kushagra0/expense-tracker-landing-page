"use client";
import React, { useState } from "react";
import "@/app/myComponents/Navbar/Navbar.css";
import Link from "next/link";

export default function navbar({ showNavBar }) {
  return (
    <div className="">
      <div className="navbar">
        <div onClick={showNavBar} className="navbar-button back-button ">
          <svg
            className="back-image"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <polyline
              points="244 400 100 256 244 112"
              fill="none"
              stroke="white"
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth="48"
            />
            <line
              x1="120"
              y1="256"
              x2="412"
              y2="256"
              fill="none"
              stroke="white"
              strokeLinecap="square"
              strokeMiterlimit="10"
              strokeWidth="48"
            />
          </svg>
        </div>
        <Link onClick={showNavBar} href="/" className="navbar-button">
          Careers
        </Link>
        <Link onClick={showNavBar} href="/privacy" className="navbar-button">
          Privacy
        </Link>
        <Link onClick={showNavBar} href="/terms" className="navbar-button">
          Terms
        </Link>
      </div>
      <div onClick={showNavBar} className="navbar-cover"></div>
    </div>
  );
}
