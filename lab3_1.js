var i;
var j;
var wiersz = "";
for (i = 1; i <= 10; i++){
    wiersz = "";
    for (j = 1; j <= 10; j++){
        wiersz += i*j + " ";
    }
    console.log(wiersz);
}