var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const mysql = require("mysql2");
const cors = require("cors");
const dayjs = require("dayjs");

var connection = mysql.createConnection({
  //host: "localhost",
  //user: "root",
  //password: "",
  //database: "tabletemi"
  host: "knv.h.filess.io",
  user: "TemiFoodData_unknownfor",
  password: "9e6bab849389e21541cd26477af3ba1acfe48dbe",
  database: "TemiFoodData_unknownfor",
  port: "3307",
});

app.use(cors());
app.post("/tabletemi", jsonParser, function (req, res, next) {
  connection.query(
    "INSERT INTO `tables` (`tabletimestamp`,`table`,`temistatus`) VALUES (?,?,?)",
    [dayjs().format(), req.body.table, 0],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "ok" });
    }
  );
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat_message3', (msg) => {
    console.log('right: ');
    io.emit('robot_goright');
  });
  socket.on('chat_message2', (msg) => {
    console.log('Left ' + msg);
    io.emit('robot_goleft');
  });
  socket.on('chat_message1', (msg) => {
    console.log('Forward ');
    io.emit('robot_gofront2');
  });
  socket.on('robot_song1', (msg) => {
    console.log('Song1 ');
    io.emit('robot_song1');
  });
  socket.on('robot_song2', (msg) => {
    console.log('Song2 ');
    io.emit('robot_song2');
  });
  socket.on('robot_song3', (msg) => {
    console.log('Song3 ');
    io.emit('robot_song3');
  });
  socket.on('robot_song4', (msg) => {
    console.log('Song4 ');
    io.emit('robot_song4');
  });
  socket.on('robot_savea', (msg) => {
    console.log('SaveA ');
    io.emit('robot_savea');
  });
  socket.on('robot_saveb', (msg) => {
    console.log('SaveB ');
    io.emit('robot_saveb');
  });
  socket.on('robot_savec', (msg) => {
    console.log('SaveC ');
    io.emit('robot_savec');
  });
  socket.on('robot_saved', (msg) => {
    console.log('SaveD ');
    io.emit('robot_saved');
  });
  socket.on('robot_spin', (msg) => {
    console.log('Spin ');
    io.emit('robot_spin');
  });
  socket.on('robot_welcome', (msg) => {
    console.log('welcome ');
    io.emit('robot_welcome');
  });
  socket.on('robot_welcome_ns', (msg) => {
    console.log('welcome_ns ');
    io.emit('robot_welcome_ns');
  });
  socket.on('robot_thank', (msg) => {
    console.log('thank ');
    io.emit('robot_thank');
  });
  socket.on('robot_thank_ns', (msg) => {
    console.log('thank_ns ');
    io.emit('robot_thank_ns');
  });
  socket.on('robot_stop', (msg) => {
    console.log('Stop');
    io.emit('robot_stop');
  });
  socket.on('robot_face', (msg) => {
    console.log('face ');
    io.emit('robot_face');
  });
  socket.on('robot_dance', (msg) => {
    console.log('dance ');
    io.emit('robot_dance');
  });
  socket.on('robot_tilt', (msg) => {
    console.log('tilt ');
    io.emit('robot_tilt');
  });
  socket.on('robot_temp', (msg) => {
    console.log('temp ');
    io.emit('robot_temp');
  });
  socket.on('robot_Home', (msg) => {
    console.log('Home ');
    io.emit('robot_Home');
  });
});

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//     // ส่งคำสั่ง enqueue ไปยัง server Socket.io
//     socket.emit('robot_socket', element);
//     io.emit('robot_socket');

//     this.items.push(element);
//     // ส่งคำสั่ง enqueue ไปยัง server Socket.io
//     socket.emit('robot_mainpage', element);
//     io.emit('robot_mainpage');

//   }
  

//   dequeue() {
//     if (this.isEmpty()) {
//       return 'Queue is empty'; 
//     }
//     // นำรายการออกจากคิว
//     const item = this.items.shift();
//     // ส่งคำสั่ง dequeue ไปยัง server Socket.io
//     socket.emit('dequeue');
//     return item;
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   getQueue() {
//     return this.items;
//   }
// }

http.listen(4000, () => {
  console.log('listening on *:4000');
});