"use client";
import { useState } from "react";
import "@/app/style.css";
import Link from "next/link";
import Navbar from "@/app/myComponents/Navbar/Navbar";
import "@/app/career/components/Career.css";

export default function CareerPage() {
  const [navBar, setNavBar] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const showNavBar = () => {
    setNavBar(!navBar);
  };

  // Job Listings
  const jobListings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      description:
        "Build beautiful, responsive user interfaces that delight our users. Work with React, Next.js, and modern web technologies.",
      requirements: [
        "5+ years of frontend development experience",
        "Expert knowledge of React and modern JavaScript",
        "Strong design sensibility and attention to detail",
        "Experience with responsive design and CSS",
      ],
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      location: "Remote / San Francisco",
      type: "Full-time",
      description:
        "Shape the future of our product experience. Create intuitive, beautiful designs that solve real user problems.",
      requirements: [
        "3+ years of product design experience",
        "Portfolio demonstrating UX/UI skills",
        "Proficiency in Figma or similar tools",
        "Understanding of user research methods",
      ],
    },
    {
      id: 3,
      title: "Backend Engineer",
      department: "Engineering",
      location: "Remote / London",
      type: "Full-time",
      description:
        "Build scalable, reliable systems that power our platform. Work with modern backend technologies and cloud infrastructure.",
      requirements: [
        "4+ years of backend development experience",
        "Strong knowledge of databases and APIs",
        "Experience with cloud platforms (AWS/GCP)",
        "Understanding of system architecture",
      ],
    },
    {
      id: 4,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote / Berlin",
      type: "Full-time",
      description:
        "Drive growth through creative campaigns and data-driven strategies. Own our marketing initiatives from concept to execution.",
      requirements: [
        "3+ years of marketing experience",
        "Track record of successful campaigns",
        "Strong analytical and creative skills",
        "Experience with digital marketing tools",
      ],
    },
  ];

  const handleApply = (jobTitle) => {
    alert(
      `Application form for ${jobTitle} would open here. Connect this to your application system.`
    );
  };

  return (
    <div className="career-container">
      {/* Header */}
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
          <Link
            href="/career"
            className="term-privacy-header-button terms-privacy-black"
          >
            Careers
          </Link>
          <Link href="/privacy" className="term-privacy-header-button">
            Privacy
          </Link>
          <Link href="/terms" className="term-privacy-header-button">
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

      {/* Hero */}
      <section className="career-hero">
        <div className="career-hero-content">
          <div className="career-title-section">
            <h1 className="career-title-gray">JOIN</h1>
            <h1 className="career-title-black">BUILD</h1>
            <h1 className="career-title-gray">GROW</h1>
          </div>
          <p className="career-hero-description">
            Shape the future with us.
            <br />
            Build products people love.
            <br />
            Grow your career.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="career-jobs-section">
        <h2 className="career-section-title">Open Positions</h2>

        <div className="career-jobs-grid">
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="career-job-card"
              onClick={() => setSelectedRole(job)}
            >
              <h3 className="career-job-title">{job.title}</h3>
              <span className="career-job-department">{job.department}</span>

              <div className="career-job-meta">
                <span className="career-job-meta-item">📍 {job.location}</span>
                <span className="career-job-meta-item">⏰ {job.type}</span>
              </div>

              <p className="career-job-description">{job.description}</p>

              <button className="career-view-button">View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* Job Modal */}
      {selectedRole && (
        <div className="career-modal" onClick={() => setSelectedRole(null)}>
          <div
            className="career-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="career-close-button"
              onClick={() => setSelectedRole(null)}
            >
              ✕
            </button>

            <h2 className="career-modal-title">{selectedRole.title}</h2>

            <div className="career-modal-meta">
              <span className="career-modal-meta-item">
                {selectedRole.department}
              </span>
              <span className="career-modal-meta-item">
                {selectedRole.location}
              </span>
              <span className="career-modal-meta-item">
                {selectedRole.type}
              </span>
            </div>

            <div className="career-modal-section">
              <h3 className="career-modal-section-title">About the Role</h3>
              <p className="career-modal-text">{selectedRole.description}</p>
            </div>

            <div className="career-modal-section">
              <h3 className="career-modal-section-title">Requirements</h3>
              <ul className="career-requirements-list">
                {selectedRole.requirements.map((req, index) => (
                  <li key={index} className="career-requirement-item">
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="career-apply-button"
              onClick={() => handleApply(selectedRole.title)}
            >
              Apply Now
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div
        className="terms-privacy-footer"
        style={{ paddingLeft: "4.72%", paddingRight: "4.72%" }}
      >
        <Link href="/">
          <svg
            className="terms-privacy-numora-icon"
            height={36}
            width={36}
            viewBox="0 0 35 38"
            fill="none"
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
            className="term-privacy-header-button terms-privacy-black terms-privacy-display-none"
          >
            Careers
          </Link>
          <Link
            href="/privacy"
            className="term-privacy-header-button terms-privacy-display-none"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="term-privacy-header-button terms-privacy-display-none"
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
