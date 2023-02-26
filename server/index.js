
const express = require('express');
const app = express();
http = require('http');
const cors = require('cors');
const { Server } = require('socket.io'); // Add this

app.use(cors()); // Add cors middleware

const server = http.createServer(app); // Add this


  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  });
  
  io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);
  
    // Add this
    // Add a user to a room
    socket.on('join_room', (data) => {
      const d = data; // Data sent from client when join_room event emitted
      console.log(d);
    //   socket.join(room); // Join the user to a socket room
    });
  });
  
  server.listen(4000, () => 'Server is running on port 4000');