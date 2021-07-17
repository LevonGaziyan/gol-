var LivingCreature = require("./class.js")
module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.multiply = 0;

    }

    chooseCell(character) {
        return super.chooseCell(character);
    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassArr) {
            if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
    }
}