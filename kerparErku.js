class Kerparerku {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.energy = 14;
        this.directions = [
            [this.x - 3, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 3],
            [this.x + 2, this.y + 1],
            [this.x + 3, this.y + 2],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 1]
        ];
    }
    getNewDirection() {
        this.directions = [
            [this.x - 3, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 3],
            [this.x + 2, this.y + 1],
            [this.x + 3, this.y + 2],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 1]
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
        if (empty && this.energy > 15) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 5
            var kerku = new Kerparerku(x, y);
            kerparerkuArr.push(kerku)
        }
    }
    move() {
        var empty = random(this.chooseCell(0))
        this.energy--
        if (empty) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 5
            matrix[this.y][this.x] = 0
            this.x = x
            this.y = y
        }
    }
    eat() {
        var food = random(this.chooseCell(4))
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 5
            matrix[this.y][this.x] = 0

            for (var i in kerparmekArr) {
                if (kerparmekArr[i].x == x && kerparmekArr[i].y == y) {
                    kerparmekArr.splice(i, 1)
                }
            }
            this.x = x
            this.y = y
            this.energy++
        }
    }
    eat1() {
        var food = random(this.chooseCell(1))
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 5
            matrix[this.y][this.x] = 1

            for (var i in xotArr) {
                if (xotArr[i].x == x && xotArr[i].y == y) {
                    xotArr.splice(i, 1)
                }
            }
            this.x = x
            this.y = y
            this.energy++
        }
    }
    eat2() {
        var food = random(this.chooseCell(2))
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 5
            matrix[this.y][this.x] = 2

            for (var i in eatArr) {
                if (eatArr[i].x == x && eatArr[i].y == y) {
                    eatArr.splice(i, 1)
                }
            }
            this.x = x
            this.y = y
            this.energy++
        }
    }
    eat3() {
        var food = random(this.chooseCell(3))
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 5
            matrix[this.y][this.x] = 3

            for (var i in gishatichArr) {
                if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                    gishatichArr.splice(i, 1)
                }
            }
            this.x = x
            this.y = y
            this.energy++
        }
    }
    die() {
        if (this.energy <= 0 || this.energy >=16) {
            matrix[this.y][this.x] = 0
            for (var i in kerparerkuArr) {
                if (kerparerkuArr[i].x == this.x && kerparerkuArr[i].y == this.y) {
                    kerparerkuArr.splice(i, 1)
                }
            }
        }
    }
}