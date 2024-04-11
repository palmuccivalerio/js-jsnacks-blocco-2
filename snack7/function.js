function rimuoviDallaTesta(array) {

    let newArray = [];
    for (let i = 1; i < array.length ; i++) {
        newArray.push(array[i]);
    }
    console.log("Nuovo array senza il primo elemento:", newArray);
    return newArray;
    
}