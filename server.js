  
const express = require('express');
const http = require('http')
const socketServer =require('socket.io');
const app = express();

var serve = http.createServer(app);
var io = socketServer(serve);
var port = process.env.PORT || 8000
serve.listen(port ,()=> {console.log("+++Gethyl Express Server with Socket Running!!!")})

io.on('connection', (socket) => {
    console.log("connected");
    socket.on('disconnect', function(){
		console.log('Disconnected - '+ socket.id);
    });
    socket.on("login", () => {
        console.log("login")
    })
})