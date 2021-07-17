var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require("socket.io")(server)
var fs = require("fs")
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('html.html');
});
server.listen(3000);
var Grass = require("./grass.js")
var GrassEater = require("./GrassEater.js")
var GrassPredator = require("./GrassPredator.js")
var AntiBust = require("./AntiBust.js")
var Bust = require("./Bust.js")
var Rock = require("./rock.js")
var Bomb = require("./Bomb.js")
matrix = [];
grassArr = []
grassEaterArr = []
grassPredatorArr = []
bust = []
antibust = []
bomb = []
rock = []
for (var y = 0; y < 50; y++) {
    matrix[y] = []
    for (var x = 0; x < 50; x++) {
        matrix[y].push(Math.floor(Math.random() * 8))
    }
}
io.sockets.emit("send matrix", matrix)
function createObject(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var gr = new GrassEater(x, y)
                grassEaterArr.push(gr)
            } else if (matrix[y][x] == 3) {
                var gr = new GrassPredator(x, y)
                grassPredatorArr.push(gr)
            } else if (matrix[y][x] == 4) {
                var gr = new Bust(x, y)
                bust.push(gr)
            } else if (matrix[y][x] == 5) {
                var gr = new AntiBust(x, y)
                antibust.push(gr)
            } else if (matrix[y][x] == 6) {
                var gr = new Bomb(x, y)
                bomb.push(gr)
            } else if (matrix[y][x] == 7) {
                var gr = new Rock(x, y)
                rock.push(gr)
            }
        }
    }
    io.sockets.emit("send matrix", matrix)
    io.sockets.emit("send grass.length", grassArr)

}
function game() {
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].eat();
    }
    for (var i in grassPredatorArr) {
        grassPredatorArr[i].mul();
        grassPredatorArr[i].eat();
    }
    io.sockets.emit("send matrix", matrix)
    io.sockets.emit("send grass.length", grassArr)
}

setInterval(game, 1000)
io.on('connection', function (socket) {
    createObject(matrix)
})