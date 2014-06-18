var express = require('express');
var router = express.Router();
var server = require('http').Server(express);

var WebSocketServer = require('websocket').server;
var WebSocketClient = require('websocket').client;
var WebSocketFrame  = require('websocket').frame;
var WebSocketRouter = require('websocket').router;


var client = new WebSocketClient();

// client.on('connectFailed', function(error) {
//     console.log('Connect Error: ' + error.toString());
// });

// client.on('connect', function(connection) {
//     console.log('WebSocket client connected');
//     connection.on('error', function(error) {
//         console.log("Connection Error: " + error.toString());
//     });
//     connection.on('close', function() {
//         console.log('echo-protocol Connection Closed');
//     });
//     connection.on('message', function(message) {
//         if (message.type === 'utf8') {
//             console.log("Received: '" + message.utf8Data + "'");
//         }
//     });

//     function sendNumber() {
//         if (connection.connected) {
//             var number = Math.round(Math.random() * 0xFFFFFF);
//             connection.sendUTF(number.toString());
//             setTimeout(sendNumber, 1000);
//         }
//     }
//     // sendNumber();
// });

// client.connect('ws://localhost:8080/', 'echo-protocol');





// var http = require('http');

// var server = http.createServer(function(request, response) {
//     // console.log((new Date()) + ' Received request for ' + request.url);
//     response.writeHead(404);
//     response.end();
// });

// server.listen(3000, function() {
//     console.log((new Date()) + ' Server is listening on port 3005');

// 	client.connect('ws://localhost:3000/', 'echo-protocol');

// 	client.on('connectFailed', function(error) {
// 	    console.log('Connect Error: ' + error.toString());
// 	});

// 	client.on('connect', function(connection) {
// 	    console.log('WebSock???et client connected');

// 	    connection.on('error', function(error) {
// 	        console.log("Connection Error: " + error.toString());
// 	    });
// 	    connection.on('close', function() {
// 	        console.log('echo-protocol Connection Closed');
// 	    });
// 	    connection.on('message', function(message) {
// 	        if (message.type === 'utf8') {
// 	            console.log("Received: '" + message.utf8Data + "'");
// 	        }
// 	    });

// 	    function sendNumber() {
// 	        if (connection.connected) {
// 	            var number = Math.round(Math.random() * 0xFFFFFF);
// 	            connection.sendUTF(number.toString());
// 	            setTimeout(sendNumber, 1000);
// 	        }
// 	    }
// 	    // sendNumber();
// 	});
// });



// wsServer = new WebSocketServer({
//     httpServer: server,
//     // You should not use autoAcceptConnections for production
//     // applications, as it defeats all standard cross-origin protection
//     // facilities built into the protocol and the browser.  You should
//     // *always* verify the connection's origin and decide whether or not
//     // to accept it.
//     autoAcceptConnections: false
// });



// function originIsAllowed(origin) {
//   // put logic here to detect whether the specified origin is allowed.
//   return true;
// }

// wsServer.on('request', function(request) {
//     if (!originIsAllowed(request.origin)) {
//       // Make sure we only accept requests from an allowed origin
//       request.reject();
//       console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
//       return;
//     }

//     var connection = request.accept('echo-protocol', request.origin);
//     console.log((new Date()) + ' Connection accepted.');

//     connection.on('message', function(message) {
//         if (message.type === 'utf8') {
//             console.log('Received Message: ' + message.utf8Data);
//             connection.sendUTF(message.utf8Data);
//         }
//         else if (message.type === 'binary') {
//             console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
//             connection.sendBytes(message.binaryData);
//         }
//     });

//     connection.on('close', function(reasonCode, description) {
//         console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
//     });


// });

// server.on('connection', function (client) {
//   	client.on('message', function () { 

//   		console.log('online :', controller.online);

//   	});
  	

//   	client.on('close', function () { 
		
// 		res.send({message: client.id + ': offline'});
//         console.log('online :', controller.online);

//   	});
    

//     client.on('message', function(client){

//         if(message.username)
//             client.id = message.username;

//         res.send({message: client.id + ':' + message.message});
//     });


// });






// function socket_homepage(controller){
//     controller.on('open', function(client){

//         console.log('online :', controller.online);
//     });

//     controller.on('message', function(client){

//         if(message.username)
//             client.id = message.username;

//         controller.send({message: client.id + ':' + message.message});
//     });

//     controller.on('close', function(client){
//         controller.send({message: client.id + ': offline'});
//         console.log('online :', controller.online);
//     });
// }

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.ejs');
});



module.exports = router;
