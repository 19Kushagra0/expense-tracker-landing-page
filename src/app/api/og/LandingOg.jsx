// app/components/og/LandingOg.jsx
export default function LandingOg() {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px",
        backgroundColor: "#ebebeb",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* LEFT SECTION */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <span
          style={{
            fontSize: "96px",
            fontWeight: 600,
            color: "rgba(0,0,0,0.1)",
          }}
        >
          SPEND
        </span>
        <span style={{ fontSize: "96px", fontWeight: 600, color: "#000" }}>
          TRACK
        </span>
        <span
          style={{
            fontSize: "96px",
            fontWeight: 600,
            color: "rgba(0,0,0,0.1)",
          }}
        >
          SPLIT
        </span>
      </div>

      {/* RIGHT SECTION */}
      {/* <img
        src="https://my-app.vercel.app/images/hero-banner.png" // replace with your actual deployed URL
        alt="Hero Banner"
        width={377}
        height={815}
        style={{ objectFit: "contain" }}
      /> */}
    </div>
  );
}
