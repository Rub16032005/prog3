var matrix = [];
var side = 15;
var xotArr = []; //խոտերի զանգված
var eatArr = []; //խոտակերների զանգված
var gishatichArr = [];
var kerparmekArr = [];
var kerparerkuArr = [];

var n = 40;
var e = [0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,5,5,5,5,5,5,5,6,6,6];
for(var a = 0; a < n; a++){
    matrix.push([])
    for(var b = 0; b < n; b++){
        var c = Math.floor(Math.random()* e.length);
        matrix[a].push(e[c]);
    }
}


function setup() {
     frameRate(5)

    noStroke();
    
    createCanvas(matrix[0].length * side, matrix.length * side); //կտավի չափերը դնել մատրիցայի չափերին համապատասխան
    background('#acacac');
    
    //Կրկնակի ցիկլը լցնում է օբյեկտներով խոտերի և խոտակերների զանգվածները
    //հիմնվելով մատրիցի վրա 
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            } 
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y);
                gishatichArr.push(gishatich);
            }
            else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                xotArr.push(grass);
            }
             else if (matrix[y][x] == 4) {
                var kmek = new Kerparmek(x, y, 1);
                kerparmekArr.push(kmek)
            }
            else if (matrix[y][x] == 5) {
                var kerku = new Kerparerku(x, y, 1);
                kerparerkuArr.push(kerku)
            }
        }
    }
}

//draw ֆունկցիան գծում է «կադրերը», վարկյանում 60 կադր արագությամբ
//եթե տրված չէ այլ կարգավորում frameRate ֆունկցիայի միջոցով
//draw ֆունկցիան ինչ որ իմաստով անվերջ կրկնություն է (цикл, loop)
function draw() {
    //Գծում է աշխարհը, հիմվելով matrix-ի վրա
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } 
            else if (matrix[i][j] == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            } 
            else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill('red');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                fill('blue');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill('#000');
                rect(j * side, i * side, side, side);
            }
        }
    }


    //յուրաքանչյուր խոտ փորձում է բազմանալ
    for (var i in xotArr) {
        xotArr[i].mul();
    }

    //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
   for (var i in eatArr) {
        eatArr[i].mul()
        eatArr[i].move()
        eatArr[i].eat()
        eatArr[i].die()
    }
    //յուրաքանչյուր գիշատիչ փորձում է ուտել խոտակեր 
    for (var i in gishatichArr) {
        gishatichArr[i].mul()  
        gishatichArr[i].move()
        gishatichArr[i].eat()
        gishatichArr[i].die()
    }
     for (var i in kerparmekArr) {
        kerparmekArr[i].mul()
        kerparmekArr[i].move()
        kerparmekArr[i].eat1()
        kerparmekArr[i].eat2()
        kerparmekArr[i].eat3()
        kerparmekArr[i].die()
    }
    for (var i in kerparerkuArr) {
        kerparerkuArr[i].mul()
        kerparerkuArr[i].move()
        kerparerkuArr[i].eat1()
        kerparerkuArr[i].eat2()
        kerparerkuArr[i].eat3()
        kerparerkuArr[i].eat()
        kerparerkuArr[i].die()
    }
}