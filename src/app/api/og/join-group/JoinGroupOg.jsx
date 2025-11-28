export default function JoinGroupOg({ groupName }) {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // center safe for Instagram
        alignItems: "flex-start", // keep left-look style
        position: "relative",
        padding: "70px 100px", // top/bottom safe space for 1×1 crop
        gap: "32px", // spacing between elements
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Background */}
      <img
        src="https://expense-tracker-alpha-lyart.vercel.app/images/background/join-group-pattern.svg"
        alt="Hero Banner"
        width="100%"
        height="280px"
        style={{
          objectFit: "contain",
          position: "absolute",
          top: "0px",
        }}
      />

      {/* INVITATION badge */}
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "22px 46px",
          borderRadius: "100px",
          fontSize: "36px",
          fontWeight: 500,
        }}
      >
        INVITATION
      </div>

      {/* Group Name */}
      <div
        style={{
          fontSize: "90px",
          fontWeight: 700,
          color: "#111",
          lineHeight: 1.05,
          maxWidth: "900px",
        }}
      >
        {groupName}
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: "40px",
          lineHeight: 26.1,
          fontWeight: 400,
          color: "#5f5f5f",
          lineHeight: 1.25,
          maxWidth: "900px",
        }}
      >
        Add, track and split expenses with your friends
      </div>

      {/* Logo */}
      <img
        src="https://expense-tracker-alpha-lyart.vercel.app/icons/logo.svg"
        alt=""
        style={{
          position: "absolute",
          right: "46px",
          bottom: "46px",
          width: "60px",
          height: "60px",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
//
