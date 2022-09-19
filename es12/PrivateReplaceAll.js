// EcmaScript
// *******************************replaceAll****************************
const string =
  'JavaScript es maravilloso, con JavaScript es el futuro de la web';

const replacedString = string.replace('JavaScript', 'Python');
const replacedString2 = string.replaceAll('JavaScript', 'Python');

console.log(replacedString);
console.log(replacedString2);

// ****************************methods private*************************
// con la almohadilla hacemos el meto privado para ello necesitamos
// getter para acceder y un setter para cambiarlo
class Message {
  #show(val) {
    console.log(val);
  }
}

// const message = new Message();
// message.show('Hola');

//*************************promise********************************
//  es otra forma de manejar varias promesas, que retornará la primera promesa que sea resuelta y se rechazará si todas las promesas son rechazadas.
const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

//*************************WeakRef*********************************
// Un objeto WeakRef consiste en mantener una referencia débil a otro objeto, para evitar que ese objeto sea eliminado por el Garbage Collection{target="_blank"}.

class anyClass {
  constructor(element) {
    this.ref = new WeakRef(element);
  }
}

//*************************Nuevos operadores de asignación*************************
// En ES2021 se agregaron tres operadores de asignación:

// Asignación AND (&&=), en caso de cumplirse una verdad, asigna un valor a una variable.
// Asignación OR (||=), en caso de cumplirse una falsedad, asigna un valor a una variable.
// Asignación Nullish (??=), en caso de cumplirse undefined o null, asigna un valor a una variable.

let isTrue = true;
let isFalse = false;
console.log((isTrue &&= isFalse));
console.log((isTrue ||= isFalse));
console.log((isTrue ??= isFalse));

/**
 * TC39 es un grupo de desarrolladores que están a cargo de revisar cada nueva propuesta y que cumplan el
 * estándar. El estándar es una serie de pasos que la nueva propuesta sigue para publicarla en la
 * siguiente versión, estas etapas son:
 *
 * Idea: Una inquietud del desarrollador.
 * Propuesta: Cómo y por qué la idea soluciona un problema.
 * Borrador: Todo lo que implica la nueva funcionalidad detalladamente.
 * Candidato: La funcionalidad es probada y desarrollada por el comité.
 * Preparada: La funcionalidad está lista para ser publicada.
 */
