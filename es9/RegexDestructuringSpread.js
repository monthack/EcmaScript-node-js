const obj = {
  name: 'Montse',
  age: 26,
  country: 'MX',
};

// Desestructuración
let { country, ...all } = obj;
console.log(all);

//Propagación
const obj2 = {
  name: 'montse',
  age: 23,
};

const obj3 = {
  ...obj2,
  country: 'MX',
};

console.log(obj3);

// promise.finally
//  cuando a terminado la ejecucion y que hacer al final

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Hello'), 3000)
      : reject(new Error('Test Error'));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log('Finalizo'));

//Agrupar bloques de regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);
