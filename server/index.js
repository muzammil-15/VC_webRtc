const express = require('express');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');
const http = require('http'); // Import http module

const app = express();
const server = http.createServer(app); // Create HTTP server using Express app
const io = new Server(server, { cors: true }); // Pass the server instance to Socket.IO

app.use(bodyParser.json());

const emailToSocketMapping = new Map();
io.on('connection', (socket) => {
    console.log("new connection");

    socket.on('join-room', (data) => {
        const { emailId, roomId } = data;
        console.log("user", emailId, "join room", roomId);
        emailToSocketMapping.set(emailId, socket.id);
        socket.join(roomId);
        socket.broadcast.to(roomId).emit("join-room", { emailId });
    });
});

const PORT = 8000; // Set the port number
server.listen(PORT, () => console.log(`Express server is running on port ${PORT}`));

const SOCKET_PORT = 8001; // Set the socket port number
io.listen(SOCKET_PORT);
console.log(`Socket server is running on port ${SOCKET_PORT}`);