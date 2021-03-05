//Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;

let number = 0;

for (let i = 0; i < 25; i += 1){
   
    for (let j = 0; j < i.lenght; j += 1){
            number[j] += 1;
        }

    if (number < 25){
        number = number + 1;
    }   
    console.log (number / 2); 
}

