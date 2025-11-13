// app/components/og/LandingOg.jsx
export default function LandingOg() {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ebebeb",
        fontFamily: "Inter, sans-serif",
        gap: "0px",
        flexDirection: "row",
      }}
    >
      {/* LEFT SECTION */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          //   backgroundColor: "red",
        }}
      >
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
      <img
        src="https://expense-tracker-alpha-lyart.vercel.app/images/hero-banner.png"
        alt="Hero Banner"
        width={277}
        height={415}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
