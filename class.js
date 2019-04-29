//խոտի կլասը
class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.multiply = 5;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {    
                    found.push(this.directions[i]);
                }
            }

        }

        return found;
    }
    mul() {
        var empty = random(this.chooseCell(0))
        this.multiply++
        if (empty && this.multiply >= 8) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 1
            var gr = new Grass(x, y, 1);
            xotArr.push(gr);
            this.multiply = 0;
        }
    }
}



//խոտակերի կլասը
class Eatgrass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 15;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(character) {
        this.getNewDirections()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    mul() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 11) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 2
            var xt = new Eatgrass(x, y );
            eatArr.push(xt)
            this.multiply = 0;
        }
    }
    move() {
        var empty = random(this.chooseCell(0))
        this.energy--
        if (empty) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 2
            matrix[this.y][this.x] = 0
            this.x = x
            this.y = y
        }
    }
    eat() {
        var food = random(this.chooseCell(1))
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 2
            matrix[this.y][this.x] = 0

            for (var i in xotArr) {
                if (xotArr[i].x == x && xotArr[i].y == y) {
                    xotArr.splice(i, 1)
                }
            }
            this.x = x
            this.y = y
            this.energy+=2
        }
    }
    die() {
        if (this.energy <= 5 || this.energy >= 15) {
            matrix[this.y][this.x] = 0
            for (var i in eatArr) {
                if (eatArr[i].x == this.x && eatArr[i].y == this.y) {
                    eatArr.splice(i, 1)
                }
            }
        }
    }
}
