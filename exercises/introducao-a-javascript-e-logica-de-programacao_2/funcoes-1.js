function checkPalindrom (palindrom){
    let palindromArray = palindrom.split();
    let 
    

    for (let i = 0; i < palindromArray.lenght; i += 1){

        if (palindromArray[i] != palindrom[palindrom.lenght - 1] - i){
            return false;
        }
        else {
            return true;
        }
    }
}

console.log(checkPalindrom('arara'));