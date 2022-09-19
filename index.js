// Como aplanar nuestra matriz osea la profundidad
//submatriz aplanada
let arr = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

// flat recibe como argumento la profundidad
console.log(arr.flat(2));

// mapear cada elemento pasarle una funcion segun sea el resultado

let array = [1, 2, 3, 4, 5];

console.log(array.flatMap((value) => [value, value * 2]));

// Eliminar los espacios en blancos de un string
let hello = '                 Hellow Montse';

console.log(hello);
console.log(hello.trimStart());

let hell = 'Hellow       ';
console.log(hell);
console.log(hell.trimEnd());

//TryCatch
try {
} catch {
  error;
  // sin pasarlo como parametro
}

// Frontendty
// transforma clave valor en un objeto

let entries = [
  ['name', 'oscar'],
  ['age', 32],
];

// el objeto de tipo simbolo
let mySymbl = `My Simbol`;
let simbl = Symbol(mySymbl);
console.log(simbl.description);

console.log(Object.fromEntries(entries));

//operador de reposo

const obj = {
  name: 'oscar',
  age: 32,
  country: 'MX',
};

let { country, ...all } = obj;
console.log(country);

//parametro rest
function hola(primero, segundo, ...resto) {
  console.log(primero, segundo); // 1 2
  console.log(resto); // [3,4,5,6]
}

hola(1, 2, 3, 4, 5);

//encadenar

const obj2 = {
  name: 'oscar',
  age: 32,
};
const obj3 = {
  ...obj2,
  country: 'MX',
};

console.log(obj3);

//promise.finaly

const madre = (resolve, reject) => {
  true ? resolve('Hello world') : reject(new Error(error));
};

madre()
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally(() => console.log('Finalizo'));
