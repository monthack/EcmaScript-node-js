//Object.entries
//nos va a devolver la clave y valores de una matriz

const data = {
  frontend: 'Montse',
  backend: 'Emma',
  desing: 'Ann',
};

const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);

//Object.value
//me devulve los valores de un objeto a un arreglo
const dat = {
  frontend: 'Montse',
  backend: 'Emma',
  desing: 'Ann',
};

const values = Object.values(dat);
console.log(values);

//padding
//se ocupa más que nada

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padStart(12, '------------'));
console.log('food'.padStart(23, '---------------'));

//async awe

const soyPromesa = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('holis'), 3000)
      : reject(new Error('test erro'));
  });
};

const soyAsing = async () => {
  const hola = await soyPromesa();
  console.log(hola);
};
soyAsing();

//correctamente
const anotherFunction = async () => {
  try {
    const hello = await soyPromesa;
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
