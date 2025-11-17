"use client";
import React, { useState } from "react";
import "@/app/style.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import Navbar from "@/app/myComponents/Navbar/Navbar";
export default function privacy1() {
  const [navBar, setNavBar] = useState(false);

  const showNavBar = () => {
    setNavBar(!navBar);
  };
  return (
    <div className="privacyPage">
      <div className="term-privacy-header">
        <Link href="/">
          <svg
            className="term-privacy-header-image-container"
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
        <div className="term-privacy-header-button-container">
          <Link href="/career" className="term-privacy-header-button">
            Careers
          </Link>
          <Link
            href="/privacy"
            className="terms-privacy-black term-privacy-header-button"
          >
            Privacy
          </Link>
          <Link href="/terms" className="  term-privacy-header-button">
            Terms
          </Link>
        </div>
        <button
          onClick={showNavBar}
          className="term-privacy-header-hamberburger-container"
        >
          <svg
            width="29"
            height="29"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="term-privacy-header-hamberburger"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM2 18C2 17.4477 2.44772 17 3 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18Z"
              fill="#C0C0C0"
            />
          </svg>
        </button>
      </div>
      {navBar ? <Navbar showNavBar={showNavBar} /> : null}
      {/* Title */}
      <div className="terms-privacy-title-container">
        <div className="terms-privacy-title-box">
          <span className="terms-privacy-title">Privacy Policy</span>
          <div className="terms-privacy-time-container">
            <span className="terms-privacy-last-update">Last updated</span>
            <span className="terms-privacy-time">12th Sept, 2025</span>
            <br />
            <div className="terms-privacy-title-container-line"></div>
          </div>
        </div>
      </div>

      <span className="terms-privacy-content-intro2">
        Numora ("we", "our", or "us") is committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, and protect
        information when you use the Numora mobile application and related
        services (collectively, the "App"). Numora is a free personal and split
        expense management app.
      </span>
      {/* Content and index */}
      <div className="terms-privacy-index-content-container">
        {/* Index */}
        <div className="terms-privacy-index-container">
          <div className="terms-privacy-index-box">
            <button
              className="terms-privacy-index"
              onClick={() =>
                document
                  .getElementById("information-we-collect")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="terms-privacy-index-number">1.</span>
              <span className="terms-privacy-index-name">
                Information We Collect
              </span>
            </button>
            <button
              className="terms-privacy-index"
              onClick={() =>
                document
                  .getElementById("use-of-information")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="terms-privacy-index-number">2.</span>
              <span className="terms-privacy-index-name">
                Use of Information
              </span>
            </button>
            <button
              className="terms-privacy-index"
              onClick={() =>
                document
                  .getElementById("data-storage-security")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="terms-privacy-index-number">3.</span>
              <span className="terms-privacy-index-name">
                Data Storage & Security
              </span>
            </button>
            <button
              className="terms-privacy-index"
              onClick={() =>
                document
                  .getElementById("sharing-third-parties")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="terms-privacy-index-number">4.</span>
              <span className="terms-privacy-index-name">
                Sharing & Third Parties
              </span>
            </button>
            <button
              className="terms-privacy-index"
              onClick={() =>
                document
                  .getElementById("your-rights")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="terms-privacy-index-number">5.</span>
              <span className="terms-privacy-index-name">Your Rights</span>
            </button>
            <button
              className="terms-privacy-index"
              onClick={() =>
                document
                  .getElementById("childrens-privacy")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="terms-privacy-index-number">6.</span>
              <span className="terms-privacy-index-name">
                Children’s Privacy
              </span>
            </button>
            <button
              className="terms-privacy-index"
              onClick={() =>
                document
                  .getElementById("changes-to-policy")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="terms-privacy-index-number">7.</span>
              <span className="terms-privacy-index-name">
                Changes to this Policy
              </span>
            </button>
            <button
              className="terms-privacy-index"
              onClick={() =>
                document
                  .getElementById("contact-us")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="terms-privacy-index-number">8.</span>
              <span className="terms-privacy-index-name">Contact Us</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="terms-privacy-content-container">
          <span className="terms-privacy-content-intro">
            Numora ("we", "our", or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            protect information when you use the Numora mobile application and
            related services (collectively, the "App"). Numora is a free
            personal and split expense management app.
          </span>

          <div className="terms-privacy-content-title-text-container">
            {/* 1. Information We Collect */}
            <div
              className="terms-privacy-content-title-text-box"
              id="information-we-collect"
            >
              <span className="terms-privacy-content-title">
                1. Information We Collect
              </span>
              <span className="terms-privacy-content-text">
                We only collect the minimum information necessary to provide the
                App's core functionality.
                <ul className="terms-privacy-custom-list">
                  <li>
                    <span className="terms-privacy-highlight">
                      Account Information:
                    </span>{" "}
                    When you sign in with Google, we use Firebase Authentication
                    to get your basic profile information (name, email address,
                    and profile picture). We do not access any additional Google
                    data beyond this basic profile.
                  </li>
                  <li>
                    <span className="terms-privacy-highlight">
                      Expense Data:
                    </span>{" "}
                    The expenses, categories, notes, and any related fields you
                    manually enter into Numora are stored so you can view, edit,
                    and sync your records across devices.
                  </li>
                </ul>
                We do not collect location, contact lists, payment card numbers,
                or any other sensitive personal information.
              </span>
            </div>

            {/* 2. Use of Information */}
            <div
              className="terms-privacy-content-title-text-box"
              id="use-of-information"
            >
              <span className="terms-privacy-content-title">
                2. Use of Information
              </span>
              <span className="terms-privacy-content-text">
                We use the information we collect only to:
                <ul className="terms-privacy-custom-list">
                  <li>
                    <span className="terms-privacy-highlight">
                      Provide and improve Numora’s expense tracking features.
                    </span>
                  </li>
                  <li>
                    <span className="terms-privacy-highlight">
                      Authenticate you securely via Google Sign-In (Firebase).
                    </span>
                  </li>
                  <li>
                    <span className="terms-privacy-highlight">
                      Store and sync your expense records across your devices.
                    </span>
                  </li>
                </ul>
              </span>
            </div>

            {/* 3. Data Storage & Security */}
            <div
              className="terms-privacy-content-title-text-box"
              id="data-storage-security"
            >
              <span className="terms-privacy-content-title">
                3. Data Storage & Security
              </span>
              <span className="terms-privacy-content-text">
                Your data is stored using Firebase services. We follow
                industry-standard practices to protect your data (encryption in
                transit, access controls, etc.). While we aim to keep your data
                safe, no system can be guaranteed 100% secure — by using Numora,
                you acknowledge this inherent risk.
              </span>
            </div>

            {/* 4. Sharing & Third Parties */}
            <div
              className="terms-privacy-content-title-text-box"
              id="sharing-third-parties"
            >
              <span className="terms-privacy-content-title">
                4. Sharing & Third Parties
              </span>
              <span className="terms-privacy-content-text terms-privacy-gap-10px">
                We do not sell or rent your personal data to third parties. Data
                is only shared in the following limited cases:
                <ul className="terms-privacy-custom-list">
                  <li>
                    <span className="terms-privacy-highlight">
                      Service Providers:
                    </span>{" "}
                    Firebase (Google) provides authentication and database
                    services that Numora depends on to function.
                  </li>
                  <li>
                    <span className="terms-privacy-highlight">Legal:</span> We
                    may disclose information if required by law, subpoena, or
                    other legal process.
                  </li>
                </ul>
              </span>
            </div>

            {/* 5. Your Rights */}
            <div
              className="terms-privacy-content-title-text-box"
              id="your-rights"
            >
              <span className="terms-privacy-content-title">
                5. Your Rights
              </span>
              <span className="terms-privacy-content-text">
                You control the data you add to Numora. You can request a copy
                of your data or request deletion of your account and associated
                data at any time by contacting us. When you delete your account,
                we will remove your personal data from our production systems in
                accordance with our deletion procedures.
              </span>
            </div>

            {/* 6. Children’s Privacy */}
            <div
              className="terms-privacy-content-title-text-box"
              id="childrens-privacy"
            >
              <span className="terms-privacy-content-title">
                6. Children’s Privacy
              </span>
              <span className="terms-privacy-content-text">
                Numora is not intended for children under 13. We do not
                knowingly collect information from children under 13.
              </span>
            </div>

            {/* 7. Changes to this Policy */}
            <div
              className="terms-privacy-content-title-text-box"
              id="changes-to-policy"
            >
              <span className="terms-privacy-content-title">
                7. Changes to this Policy
              </span>
              <span className="terms-privacy-content-text">
                We may update this Privacy Policy occasionally. If we make
                material changes, we'll update the "Last updated" date above.
                Continued use of the App after changes implies acceptance of
                those changes.
              </span>
            </div>

            {/* 8. Contact Us */}
            <div
              className="terms-privacy-content-title-text-box"
              id="contact-us"
            >
              <span className="terms-privacy-content-title">8. Contact Us</span>
              <span className="terms-privacy-content-text">
                If you have questions about this Privacy Policy or wish to
                delete your account, contact us at:{" "}
                <a
                  href="mailto:contact@getnumora.com"
                  className="terms-privacy-highlight terms-privacy-text-decoration"
                >
                  contact@getnumora.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Border */}
      <div className="terms-privacy-line-conatiner">
        <div className="terms-privacy-line"></div>
      </div>
      {/* Footer */}
      <div className="terms-privacy-footer">
        <Link href="/">
          <svg
            className="terms-privacy-numora-icon"
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

        <div className="terms-privacy-footer-button-container">
          <Link
            href="/career"
            className="term-privacy-header-button  terms-privacy-display-none"
          >
            Careers
          </Link>

          <Link
            href="/privacy"
            className="term-privacy-header-button  terms-privacy-black terms-privacy-display-none"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="term-privacy-header-button   terms-privacy-display-none"
          >
            Terms
          </Link>
          <span className="terms-privacy-footer-button-text terms-privacy-trademark-logo">
            © 2025 Numora
          </span>
        </div>
      </div>
    </div>
  );
}
