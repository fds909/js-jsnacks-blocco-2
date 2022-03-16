/*
    Snack3
    Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari.
*/

const nums = [12, 5, 3, 8, 55, 3, 90, 11, 9, 4];
let oddSum = 0;

// somma degli elementi in posizione dispari
for (let i = 1; i < nums.length; i = i + 2) {
    oddSum += nums[i];
}

// output
console.log(oddSum);

document.getElementById("sum").innerHTML = `La somma degli elementi in posizione dispari è ${oddSum}`;