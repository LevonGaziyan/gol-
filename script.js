var matrix = [
];

var grassArr = []
var grassEaterArr = []
var grassPredatorArr = []
var bust = []
var antibust = []
var bomb = []
var rock = []
var side = 15;
for (var y = 0; y < 50; y++) {
    matrix[y] = []
    for (var x = 0; x < 50; x++) {
        matrix[y].push(Math.floor(Math.random() * 8))
    }
}

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);

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



}
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("black");
            }
            else if (matrix[y][x] == 3) {
                fill("yellow");
            }
            else if (matrix[y][x] == 4) {
                fill("red");
            }
            else if (matrix[y][x] == 5) {
                fill("red");
            }
            else if (matrix[y][x] == 6) {
                fill("blue");
            }
            else if (matrix[y][x] == 7) {
                fill("orange");
            }
            rect(x * side, y * side, side, side);
        }
    }

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




}