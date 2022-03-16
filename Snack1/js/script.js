/*
    Snack1
    Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
*/

// Input utente
let num = parseInt(prompt("Inserisci un numero"));

if (num % 2 == 0) {
    console.log(num);
    document.getElementById("number").innerHTML = num;
} else {
    console.log(num + 1);
    document.getElementById("number").innerHTML = num + 1;
}