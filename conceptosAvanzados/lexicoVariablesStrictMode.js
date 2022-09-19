// run `node index.js` in the terminal

// Curso de closure y scope en javascript

var a; //declarado

// Global scope
var fruit = 'Apple';

function bestFruit() {
  console.log(fruit);
}
bestFruit();

// declarar
var fruit;
// asignamos
fruit = 'pera';

// reasignacion
var fruit = 'colibri';

// no podemos reasignar en let y const
// solo cuando se le cambia la referencia

// Strict mode
// no se podra hacwe hoisting

// ***********Que es closure?***********************
// permite acceder al ambito de una funcion exterior desde una funcion inferior

//no siempre son utilizados
//el ambito lexico significa que la accebilidad esta determinada por la pocision de las mismas dentro de los ambitos aninados cada una funcion
const myGlobal = 0;
function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    //funsion internar
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }
    return child();
  }
  return parent();
}

myFunction();
