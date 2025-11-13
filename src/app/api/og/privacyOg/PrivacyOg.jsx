export default function TermOg() {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        fontFamily: "Inter, sans-serif",
        color: "#000",
        padding: "80px",
        boxSizing: "border-box",
      }}
    >
      {/* Title Box */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderBottom: "2px solid #d8d8d8",
          gap: "20px",
          paddingBottom: "24px",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "72px",
            lineHeight: "80px",
            letterSpacing: "-2%",
          }}
        >
          Privacy Policy
        </span>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "32px",
          }}
        >
          <span style={{ color: "#000" }}>Last updated</span>
          <span style={{ color: "#828282" }}>12th Sept, 2025</span>
        </div>
      </div>
    </div>
  );
}
