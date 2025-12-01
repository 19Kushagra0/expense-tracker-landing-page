export default function JoinGroupOg({ groupName }) {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        background: "white",
        display: "flex",
        flexDirection: "column",
        gap: "0px",
        fontFamily: "Inter",
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
          width: "290px",
          marginBottom: "20px",
          backgroundColor: "black",

          color: "white",
          padding: "10px 18px",
          borderRadius: "100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "34px",
          marginLeft: "34px",
          fontSize: "40px",
          lineHeight: "normal",
          fontWeight: "500",
          letterSpacing: "normal",
          letterSpacing: "0.7px",
        }}
      >
        INVITATION
      </div>

      <div
        style={{
          fontSize: "100px",
          fontWeight: 600,
          color: "#111",
          marginTop: "200px",
          marginLeft: "34px",
          paddingTop: "80px",
        }}
      >
        {groupName}
      </div>

      <div
        style={{
          fontSize: 24,
          fontSize: "40px",
          // lineHeight: 26.1,
          fontWeight: 500,
          letterSpacing: 0,
          color: "#828282",
          marginLeft: "34px",
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

          right: "34px",
          bottom: "34px",
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}
