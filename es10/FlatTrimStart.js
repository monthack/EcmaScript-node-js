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
