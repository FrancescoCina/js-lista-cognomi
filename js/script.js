console.log("JS Ok");


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


var cpuList = document.getElementById("list-cpu-surname");

var listSurname = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.table(listSurname);

var userSurname = prompt("Qual è il tuo cognome?");
// console.log(userSurname);

listSurname.push(userSurname);
console.table(listSurname);

listSurname.sort();
console.log("Cognomi messi in ordine a-z");
console.table(listSurname);

var listItem = "";

/* for (var i = 0; i < listSurname.length; i++) {
    listItem += "<li>" + listSurname[i] + "</li>";
} */


// traduzione del for in while

var i = 0;
while (i < listSurname.length) {
    listItem += "<li>" + listSurname[i] + "</li>";
    i++;
}



cpuList.innerHTML = listItem;

