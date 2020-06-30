// Il computer deve generare 16 numeri casuali tra 1 e 100.
 var arrayBombe = [getRandomIntInclusive16(1, 100)];

console.log(arrayBombe);















// FUNZIONI
function getRandomIntInclusive16(min, max){
  for (var i = 0; i < 16 ; i++) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random()* (max - min + 1)) + min;
  }
  

}
