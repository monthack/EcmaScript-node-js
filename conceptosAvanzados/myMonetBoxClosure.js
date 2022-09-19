//acceder y recordar la variable
// My money box

// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins; //adición
//   console.log(`MoneyBox: $${saveCoins}`);
// }

// //no esta recordando por eso no tiene memoria
// //hacemos una closure para recordar lo que tiene con un ambito lexico
// moneyBox(5);
// moneyBox(5);

function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const myBoxAna = moneyBox();
myBoxAna(5);
myBoxAna(30);

//recuerda el contexto del ambito lexico(referencia del estado)
