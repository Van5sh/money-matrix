import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("client ready", (data) => {
        console.log("Client says:", data);
    });
    socket.on("send_message", (data) => {
        socket.broadcast.emit("message", data);
    });
});

server.listen(3001, () => {
    console.log("Server is running on port 3001");
});
