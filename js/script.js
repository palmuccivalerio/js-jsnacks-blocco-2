

Esercizio 1:
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo.






const userNum= parseInt (prompt("iNSERISCI UN NUMERO")) 

for (let i = 0; i < userNum; i++) {
    // Array per memorizzare i numeri casuali
    let randomNumbers = [];
    let rdnNmB = (Math.floor(Math.random)*100)+1;
}