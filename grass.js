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
        this.multiply++;
        if (this.multiply >= 5) {
            var emptyCells = this.chooseCell(0);
            var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
            if (newCell && this.multiply >= 8) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 1;

                var newGrass = new Grass(newX, newY, 1);
                grassArr.push(newGrass);
                this.multiply = 0;
            }
        }
    }

}