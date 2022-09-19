// EcmaScript 6

//*************************Default params*************************

function newFunction(name = 'oscar', age = 19) {
  console.log(name, age);
}

newFunction();

//*************************Concatenación*************************
let hello = 'Hello';
let world = 'World';
let epicPharase = `${hello} ${world}`;
console.log(epicPharase);

//*************************Multilínea*************************
let loream = `sndkmsndk jdjdjs jsioakhue osoid 
si soy`;
console.log(loream);

//*************************Desestructuración*************************
let person = {
  name: 'Montse',
  age: 23,
  country: 'MX',
};

console.log(person.name);
let { country, age } = person;
console.log(country);

//*************************Spread operador*************************
let team1 = ['Oscar', 'Julian', 'Pedro'];
let team2 = ['Steven', 'Guillermo', 'Carlos'];

let education = ['Francisco', team1, team2];

console.log(education);

//*************************let y const*************************
// let solo puede ser accedido en su bloque
{
  var globalVar = 'global';
}
{
  let globalLet = 'Global let';
  console.log(globalLet);
}

console.log(globalVar);

// no le puedo reasignar la const

// *************************Objetos mejorados*************************
// crear un objeto en base a unas variables
let namePerson = 'Montse';
let age = 32;
// antes
obj = { namePerson: namePerson, age: age };
// es6
obj5 = { namePerson, age };

// *************************Arrow Function*************************

// un this no vinculado
const nnames = [
  { name: 'Montse', age: 26 },
  { name: 'Susana', age: 60 },
];

let listOfNames = names.map((item) => console.log(item.name));

// *************************Promesas*************************

// Algo va a pasar, algo que estamos estableciendo

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('hey');
    } else {
      reject('ups');
    }
  });
};
// ejecutamos la promesa

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
// *************************Parametros en objetos*************************
// *************************Clases*************************
// *************************Módulos*************************
// *************************Generadores*************************
