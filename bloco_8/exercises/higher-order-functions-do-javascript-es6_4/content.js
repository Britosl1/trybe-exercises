// exemplo 1 - Soma elementos do array

const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// exemplo 2

const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15

// exemplo 3

const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 100);
console.log(bigger); // 85

// somar todos os números pares do array
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const even = (evenN, number) => number % 2 === 0;

const sumNumbers2 = numbers.reduce(even);
console.log(sumNumbers2);