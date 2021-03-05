function higherKey(array){
    
    let key = 0;

    for (let i in array){
        if (array[i] > array[key]){
            key = i;
        }
    }

    return key;
}

console.log(higherKey([2, 4, 6, 7, 10, 0, -3]));