// Closure
// proporciona acceso al ambito lexico

function greeting() {
  let username = 'oscar';

  function displayUserName() {
    return `Hola ${username}`;
  }
  return displayUserName();
}

const g = greeting();
console.log(g);
console.log(g());

// tambien esta recordando el contexto
