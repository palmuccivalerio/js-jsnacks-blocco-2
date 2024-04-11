function rimuoviDallaCoda(array) {

    let newArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        newArray.push(array[i]);
    }
    console.log("Nuovo array senza l'ultimo elemento:", newArray);
    return newArray;
    
}
