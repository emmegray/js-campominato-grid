/*Js Griglia Campo Minato
1. L'utente indica un livello di difficoltà al quale viene generata una griglia di gioco quadrata
    Ogni cella continue un numero compreso tra:
    
    Difficoltà 1 > tra 1 e 100
    Difficoltà 2 > tra 1 e 81
    Difficoltà 3 > tra 1 e 49

2. Quando l'utente clicca sulle celle quelle cambiano colore di azzurro
*/

const tastiDifficolta = document.querySelectorAll(".difficulty > li > a");
const griglia = document.querySelector('.griglia');

for (let index = 0; index < tastiDifficolta.length; index++) {
    const tasto = tastiDifficolta[index];
    tasto.addEventListener('click', function (evento) {
        const livelloDifficolta = tasto.id;
        alert(`Difficoltà ${livelloDifficolta}`)
        creaGriglia();
    })
}

function creaGriglia(){
    const numeri = [];
    //math.random
    while (numeri.length < 100) {
        numeri.push(Math.floor(Math.random() * 100 + 1))
    }
    for (let index = 0; index < numeri.length; index++) {
        const numero = numeri[index];
        const quadrato = document.createElement('div')
        quadrato.className = 'quadrato';
        quadrato.textContent = numero;
        quadrato.addEventListener('click', function () {
            quadrato.classList.add('bg-blue')
        })
        griglia.appendChild(quadrato);
    }
    console.log(numeri);
}

creaGriglia()