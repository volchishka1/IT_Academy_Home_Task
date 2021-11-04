let rand_colors = [];

function randomDiap(n,m) {
    while (true) {
        let result = Math.floor(Math.random()*(m-n+1))+n;
        if (rand_colors.indexOf(result) === -1) {
            rand_colors.push(result)
            return result
        }
    }
}

function mood(colorsCount) {
var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
console.log( 'цветов: ' + colorsCount );

for ( var i=1; i<=colorsCount ; i++ ) {
    var n=randomDiap(1,7);
    var colorName=colors[n];
    console.log( colorName );
}
}

mood(3);

