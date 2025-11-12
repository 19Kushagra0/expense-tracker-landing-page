"use client";
import React, { useEffect, useState } from "react";
import "@/app/myComponents/Navbar/Navbar.css";
import Link from "next/link";

export default function Navbar({ showNavBar }) {
  const [isClosing, setIsClosing] = useState(false);

  // Prevent body scroll when navbar is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, []);

  // Handle ESC key to close navbar
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  });

  // Handle close with animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      showNavBar();
    }, 500); // match with CSS animation duration
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        onClick={handleClose}
        className={`navbar-cover ${isClosing ? "cover-closing" : ""}`}
        aria-hidden="true"
      />

      {/* Navigation panel */}
      <nav
        className={`navbar ${isClosing ? "nav-closing" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="back-button"
          aria-label="Close navigation menu"
        >
          <svg
            className="back-image"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
          >
            <polyline
              points="244 400 100 256 244 112"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <line
              x1="120"
              y1="256"
              x2="412"
              y2="256"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        </button>
        {/* Navigation links */}
        <div className="navbar-links">
          <Link onClick={handleClose} href="/career" className="navbar-button">
            Careers
          </Link>
          <Link onClick={handleClose} href="/privacy" className="navbar-button">
            Privacy
          </Link>
          <Link onClick={handleClose} href="/terms" className="navbar-button">
            Terms
          </Link>
        </div>
        {/* Footer */}
        {/* <div className="navbar-footer">
          <p className="navbar-footer-text">
            © 2024 Your Company. All rights reserved.
          </p>
        </div> */}
      </nav>
    </>
  );
}
