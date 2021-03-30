const randomNumber = () => {
    const random = Math.floor((Math.random() * 5) + 1);
    return random
}

randomNumber();

const numberCheck = (randomNumber, number) => {
    const check = () => {
        if (randomNumber !== number) {
            console.log("Tente novamente");
        }
        else {
            console.log("Parabéns você ganhou");
        }
    }
    return check ();
}

numberCheck(randomNumber, 1);