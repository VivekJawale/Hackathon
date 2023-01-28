import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        position: "fixed",
        padding: "10px 0px",
        zIndex: "1",
        top: "0px",
        background: "#fff",
        width: "100%",
        height: "50px",
        display: "flex",
        alignItmes: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          width: "20%",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <h1 style={{ color: "#0dccc5" }}>EDUCATIVS</h1>
      </div>
      <div
        style={{
          width: "50%",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
          marginTop: "5px",
        }}
      >
        <div style={{ width: "20%", height: "50px", marginRight: "10px" }}>
          <Link href="/">
            <button
              style={{
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#fff",
                border: "1px solid #0dccc5",
                width: "100%",
                height: "80%",
                borderRadius: "5px",
                background: "#0dccc5",
              }}
            >
              HOME
            </button>
          </Link>
        </div>
        <div style={{ width: "20%", height: "50px", marginRight: "10px" }}>
          <Link href="/login">
            <button
              style={{
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#fff",
                border: "1px solid #0dccc5",
                width: "100%",
                height: "80%",
                borderRadius: "5px",
                background: "#0dccc5",
              }}
            >
              LOGIN
            </button>
          </Link>
        </div>
        <div style={{ width: "20%", height: "50px", marginRight: "10px" }}>
          <Link href="/about">
            <button
              style={{
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#fff",
                border: "1px solid #0dccc5",
                width: "100%",
                height: "80%",
                borderRadius: "5px",
                background: "#0dccc5",
              }}
            >
              ABOUT US
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
