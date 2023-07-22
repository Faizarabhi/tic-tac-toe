const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const http = require('http');
const server = http.createServer(app);
const WebSocket = require('ws'); // Require 'ws' for WebSocket server

app.get('/', (req, res) => res.send("Hello, World!"));

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

// WebSocket server event handling
wss.on('connection', (ws) => {
  console.log('Client connected');
  
  // WebSocket event handling
  ws.on('message', (message) => {
    console.log('Received message from client:', message);
    
    // Respond to the client
    ws.send('Hello from the server!');
  });

  ws.on('close', (code, reason) => {
    console.log(`Connection closed with code ${code} and reason: ${reason}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
