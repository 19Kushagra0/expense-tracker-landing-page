import React from "react";
import "@/app/style.css";
import Link from "next/link";
export default function Terms() {
  return (
    <div className="termsPage">
      {/* Title */}
      <div className="title-container">
        <div className="title-box">
          <span className="title">Terms of Service</span>
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
            <span className="index-name">Using Numora</span>
          </button>
          <button className="index">
            <span className="index-number black">2.</span>
            <span className="index-name black">Account & Authentication</span>
          </button>
          <button className="index">
            <span className="index-number">3.</span>
            <span className="index-name">User Content</span>
          </button>
          <button className="index">
            <span className="index-number">4.</span>
            <span className="index-name">Prohibited Conduct</span>
          </button>
          <button className="index">
            {" "}
            <span className="index-number">5.</span>
            <span className="index-name">Disclaimer of Warranties</span>
          </button>
          <button className="index">
            {" "}
            <span className="index-number">6.</span>
            <span className="index-name">Limitations of Liability</span>
          </button>
          <button className="index">
            <span className="index-number">7.</span>
            <span className="index-name">Account Termination</span>
          </button>
          <button className="index">
            <span className="index-number">8.</span>
            <span className="index-name">Changes to the Terms</span>
          </button>
          <button className="index">
            <span className="index-number">9.</span>
            <span className="index-name">Governing Law</span>
          </button>
          <button className="index">
            <span className="index-number">10.</span>
            <span className="index-name">Contact Us</span>
          </button>
        </div>
        {/* Index */}
        <div className="content-conatiner">
          <span className="content-intro">
            These Terms of Service ("Terms") govern your use of the Numora
            mobile application and related services (the "App"). By accessing or
            using Numora, you agree to be bound by these Terms. If you do not
            agree, do not use the App.
          </span>
          <div className="content-title-text-container">
            <div className="content-title-text-box">
              <span className="content-title">1. Using Numora</span>
              <span className="content-text">
                Numora is a free personal and split expense management app. You
                must be at least 13 years old to use the App. You are
                responsible for keeping your account credentials secure. We are
                not responsible for any loss or damage from unauthorized access
                to your account.
              </span>
            </div>
            <div className="content-title-text-box">
              <span className="content-title">2. Account & Authentication</span>
              <span className="content-text">
                Numora uses Google Sign-In via Firebase Authentication. By
                signing in, you authorize us to access basic profile information
                (name, email, profile picture) provided by Google for
                authentication purposes.
              </span>
            </div>
            <div className="content-title-text-box">
              <span className="content-title">3.  User Content</span>
              <span className="content-text">
                You are solely responsible for the expense entries and other
                content you add to Numora. You warrant that you have the right
                to submit such content and that it does not violate any
                applicable laws or the rights of third parties.
              </span>
            </div>
            <div className="content-title-text-box">
              <span className="content-title">4. Prohibited Conduct</span>
              <span className="content-text gap-10px">
                When using Numora you agree not to:
                <ul className="highlight custom-list ">
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
            <div className="content-title-text-box">
              <span className="content-title">5. Disclaimer of Warranties</span>
              <span className="content-text">
                Numora is provided "as is" and "as available". We do not
                guarantee the App will be error-free or uninterrupted. To the
                fullest extent permitted by law, we disclaim all warranties,
                express or implied.
              </span>
            </div>
            <div className="content-title-text-box">
              <span className="content-title">6. Limitation of Liability</span>
              <span className="content-text">
                To the maximum extent permitted by law, Numora and its
                developers will not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising out of your
                use of the App.
              </span>
            </div>
            <div className="content-title-text-box">
              <span className="content-title">7. Account Termination</span>
              <span className="content-text">
                We may suspend or terminate your access to Numora at our
                discretion for violations of these Terms or for any conduct that
                we determine is harmful to other users. You may also delete your
                account at any time by contacting us.
              </span>
            </div>
            <div className="content-title-text-box">
              <span className="content-title">8. Changes to the Terms</span>
              <span className="content-text">
                We may update these Terms occasionally. If we make material
                changes we will update the "Last updated" date above. Continued
                use of the App after changes implies acceptance of the updated
                Terms.
              </span>
            </div>
            <div className="content-title-text-box">
              <span className="content-title">9. Governing Law</span>
              <span className="content-text">
                These Terms are governed by and construed in accordance with the
                laws of the jurisdiction where Numora is operated, without
                regard to conflict of law provisions.
              </span>
            </div>
            <div className="content-title-text-box">
              <span className="content-title">10. Contact Us</span>
              <span className="content-text">
                If you have questions about these Terms or wish to delete your
                account, contact us at:
                <span className="highlight text-decoration">
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

          <Link href="/privacy" className="footer-button-text">
            Privacy
          </Link>
          <Link href="/terms" className="footer-button-text black">
            Terms
          </Link>
          <span className="footer-button-text">© 2025 Numora</span>
        </div>
      </div>
    </div>
  );
}
