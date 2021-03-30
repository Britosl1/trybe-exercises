
const newEmployees = (employee) => {
    const employees = {
      id1: employee('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
      id2: employee('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
      id3: employee('Carla Paiva') // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    }
    return employees;
  };

  const employee = (fullName) => {
    const email = `${fullName}.@trybe.com`

    return {
        nome: fullName,
        emailCorporativo: email
    }
}

console.log(newEmployees(employee));