"Use strict" 

const numberOfSeries = +prompt("Nechta serial Ko'rgansiz", "");

const SeriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false,
} 

for(let i = 0; i < 2; i++) {
    const a = prompt("Oxirgi ko'rgan serialingiz?"),
     b = prompt("Necha baxo baresiz?");

    if(a != null && b != null || a != null && b != null ){
        SeriesDB.series[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
    console.log(SeriesDB);
}

if ( SeriesDB.count < 5) {
    console.log("Siz kinochi tomoshabin emas ekansiz");
} else if ( SeriesDB.count >= 5 && SeriesDB.count < 10) {
    console.log("Siz classik tomoshabin ekansiz");
} else if ( SeriesDB.count >= 10){
    console.log("Siz kinochi zvezda ekansiz");
} else {
    console.log("error");
}

console.log(SeriesDB);