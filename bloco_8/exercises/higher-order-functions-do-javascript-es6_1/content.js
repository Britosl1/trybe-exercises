//Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!') ;

const wakeUp = () => {
  console.log("Acordando!!");
};

//Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!') ;

const haveCoffee = () => {
  console.log("Bora tomar café!!");
};

//Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!') ;

const goToSleep = () => {
  console.log("Partiu Dormir!!");
};

//Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução
//das funções de primeira classe que você criou nos exemplos anteriores.

const doingThings = (action) => {
    return action();
}  
doingThings(wakeUp);
