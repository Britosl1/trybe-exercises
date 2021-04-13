setTimeout(() => {
    console.log('Comprar parafusos') // Comprar parafusos
    console.log('Adicionar ao estoque') // Adicionar ao estoque
  }, 2000);
  
  console.log('1 - Receber roda'); // 1 - Receber roda
  console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
  console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro


  const myExpenses = [
    {
      gym: 99,
    },
    {
      ifood: 200,
    },
    {
      phone: 60,
    },
    {
      internet: 100,
    },
  ];
  
  const myIncome = 1000;
  
  const monthlyBudget = (myIncome, myExpenses, callback) => {
    const totalExpenses = callback(myExpenses);
    const totalAfterExpenses = myIncome - totalExpenses;
  
    console.log(`Balanço do mês:
      Recebido: R$${myIncome},00
      Gasto: R$${totalExpenses},00
      Saldo: R$${totalAfterExpenses},00 `);
  };
  
  const handleExpenses = myExpenses => {
    const eachValue = myExpenses.map((item => Object.values(item)));
    const totalExpense = eachValue.reduce((acc, curr) => acc += curr[0] , 0);
    return totalExpense;
  };
  
  monthlyBudget(myIncome, myExpenses, handleExpenses);
  
  // Balanço do mês:
  //     Recebido: R$1000,00
  //     Gasto: R$459,00
  //     Saldo: R$541,00



  // exercicio 1
const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (name, nation, callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  console.log(userToReturn);
};
getUser(userFullName, userNationality, getUser)

assert.strictEqual(getUser(), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(), "Ivan is Russian"); // complete a chamada da função de getUser