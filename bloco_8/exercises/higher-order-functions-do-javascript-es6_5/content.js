function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// rest

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60, 100, 12034315, 3434)); // 88


const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
  const { nationality } = person;

  console.log(nationality);



  const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,});
  
  console.log(getPosition(-19.8157, -43.9542));