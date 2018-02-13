const express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var fs = require('fs'); //require filesystem module

//MongoDB
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//Raspberry Peripherals
// var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
// var LED = new Gpio(4, 'out'); //use GPIO pin 4 as output
// var pushButton = new Gpio(17, 'in', 'both'); //use GPIO pin 17 as input, and 'both' button presses, and releases should be handled

server.listen(8080, () => console.log('Server listening on port 8080!'));
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});


io.sockets.on('connection', function (socket) {// WebSocket Connection
  var lightvalue = 0; //static variable for current status
  // pushButton.watch(function (err, value) { //Watch for hardware interrupts on pushButton
  //   if (err) { //if an error
  //     console.error('There was an error', err); //output error message to console
  //     return;
  //   }
  //   lightvalue = value;
  //   socket.emit('light', lightvalue); //send button status to client
  // });
  socket.on('light', function(data) { //get light switch status from client
    lightvalue = data;
    // if (lightvalue != LED.readSync()) { //only change LED if status has changed
      // LED.writeSync(lightvalue); //turn LED on or off
    // }
      console.log("change led to " + lightvalue);
  });
});

process.on('SIGINT', function () { //on ctrl+c
  // LED.writeSync(0); // Turn LED off
  // LED.unexport(); // Unexport LED GPIO to free resources
  // pushButton.unexport(); // Unexport Button GPIO to free resources
  process.exit(); //exit completely
});

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });