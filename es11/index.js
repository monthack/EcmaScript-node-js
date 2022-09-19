// EcmaScrip 11 junio 2020
// **************************import dynamic**************************************
const button = document.getElementById('btn');

button.addEventListener('click', async function () {
  const module = await import('./Files.js');
  module.hello();
});

// EcmaScript 11 Juni 2020

// ***************************Numeros enteros mayor a 2a la 53 BigInt*************
const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

// console.log(aBigNumber);
// console.log(anotherBigNumber);

//***************************Promise.allSettled()**********************************

// nos devuelve una promesa que se resuelve despues de todas la promesa
const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));

//****************************promise.all*******************************************
//va a terminar si alguna de las promesas se rechace
// mas sin en cambio Promise.allSetteled no importa el estado de las promesas
// va esperar a que se resulvan
Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

// ****************************globalThis*******************************************
// propiedad de global tiene el valor de this que tiene que es similar al objeto global

// console.log(window);
console.log(globalThis);

// *********************Nullish coalescing operator (??)****************************
// ayuda a trabajar con los tipos nulos

const fooo = null ?? 'default string';
console.log(fooo);

// *********************Optional chaining (?.)***************************************
// como trabajamos los arreglos para no romper la aplicacion en caso de no tener o acceder a ese nivel

const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email) {
  console.log('Email');
} else {
  console.log('Fail');
}
