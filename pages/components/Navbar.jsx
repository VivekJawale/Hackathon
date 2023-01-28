import React from "react";
import Link from "next/link";
import swal from "sweetalert"

const Navbar = () => {

  const handlelogout=()=>{
    swal({
      title: "Are you sure?",
      text: "You want to log out?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Logged out Successfully!", {
          icon: "success",
        });
      } else {
       
      }
    });
  }

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
        }}
      >
      
        <div style={{ width: "30%", height: "50px", marginRight: "10px" }}>
            <button
            onClick={handlelogout}
              style={{
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#000",
                border: "none",
                width: "100%",
                height: "80%",
                borderRadius: "5px",
                background: "#f1f1f1",
              }}
            >
              <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" style={{marginRight:"5px"}}  height="20" fill="#77777e" viewBox="0 0 512 512"><path d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z"/></svg>
              <span>UserName</span> 
              </div>
            
            </button>
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
              ASSIGNMENTS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
