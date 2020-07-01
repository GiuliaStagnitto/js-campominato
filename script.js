
var arrayBombe = [] ;
var maxBombe = 16 ;

// Il computer deve generare 16 numeri casuali tra 1 e 100.
while (arrayBombe.length < maxBombe) {
  var bomba = getRandom(1, 100);
  if (inArray(arrayBombe, maxBombe) != true) {
    arrayBombe.push(bomba);
  }
}
console.log(bomba);
console.log(arrayBombe);

// chiedere all’utente 84 (10) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var numeriUtente = [];
var maxTentativi = 100 - maxBombe;
var punti = 0;

var i = 0
var trovato = false;
while (numeriUtente.length < maxTentativi && trovato == false) {
  var numUtente = parseInt(prompt("inserisci un numero"));
  if(inRange(1, 100, numUtente) == true && inArray(arrayBombe ,numUtente) == false ) {
    numeriUtente.push(numUtente);
    punti++;
  }

  console.log(numUtente);
  if (inArray(arrayBombe, numUtente)) {
    console.log("Hai perso");
    trovato = true;
  }
}
if (punti == maxTentativi) {
  console.log('hai vinto');
}

console.log('punti', punti);




// FUNZIONI
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}

function inArray (array, elemento) {
  var i = 0;
  var trovato = false;
  // questo ciclo si deve interompere se raggiungo la lunghezza dell'array oppure se trovo coorispondenza
  while (i < array.length && trovato == false) {
    if(array[i] == elemento) {
      trovato = true;
    }
    i++
  }

  return trovato;
}


function inRange(min, max, num) {
  if(num >= min && num <= max && !isNaN(num)) {
    return true;
  }
  return false;
}
