"use client";
import { useState } from "react";

export default function CareerPage() {
  const [selectedRole, setSelectedRole] = useState(null);

  // Easy to edit job listings
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
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>YourBrand</div>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>
            Home
          </a>
          <a href="#" style={styles.navLink}>
            About
          </a>
          <a href="#careers" style={{ ...styles.navLink, fontWeight: "600" }}>
            Careers
          </a>
          <a href="#" style={styles.navLink}>
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.titleSection}>
            <h1 style={styles.titleGray}>JOIN</h1>
            <h1 style={styles.titleBlack}>BUILD</h1>
            <h1 style={styles.titleGray}>GROW</h1>
          </div>
          <p style={styles.heroDescription}>
            Shape the future with us.
            <br />
            Build products people love.
            <br />
            Grow your career.
          </p>
        </div>
      </section>

      {/* Jobs Section */}
      <section style={styles.jobsSection}>
        <h2 style={styles.sectionTitle}>Open Positions</h2>

        <div style={styles.jobsGrid}>
          {jobListings.map((job) => (
            <div
              key={job.id}
              style={styles.jobCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
              }}
            >
              <div style={styles.jobHeader}>
                <h3 style={styles.jobTitle}>{job.title}</h3>
                <span style={styles.jobDepartment}>{job.department}</span>
              </div>

              <div style={styles.jobMeta}>
                <span style={styles.jobMetaItem}>📍 {job.location}</span>
                <span style={styles.jobMetaItem}>⏰ {job.type}</span>
              </div>

              <p style={styles.jobDescription}>{job.description}</p>

              <button
                style={styles.viewButton}
                onClick={() => setSelectedRole(job)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#333";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#000";
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedRole && (
        <div style={styles.modal} onClick={() => setSelectedRole(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.closeButton}
              onClick={() => setSelectedRole(null)}
            >
              ✕
            </button>

            <h2 style={styles.modalTitle}>{selectedRole.title}</h2>
            <div style={styles.modalMeta}>
              <span style={styles.modalMetaItem}>
                {selectedRole.department}
              </span>
              <span style={styles.modalMetaItem}>{selectedRole.location}</span>
              <span style={styles.modalMetaItem}>{selectedRole.type}</span>
            </div>

            <div style={styles.modalSection}>
              <h3 style={styles.modalSectionTitle}>About the Role</h3>
              <p style={styles.modalText}>{selectedRole.description}</p>
            </div>

            <div style={styles.modalSection}>
              <h3 style={styles.modalSectionTitle}>Requirements</h3>
              <ul style={styles.requirementsList}>
                {selectedRole.requirements.map((req, index) => (
                  <li key={index} style={styles.requirementItem}>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <button
              style={styles.applyButton}
              onClick={() => handleApply(selectedRole.title)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#333";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#000";
              }}
            >
              Apply Now
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 YourBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#ebebeb",
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#000",
  },
  nav: {
    display: "flex",
    gap: "32px",
  },
  navLink: {
    color: "#000",
    textDecoration: "none",
    fontSize: "16px",
    transition: "opacity 0.2s",
  },
  hero: {
    padding: "80px 60px",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  heroContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: "60px",
    flexWrap: "wrap",
  },
  titleSection: {
    display: "flex",
    flexDirection: "column",
  },
  titleGray: {
    fontSize: "120px",
    fontWeight: "600",
    letterSpacing: "-6px",
    lineHeight: "1.08",
    color: "rgba(0, 0, 0, 0.1)",
    margin: "0",
  },
  titleBlack: {
    fontSize: "120px",
    fontWeight: "600",
    letterSpacing: "-6px",
    lineHeight: "1.08",
    color: "#000",
    margin: "0",
  },
  heroDescription: {
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "1.25",
    letterSpacing: "-1.2px",
    color: "#000",
    maxWidth: "300px",
  },
  jobsSection: {
    padding: "60px 60px 100px",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "48px",
    fontWeight: "600",
    marginBottom: "40px",
    letterSpacing: "-2px",
  },
  jobsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "24px",
  },
  jobCard: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "28px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  jobHeader: {
    marginBottom: "16px",
  },
  jobTitle: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "8px",
    letterSpacing: "-0.5px",
  },
  jobDepartment: {
    display: "inline-block",
    backgroundColor: "#ebebeb",
    padding: "4px 12px",
    borderRadius: "12px",
    fontSize: "13px",
    fontWeight: "500",
  },
  jobMeta: {
    display: "flex",
    gap: "16px",
    marginBottom: "16px",
    flexWrap: "wrap",
  },
  jobMetaItem: {
    fontSize: "14px",
    color: "#666",
  },
  jobDescription: {
    fontSize: "15px",
    lineHeight: "1.5",
    color: "#444",
    marginBottom: "20px",
  },
  viewButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  modal: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    zIndex: "1000",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: "24px",
    padding: "40px",
    maxWidth: "600px",
    width: "100%",
    maxHeight: "80vh",
    overflowY: "auto",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#666",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    transition: "background-color 0.2s",
  },
  modalTitle: {
    fontSize: "32px",
    fontWeight: "600",
    marginBottom: "16px",
    letterSpacing: "-1px",
  },
  modalMeta: {
    display: "flex",
    gap: "12px",
    marginBottom: "32px",
    flexWrap: "wrap",
  },
  modalMetaItem: {
    backgroundColor: "#ebebeb",
    padding: "6px 14px",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "500",
  },
  modalSection: {
    marginBottom: "32px",
  },
  modalSectionTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "12px",
    letterSpacing: "-0.5px",
  },
  modalText: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#444",
  },
  requirementsList: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  requirementItem: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#444",
    marginBottom: "8px",
    paddingLeft: "24px",
    position: "relative",
  },
  applyButton: {
    width: "100%",
    padding: "16px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "14px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  footer: {
    padding: "40px 60px",
    textAlign: "center",
    backgroundColor: "#fff",
    marginTop: "60px",
  },
  footerText: {
    color: "#666",
    fontSize: "14px",
  },
};
