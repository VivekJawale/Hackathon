import React, { useEffect } from "react";

const HomePage = () => {
  return (
    <>
      <div className="parallax">
        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 text-center"
              style={{
                flexDirection: "column",
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3 className="animate-charcter">EDUCATIVS</h3>
              <img
                style={{ width: "100px", height: "100px" }}
                src="https://content.invisioncic.com/p289038/monthly_2020_05/Bounce-arrow.gif.ab5ac6f311d13c20c4a6d256178344bf.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="parallax_2">
        <div
          style={{
            border: "3px solid #fff",
            borderRadius: "10px",
            backdropFilter: "blur(10px)",
            textAlign: "center",
            width: "60%",
            height: "250px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <h3>About Us</h3>
          <p style={{ fontSize: "18px" }}>
            We provide platform for teachers and students for managing learning
            as wll as teaching easy and effecive.
          </p>
        </div>
      </div>
      <div className="parallax_3">
        <div
          style={{
            border: "3px solid #fff",
            borderRadius: "10px",
            backdropFilter: "blur(10px)",
            textAlign: "center",
            width: "60%",
            height: "250px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3>Our Vision</h3>
          <p style={{ fontSize: "18px" }}>
            Our vision is to create software which solves convetional education
            problems and reach out to every corner so noone can deprived from
            education.
          </p>
        </div>
      </div>
      <div className="parallax_4">
        <div
          style={{
            border: "3px solid #fff",
            borderRadius: "10px",
            backdropFilter: "blur(10px)",
            textAlign: "center",
            width: "60%",
            height: "250px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3>Login Now</h3>
          <p style={{ fontSize: "18px" }}>
            Login now to access your assignments, evaluations, attendance and
            many more.
          </p>
        </div>
      </div>
    </>
    // <section>
    //   <img className='first_img' src="https://previews.123rf.com/images/xtockimages/xtockimages1405/xtockimages140509640/28483900-lithuania-high-resolution-education-concept.jpg" alt="" />
    //   <img className='second_img' src="https://images.ctfassets.net/hrltx12pl8hq/6f2M9koJF7uhwGGao7WCX5/8683a9c8388dada729c7caeefc87872b/compressed_shutterstock_1274296330.jpg?fit=fill&w=800&h=300" alt="" />
    //   <img className='third_img' src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/wolpert-gawron-169hero-onlinemgmt-shutterstock.jpg?w=2880&quality=85" alt="" />
    //    <h2 className="title_of_home">Educatives</h2>
    // </section>
  );
};

export default HomePage;
