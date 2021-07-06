/*

Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

*/

/*
1- costruisco array con i cognomi della consegna;
2- prompt per il cognome dell'utente;
3- faccio il push del prompt all'interno dell'array;
4- applico il metodo sort al mio array;
5- stampo in console e in pagina;
6- Modifica la posizione dei cognomi all'interno dell'array;

*/
// PER PRENDERMI L'HTML

var orderList = document.getElementById("list-surname-order");
var humanList = document.getElementById("list-human-surname");
var positionSurname = document.getElementById("position-surname");


// ARRAY COGNOMI

var listSurname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.table(listSurname);

// RICHIESTA COGNOME UTENTE

// var userSurname = prompt("Qual è il tuo cognome?");
// console.log(userSurname);


do {
    var userSurname = prompt("Qual è il tuo cognome?");
} while (!userSurname || userSurname === " ")




// INSERIMENTO COGNOME UTENTE IN ARRAY CREATO

listSurname.push(userSurname);
console.table(listSurname);

// ORDINO ARRAY

listSurname.sort();
// STAMPO IN ORDINE ALFABETICO
// in console
console.log("Cognomi messi in ordine a-z");
console.table(listSurname);


var listItem = "";

var i = 0;
while (i < listSurname.length) {
    listItem += "<li>" + listSurname[i] + "</li>";
    ++i;
}

// in HTML

orderList.innerHTML = listItem;


// POSIZIONE "UMANA"

var listItem = "";

var i = 0;
while (i < listSurname.length) {
    listItem += "<li>" + (i + 1) + " " + listSurname[i] + "</li>";
    ++i;
}


// console.table(listItem);
humanList.innerHTML = listItem;


// PER STAMPARE IN HTML POSIZIONE "UMANA": 

var position = listSurname.indexOf(userSurname) + 1;
positionSurname.innerHTML = "La posizione del numero inserito è: " + position;
console.log("Posizione cognome inserito: ", listSurname.indexOf(userSurname) + 1);



// TO DO: .TO LOWER CASE PER LE MAIUSCOLE!!!!!


