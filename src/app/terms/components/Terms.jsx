"use client";
import React, { useState } from "react";
import "@/app/style.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import Navbar from "@/app/myComponents/Navbar/Navbar";
export default function Terms() {
  const [navBar, setNavBar] = useState(false);

  const showNavBar = () => {
    setNavBar(!navBar);
  };
  return (
    <div className="termsPage">
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
          <Link href="/privacy" className="term-privacy-header-button">
            Privacy
          </Link>
          <Link
            href="/terms"
            className="terms-privacy-black  term-privacy-header-button"
          >
            Terms
          </Link>
        </div>
        <button
          onClick={() => {
            showNavBar();
          }}
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
          <span className="terms-privacy-title">Terms of Service</span>
          <div className="terms-privacy-time-container">
            <span className="terms-privacy-last-update">Last updated</span>
            <span className="terms-privacy-time">12th Sept, 2025</span>
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
          <button
            className="terms-privacy-index"
            onClick={() => {
              document
                .getElementById("using-numora")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="terms-privacy-index-number">1.</span>
            <span className="terms-privacy-index-name">Using Numora</span>
          </button>
          <button
            className="terms-privacy-index"
            onClick={() => {
              document
                .getElementById("account-authentication")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="terms-privacy-index-number">2.</span>
            <span className="terms-privacy-index-name">
              Account & Authentication
            </span>
          </button>
          <button
            className="terms-privacy-index"
            onClick={() => {
              document
                .getElementById("user-content")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="terms-privacy-index-number">3.</span>
            <span className="terms-privacy-index-name">User Content</span>
          </button>
          <button
            className="terms-privacy-index"
            onClick={() => {
              document
                .getElementById("prohibited-conduct")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="terms-privacy-index-number">4.</span>
            <span className="terms-privacy-index-name">Prohibited Conduct</span>
          </button>
          <button
            className="terms-privacy-index"
            onClick={() => {
              document
                .getElementById("disclaimer-of-warranties")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="terms-privacy-index-number">5.</span>
            <span className="terms-privacy-index-name">
              Disclaimer of Warranties
            </span>
          </button>
          <button
            className="terms-privacy-index"
            onClick={() => {
              document
                .getElementById("limitations-of-liability")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="terms-privacy-index-number">6.</span>
            <span className="terms-privacy-index-name">
              Limitations of Liability
            </span>
          </button>
          <button
            className="terms-privacy-index"
            onClick={() => {
              document
                .getElementById("account-termination")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="terms-privacy-index-number">7.</span>
            <span className="terms-privacy-index-name">
              Account Termination
            </span>
          </button>
          <button
            className="terms-privacy-index"
            onClick={() => {
              document
                .getElementById("changes-to-terms")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="terms-privacy-index-number">8.</span>
            <span className="terms-privacy-index-name">
              Changes to the Terms
            </span>
          </button>
          <button
            className="terms-privacy-index"
            onClick={() => {
              document
                .getElementById("governing-law")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="terms-privacy-index-number">9.</span>
            <span className="terms-privacy-index-name">Governing Law</span>
          </button>
          <button
            className="terms-privacy-index"
            onClick={() => {
              document
                .getElementById("contact-us")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="terms-privacy-index-number">10.</span>
            <span className="terms-privacy-index-name">Contact Us</span>
          </button>
        </div>

        {/* Content */}
        <div className="terms-privacy-content-container">
          <div className="terms-privacy-content-title-text-container">
            {/* 1. Using Numora */}
            <div
              className="terms-privacy-content-title-text-box"
              id="using-numora"
            >
              <span className="terms-privacy-content-title">
                1. Using Numora
              </span>
              <span className="terms-privacy-content-text">
                Numora is a free personal and split expense management app. You
                must be at least 13 years old to use the App. You are
                responsible for keeping your account credentials secure. We are
                not responsible for any loss or damage from unauthorized access
                to your account.
              </span>
            </div>

            {/* 2. Account & Authentication */}
            <div
              className="terms-privacy-content-title-text-box"
              id="account-authentication"
            >
              <span className="terms-privacy-content-title">
                2. Account & Authentication
              </span>
              <span className="terms-privacy-content-text">
                Numora uses Google Sign-In via Firebase Authentication. By
                signing in, you authorize us to access basic profile information
                (name, email, profile picture) provided by Google for
                authentication purposes.
              </span>
            </div>

            {/* 3. User Content */}
            <div
              className="terms-privacy-content-title-text-box"
              id="user-content"
            >
              <span className="terms-privacy-content-title">
                3. User Content
              </span>
              <span className="terms-privacy-content-text">
                You are solely responsible for the expense entries and other
                content you add to Numora. You warrant that you have the right
                to submit such content and that it does not violate any
                applicable laws or the rights of third parties.
              </span>
            </div>

            {/* 4. Prohibited Conduct */}
            <div
              className="terms-privacy-content-title-text-box"
              id="prohibited-conduct"
            >
              <span className="terms-privacy-content-title">
                4. Prohibited Conduct
              </span>
              <span className="terms-privacy-content-text terms-privacy-gap-10px">
                When using Numora you agree not to:
                <ul className="terms-privacy-highlight terms-privacy-custom-list">
                  <li>
                    Upload content that is illegal, harmful, or infringes
                    third-party rights.
                  </li>
                  <li>
                    Attempt to access or interfere with other users' accounts.
                  </li>
                  <li>
                    Reverse engineer, decompile, or tamper with the App or its
                    services.
                  </li>
                </ul>
              </span>
            </div>

            {/* 5. Disclaimer of Warranties */}
            <div
              className="terms-privacy-content-title-text-box"
              id="disclaimer-of-warranties"
            >
              <span className="terms-privacy-content-title">
                5. Disclaimer of Warranties
              </span>
              <span className="terms-privacy-content-text">
                Numora is provided "as is" and "as available". We do not
                guarantee the App will be error-free or uninterrupted. To the
                fullest extent permitted by law, we disclaim all warranties,
                express or implied.
              </span>
            </div>

            {/* 6. Limitation of Liability */}
            <div
              className="terms-privacy-content-title-text-box"
              id="limitations-of-liability"
            >
              <span className="terms-privacy-content-title">
                6. Limitation of Liability
              </span>
              <span className="terms-privacy-content-text">
                To the maximum extent permitted by law, Numora and its
                developers will not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising out of your
                use of the App.
              </span>
            </div>

            {/* 7. Account Termination */}
            <div
              className="terms-privacy-content-title-text-box"
              id="account-termination"
            >
              <span className="terms-privacy-content-title">
                7. Account Termination
              </span>
              <span className="terms-privacy-content-text">
                We may suspend or terminate your access to Numora at our
                discretion for violations of these Terms or for any conduct that
                we determine is harmful to other users. You may also delete your
                account at any time by contacting us.
              </span>
            </div>

            {/* 8. Changes to the Terms */}
            <div
              className="terms-privacy-content-title-text-box"
              id="changes-to-terms"
            >
              <span className="terms-privacy-content-title">
                8. Changes to the Terms
              </span>
              <span className="terms-privacy-content-text">
                We may update these Terms occasionally. If we make material
                changes we will update the "Last updated" date above. Continued
                use of the App after changes implies acceptance of the updated
                Terms.
              </span>
            </div>

            {/* 9. Governing Law */}
            <div
              className="terms-privacy-content-title-text-box"
              id="governing-law"
            >
              <span className="terms-privacy-content-title">
                9. Governing Law
              </span>
              <span className="terms-privacy-content-text">
                These Terms are governed by and construed in accordance with the
                laws of the jurisdiction where Numora is operated, without
                regard to conflict of law provisions.
              </span>
            </div>

            {/* 10. Contact Us */}
            <div
              className="terms-privacy-content-title-text-box"
              id="contact-us"
            >
              <span className="terms-privacy-content-title">
                10. Contact Us
              </span>
              <span className="terms-privacy-content-text">
                If you have questions about these Terms or wish to delete your
                account, contact us at:
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
        <div className="terms-privacy-footer-button-container ">
          <Link
            href="/career"
            className="term-privacy-header-button terms-privacy-display-none"
          >
            Careers
          </Link>

          <Link
            href="/privacy"
            className="term-privacy-header-button terms-privacy-display-none "
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="term-privacy-header-button terms-privacy-black terms-privacy-display-none"
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
