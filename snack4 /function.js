
/**
 * @param elemento
 * @param {Array} array- Un array di elementi.
 * @returns {number} Il numero di elementi presenti nell'array.
 */
function trovaIndice(array, elemento ) {
    let count
    for (let i = 0; i < array.length; i++) {
        count++
        if (elemento === array[i]){
            return i
        }

    }
    return -1;
}