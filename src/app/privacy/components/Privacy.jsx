import React from "react";
import "@/app/style.css";
import Link from "next/link";
export default function privacy1() {
  return (
    <div className="privacyPage">
      {/* Title */}
      <div className="title-container">
        <div className="title-box">
          <span className="title">Privacy Policy</span>
          <div className="time-container">
            <span className="last-update">Last updated</span>
            <span className="time">12th Sept, 2025</span>
          </div>
        </div>
      </div>
      <span className="content-intro2">
        Numora ("we", "our", or "us") is committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, and protect
        information when you use the Numora mobile application and related
        services (collectively, the "App"). Numora is a free personal and split
        expense management app.
      </span>
      {/* Content and index */}
      <div className="index-content-container">
        {/* Content */}
        <div className="index-container">
          <button className="index">
            <span className="index-number">1.</span>
            <span className="index-name">Information we collect</span>
          </button>
          <button className="index">
            <span className="index-number black">2.</span>
            <span className="index-name black">Use of Information</span>
          </button>
          <button className="index">
            <span className="index-number">3.</span>
            <span className="index-name">Data Storage & Security</span>
          </button>
          <button className="index">
            <span className="index-number">4.</span>
            <span className="index-name">Sharing & Third Parties</span>
          </button>
          <button className="index">
            {" "}
            <span className="index-number">5.</span>
            <span className="index-name">Your Rights</span>
          </button>
          <button className="index">
            {" "}
            <span className="index-number">6.</span>
            <span className="index-name">Children’s Privacy</span>
          </button>
          <button className="index">
            <span className="index-number">7.</span>
            <span className="index-name">Changes to this Policy</span>
          </button>
          <button className="index">
            <span className="index-number">8.</span>
            <span className="index-name">Contact Us</span>
          </button>
        </div>
        {/* Index */}
        <div className="content-conatiner">
          <span className="content-intro">
            Numora ("we", "our", or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            protect information when you use the Numora mobile application and
            related services (collectively, the "App"). Numora is a free
            personal and split expense management app.
          </span>
          <div className="content-title-text-container">
            <div className="content-title-text-box">
              <span className="content-title">1. Information We Collect</span>
              <span className="content-text">
                We only collect the minimum information necessary to provide the
                App's core functionality.
                <ul className="custom-list ">
                  <li>
                    <span className="highlight">Account Information:</span> When
                    you sign in with Google we use Firebase Authenticationto get
                    your basic profile information (name, email address and
                    profile picture). We do not access any additional Google
                    data beyond this basic profile.
                  </li>
                  <li>
                    <span className="highlight">Expense Data:</span>
                    The expenses, categories, notes and any related fields you
                    manually enter into Numora are stored so you can view, edit
                    and sync your records across devices.
                  </li>
                </ul>
                We do not collect location, contact lists, payment card numbers,
                or any other sensitive personal information.
              </span>
            </div>
            <div className="content-title-text-box">
              <span className="content-title">2. Use of Information</span>
              <span className="content-text">
                We use the information we collect only to:
                <ul className="custom-list ">
                  <li>
                    <span className="highlight">
                      Provide and improve Numora’s expense tracking features.
                    </span>
                  </li>

                  <li>
                    <span className="highlight">
                      Authenticate you securely via Google Sign-In (Firebase).
                    </span>
                  </li>

                  <li>
                    {" "}
                    <span className="highlight">
                      Store and sync your expense records across your devices.
                    </span>
                  </li>
                </ul>
              </span>
            </div>
            <div className="content-title-text-box">
              <span className="content-title">3.  Data Storage & Security</span>
              <span className="content-text">
                Your data is stored using Firebase services. We follow
                industry-standard practices to protect your data (encryption in
                transit, access controls, etc.). While we aim to keep your data
                safe, no system can be guaranteed 100% secure — by using Numora
                you acknowledge this inherent risk.
              </span>
            </div>
            <div className="content-title-text-box">
              <span className="content-title">4.Sharing & Third Parties</span>
              <span className="content-text gap-10px ">
                We do not sell or rent your personal data to third parties. Data
                is only shared in the following limited cases:
                <ul className="custom-list ">
                  <li>
                    <span className="highlight">Service providers:</span>{" "}
                    Firebase (Google) provides authentication and database
                    services that Numora depends on to function.
                  </li>
                  <li>
                    <span className="highlight">Legal: </span>
                    We may disclose information if required by law, subpoena, or
                    other legal process.
                  </li>
                </ul>
              </span>
            </div>
            <div className="content-title-text-box">
              <span className="content-title">5. Your Rights</span>
              <span className="content-text">
                You control the data you add to Numora. You can request a copy
                of your data or request deletion of your account and associated
                data at any time by contacting us. When you delete your account,
                we will remove your personal data from our production systems in
                accordance with our deletion procedures.
              </span>
            </div>
            <div className="content-title-text-box">
              <span className="content-title">6. Children’s Privacy</span>
              <span className="content-text">
                Numora is not intended for children under 13. We do not
                knowingly collect information from children under 13.
              </span>
            </div>
            <div className="content-title-text-box">
              <span className="content-title">7. Changes to this Policy</span>
              <span className="content-text">
                We may update this Privacy Policy occasionally. If we make
                material changes we'll update the "Last updated" date above.
                Continued use of the App after changes implies acceptance of
                those changes.
              </span>
            </div>
            <div className="content-title-text-box">
              <span className="content-title">8. Contact Us</span>
              <span className="content-text">
                If you have questions about these Terms or wish to delete your
                account, contact us at:
                <span className="highlight text-decoration ">
                  contact@getnumora.com
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Border */}
      <div className="line-conatiner">
        <div className="line"></div>
      </div>
      {/* Footer */}
      <div className="footer">
        <svg
          className="numora-icon"
          width="35"
          height="38"
          viewBox="0 0 35 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2188 1.14714C15.868 -0.38238 19.132 -0.38238 21.7812 1.14714L30.7188 6.30733C33.368 7.83685 35 10.6635 35 13.7226V24.0428C35 27.1018 33.368 29.9285 30.7188 31.4581L21.7812 36.6182C19.6801 37.8313 17.1924 38.082 14.9313 37.3709V18.3261C14.9313 14.9923 12.2286 12.2896 8.89478 12.2896C5.56092 12.2896 2.85829 14.9923 2.85829 18.3261V30.4284C1.06016 28.8223 0 26.5081 0 24.0428V13.7226C0 10.6635 1.63199 7.83685 4.2812 6.30733L13.2188 1.14714Z"
            fill="black"
          />
        </svg>
        <div className="footer-button-container">
          <button className="footer-button-text"> Careers</button>

          <Link href="/privacy" className="footer-button-text black">
            Privacy
          </Link>
          <Link href="/" className="footer-button-text ">
            Terms
          </Link>

          <span className="footer-button-text">© 2025 Numora</span>
        </div>
      </div>
    </div>
  );
}
