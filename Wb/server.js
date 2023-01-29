

const express = require("express");
const bodyparser = require("body-parser");
const { Server } = require("socket.io");

const io = new Server({
    cors:true
});
const app = express();

app.use(bodyparser.json());

const emailToSocketingMapping = new Map();
const socketToEmailMapping=new Map();

io.on("connection", (socket) => {
  console.log("new connection found");
  socket.on("join-room", (data) => {
    const { roomId, emailId } = data;
    console.log(data)
    emailToSocketingMapping.set(emailId, socket.id);
    socketToEmailMapping.set(socket.id,emailId)
    socket.join(roomId);
    socket.emit("joined-room",{roomId})
    socket.broadcast.to(roomId).emit("user-joined", { emailId });
  });

  socket.on("call-user",(data)=>{
      const {emailId,offer}=data;
      const fromEmail=socketToEmailMapping.get(socket.id)
      const socketId=emailToSocketingMapping.get(emailId);
      socket.to(socketId).emit("incomming-call",{from: fromEmail,offer })
  })
});

app.listen(5050, () => {
  console.log("server is running at 5050");
});

io.listen(5051);

// export {}
