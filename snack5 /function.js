/**
 * Restituisce una stringa contenente tutti gli elementi dell'array, separati da una virgola.
 * @param {Array} array - Un array di elementi.
 * @returns {string} Una stringa contenente tutti gli elementi dell'array, separati da una virgola.
 */
function stampaElem(array) {
    let result = ""; // Variabile per contenere gli elementi concatenati
    for (let i = 0; i < array.length; i++) {
        result += array[i]; // Concatena l'elemento corrente
        result += ", "; // Aggiunge una virgola dopo ogni elemento
    }
    return result;
}
