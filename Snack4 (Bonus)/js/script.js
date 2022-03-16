/*
    Snack4 (Bonus)
    Crea due array che hanno un numero di elementi diversi. 
    Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

// Generazione dei 2 array
let array1 = [];
let array2 = [];
const array1Lenght = Math.floor(Math.random() * 100) + 1;
const array2Lenght = Math.floor(Math.random() * 100) + 1;

//  popolamento degli array
for (let i = 0; i < array1Lenght; i++) {
    array1.push(Math.floor(Math.random() * 100) + 1);
}
for (let i = 0; i < array2Lenght; i++) {
    array2.push(Math.floor(Math.random() * 100) + 1);
}

console.log(array1);
console.log(array2);

// riempimento dell'array con meno elementi
if (array1.length < array2.length) {
    for (let i = array1.length; i < array2.length; i++) {
        array1.push(Math.floor(Math.random() * 100) + 1);
    }
} else {
    for (let i = array2.length; i < array1.length; i++) {
        array2.push(Math.floor(Math.random() * 100) + 1);
    }
}

console.log(array1);
console.log(array2);
