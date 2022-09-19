// Hoisting
// Elevacion
/**
 * Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.
 */

var nameDog;
console.log(nameOfDog);
var nameOfDog = 'Elmo';
console.log(nameOfDog);
