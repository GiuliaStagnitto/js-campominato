
var arrayBombe = [] ;
var num ;

// Il computer deve generare 16 numeri casuali tra 1 e 100.
for (var i = 0; i < 16; i++) {
  num = Math.floor(Math.random()* 30);
  if (controlloNumeri(num, arrayBombe)== true) {
    i--;
  } else{
    arrayBombe.push(num);
  }
}
console.log(num);
console.log(arrayBombe);

// chiedere all’utente 84 (10) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var numeriUtente = [];
var numUtente;

for (var i = 0; i < 10 ; i++) {
  numUtente = parseInt(prompt("inserisci un numero"));
  if (controlloNumeri(numUtente, arrayBombe)== true ) {
    console.log("hai inserito un numero bomba");
  } else if (controlloNumeriUtente(numUtente, numeriUtente)== true ){
    alert("Questo numero è già stato inserito");
  }

  console.log(numUtente);
}


// FUNZIONI
function controlloNumeriUtente(numUtente, numeriUtente){
  for (var i = 0; i < numeriUtente.length; i++) {
    if (numUtente == numeriUtente[i]) {
      return true;
    }
  }
  return false;
}

function controlloNumeri(num, arrayBombe){
  for (var i = 0; i < arrayBombe.length; i++) {
    if (num == arrayBombe[i]) {
      return true;
    }
  }
  return false;
}
