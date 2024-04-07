
/**
 * Conta il numero di elementi presenti in un array.
 * @param {Array} array - Un array di elementi.
 * @returns {number} Il numero di elementi presenti nell'array.
 */
function contaElementi(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        count++;
    }
    return count;
}