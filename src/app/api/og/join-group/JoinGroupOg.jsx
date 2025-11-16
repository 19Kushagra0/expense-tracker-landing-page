import { Inter } from "next/font/google";

export default function JoinGroupOg({ groupName }) {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        background: "white",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter, sans-serif",
        gap: "0px",
      }}
    >
      <img
        src="https://expense-tracker-alpha-lyart.vercel.app/images/background/join-group-pattern.svg"
        alt="Hero Banner"
        width="100%"
        height="300px"
        style={{
          objectFit: "contain",
          position: "absolute",
        }}
      />
      <div
        style={{
          width: "120px",
          marginBottom: "20px",
          backgroundColor: "black",

          color: "white",
          padding: "10px 10px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
          marginLeft: "30px",
          fontSize: "16px",
          lineHeight: "normal",
          fontWeight: "400",
          letterSpacing: "normal",
          letterSpacing: "0.7px",
        }}
      >
        INVITATION
      </div>

      <div
        style={{
          fontSize: "78px",
          fontWeight: 700,
          color: "#111",
          marginTop: "250px",
          marginLeft: "35px",
        }}
      >
        {groupName}
      </div>

      <div
        style={{
          fontSize: 24,
          lineHeight: 26.1,
          fontWeight: 400,
          letterSpacing: 0, // "normal" becomes 0 in OG
          color: "#5f5f5f",
          fontFamily: "Inter",
          marginTop: "-250px",
          marginLeft: "35px",
        }}
      >
        Add, track and split expenses with your friends
      </div>

      <img
        src="https://expense-tracker-alpha-lyart.vercel.app/icons/logo.svg"
        alt="Hero Banner"
        width={50}
        height={50}
        style={{
          objectFit: "contain",
          width: "50px",
          height: "50px",
          backgroundColor: "black",
          position: "absolute",

          right: "50px",
          bottom: "150px",
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}
