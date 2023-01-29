import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";
import Link from "next/link";
import { useSocket } from "./providers/Socket";
import { useRouter } from "next/navigation";

const Videocall = () => {
  const [name, setName] = useState("");
  const [roomname, setRoomname] = useState("");
  const router = useRouter();

  const { socket } = useSocket();
  // socket.emit("join-room",{
  //   roomId:"1",emailId:'a@gmail.com'
  // })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleRoomjoined = ({ roomId }) => {
    router.push(`/room/${roomId}`);
  };

  useEffect(() => {
    socket.on("joined-room", handleRoomjoined);
  }, [handleRoomjoined, socket]);

  const handleSocket = () => {
    if (roomname == "" || name == "") {
      return swal({
        title: "All fields to be filled!",
        icon: "warning",
      });
    }

    socket.emit("join-room", {
      roomId: roomname,
      emailId: name,
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "justify",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          background:
            "radial-gradient(circle, rgba(13,204,197,0.9697128851540616) 45%, rgba(0,0,255,0.6783963585434174) 100%)",
        }}
      >
        <Link href="/HomePage">
          <p
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "#fff",
              fontSize: "20px",
              textAlign: "left",
            }}
          >
            Back to Home
          </p>
        </Link>
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            width: "30%",
            padding: "20px 20px",
            height: "400px",
            borderRadius: "10px",
            background: "#f1f1f1",
            margin: "auto",
          }}
        >
          <h4 style={{ marginTop: "20px", marginBottom: "20px" }}>
            Join chat with teacher enter unique team name and send it to your
            freind or teacher.
          </h4>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Your name"
              className="mb-3"
            >
              <Form.Control
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="name@example.com"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Room number or name"
            >
              <Form.Control
                value={roomname}
                onChange={(e) => {
                  setRoomname(e.target.value);
                }}
                type="text"
                placeholder="Room name or number"
              />
            </FloatingLabel>

            <Button
              onClick={handleSocket}
              variant="primary"
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                border: "none",
                background: "#0dccc5",
                width: "100%",
                height: "50px",
              }}
            >
              Join Chat
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Videocall;
