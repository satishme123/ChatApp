const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
const useRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path")
const http = require("http");
app.use(cors({
  origin: 'https://chattalk-w4l9.onrender.com', // Replace with your actual client origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));


connectDB();
app.use(express.json());

// app.get("/", (req, res) => {
//   console.log("yo will work");
// });

app.use("/api/user", useRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
// -----------------Deployment------------------
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// -----------------Deployment------------------

app.use(notFound);
app.use(errorHandler);


// const server = app.listen(PORT, console.log("server started on PORT 5000"));
const server = http.createServer(app)
const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});
io.on("connection", (socket) => {
  console.log("connected to socket.io");
  socket.on("setup", (userData) => {
    console.log(userData._id);
    socket.join(userData._id);
    socket.emit("connected");
  });
  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room" + room);
  });
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });
  socket.off('setup',(userData)=>{
    console.log("User Disconnected")
    socket.leave(userData._id)
  })

});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("server started on PORT 5000");
});
