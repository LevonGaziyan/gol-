var socket = io()
var side = 15;
var multiplay = 1
function setup() {
    frameRate(5);
    createCanvas(50 * side, 50 * side);
}
function nkarel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                if (multiplay >= 1 && multiplay < 300) {
                    fill("black");
                    multiplay++
                    console.log(multiplay)
                } else if (multiplay >= 300 && multiplay < 600) {
                    fill("white")
                    multiplay++
                    console.log(multiplay)
                } else {
                    multiplay = 1
                }
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
}
setInterval(
    function () {
        socket.on("send matrix", nkarel
        )
    }, 500)
setInterval(
    function () {
        socket.on("send grass.length", tpel
        )
    }, 500)
function tpel(a) {
    console.log(a)
}