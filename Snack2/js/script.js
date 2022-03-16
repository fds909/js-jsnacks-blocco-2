/*
    Snack2
    Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi,
    e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

// liste input
const nomi = ["Marco", "Giulia", "Paolo", "Giorgia", "Giovanni", "Elisa"];
const cognomi = ["Verdi", "Rossi", "Bianchi", "Neri", "Marrone", "Bisio"];
const invitati = [];

// generazione di 5 nomi casuali
for (let i = 0; i < 5; i++) {
    let randomName = `${nomi[Math.floor(Math.random() * nomi.length)]} ${cognomi[Math.floor(Math.random() * cognomi.length)]}`;
    invitati.push(randomName);
}

// stampa output
console.log(invitati);

invitatiList = document.getElementById("invited");

for (let i = 0; i < invitati.length; i++) {
    invitatiList.innerHTML += `<li>${invitati[i]}</li>`;
}