// app/join-group/og/JoinGroupOg.jsx
export default function JoinGroupOg({ groupName }) {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        background: "white",
        display: "flex",
        flexDirection: "column",
        padding: "80px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ fontSize: "28px", color: "#6a6a6a", fontWeight: 500 }}>
        You are invited to
      </div>

      <div
        style={{
          fontSize: "78px",
          fontWeight: 700,
          color: "#111",
          marginTop: "10px",
        }}
      >
        {groupName}
      </div>

      <div
        style={{
          fontSize: "32px",
          color: "#5f5f5f",
          marginTop: "18px",
          maxWidth: "800px",
        }}
      >
        Add, track, and split expenses with your friends
      </div>

      <div
        style={{
          width: "100%",
          height: "2px",
          background: "#e5e7eb",
          marginTop: "40px",
          maxWidth: "900px",
        }}
      ></div>

      <div
        style={{
          fontSize: "30px",
          color: "#7a7a7a",
          fontWeight: 500,
          marginTop: "40px",
        }}
      >
        Simplify your debts
      </div>
    </div>
  );
}
