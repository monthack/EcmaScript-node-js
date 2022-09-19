// run `node index.js` in the terminal

function newFunction(name, age, country) {
  var name = name || 'oscar';
  var age = age || 32;
  var country = country || 'MX';
}
newFunction('montse', 26, 'mx');

//es6
function newFunction2(name = 'oscar', age = 32, country = 'MX') {
  console.log(name, age, country);
}
newFunction2();

//template literal (son comillas francesas)
let hello = 'hello';
let world = 'world';
console.log(`${hello} ${world}`);

//antes
let lorem = 'holi soy un  perro gato colita de raton \n' + 'otra frase epica';

//ahora es6
let lorem2 = `holi soy un  perro gato colita de raton 
otra frase epica`;

//desestructuración

let person = {
  name: 'Montse',
  age: 26,
  country: 'MX',
};

//antes
console.log(person.name);

//es6
let { name, age, country } = person;
console.log(name, age, country);

//operador
let team1 = ['oscar', 'montse', 'ricardo'];
let team2 = ['valeria', 'fransisco', 'susana'];
let team3 = ['david', ...team1, team2];

console.log(team3);

//variables

{
  var global = 'Global var';
}

{
  let globalLet = 'global let';
}

//estan en un scope diferentes

//const es una variable que no va a cambiar su valor
const perro = 'holi';

let surname = 'oscar';
let tall = 32;

//es5
obj = { surname: surname, tall: tall };

//es6 crear un objeto asignarlo
obj2 = { surname, tall };

console.log(obj2);

//arrow function
const names = [
  { name: 'Moises', age: 28 },
  { name: 'Fransisco', age: 64 },
];

let listOfNames = names.map((item) => {
  console.log(item);
});

const listOfName2 = () => {};

const listOfName3 = (name) => {};

const listOfName4 = (num) => num * num;

//Promesas
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
};
helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

//trabajar con modulos
import { module } from './module';
module();
