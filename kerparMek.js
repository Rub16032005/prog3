class Kerparmek {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.energy = 30;
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y + 2],
        ];
    }
    getNewDirection() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y + 2], 
        ];
    }

    chooseCell(character) {
        this.getNewDirection()
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
        if (empty && this.energy > 40) {
            var x = empty[0];
            var y = empty[1];
            matrix[y][x] = 4;
            var kmek = new Kerparmek(x, y);
            kerparmekArr.push(kmek);
        }
    }
    move() {
        var empty = random(this.chooseCell(0))
        this.energy++
        if (empty) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 1
            this.x = x
            this.y = y
        }
    }
    eat1() {
        var food = random(this.chooseCell(1))
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 4
            matrix[this.y][this.x] = 2

            for (var i in xotArr) {
                if (xotArr[i].x == x && xotArr[i].y == y) {
                    xotArr.splice(i, 1)
                }
            }
            this.x = x
            this.y = y
            this.energy+=3
        }
    }
    eat2() {
        var food = random(this.chooseCell(2))
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 4
            matrix[this.y][this.x] = 3

            for (var i in eatArr) {
                if (eatArr[i].x == x && eatArr[i].y == y) {
                    eatArr.splice(i, 1)
                }
            }
            this.x = x
            this.y = y
            this.energy+=3
        }
    }
    eat3() {
        var food = random(this.chooseCell(3))
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 4
            matrix[this.y][this.x] = 1

            for (var i in gishatichArr) {
                if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                    gishatichArr.splice(i, 1)
                }
            }
            this.x = x
            this.y = y
            this.energy+=3
        }
    }
    die() {
        if (this.energy <= 0 || this.energy >=90) {
            matrix[this.y][this.x] = 1
            for (var i in kerparmekArr) {
                if (kerparmekArr[i].x == this.x && kerparmekArr[i].y == this.y) {
                    kerparmekArr.splice(i, 1)
                }
            }
        }
    }
}

