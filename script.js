/*Js Griglia Campo Minato
1. L'utente indica un livello di difficoltà al quale viene generata una griglia di gioco quadrata
    Ogni cella continue un numero compreso tra:
    
    Difficoltà 1 > tra 1 e 100
    Difficoltà 2 > tra 1 e 81
    Difficoltà 3 > tra 1 e 49

2. Quando l'utente clicca sulle celle quelle cambiano colore di azzurro
*/

const selezioneDifficolta = document.querySelector("#difficulty");
const griglia = document.querySelector('.griglia');
const tasto = document.querySelector('#play');

tasto.addEventListener('click', function (evento) {
    const livelloDifficolta = selezioneDifficolta.value;
    alert(`Difficoltà ${livelloDifficolta}`)
    creaGriglia(livelloDifficolta);
})


function creaGriglia(difficolta = 'easy'){
    if (griglia.classList.contains('easy'))griglia.classList.replace('easy', difficolta)
    if (griglia.classList.contains('normal'))griglia.classList.replace('normal', difficolta)
    if (griglia.classList.contains('hard'))griglia.classList.replace('hard', difficolta)

    griglia.innerHTML = ('');

    let numeroDiCelle = 25;
    let  max = 100; 
    if (difficolta === 'easy') {
        max = 100;
        numeroDiCelle = 25;
    }
    if (difficolta === 'normal') {
        max = 81;
        numeroDiCelle = 64;
    }
    if (difficolta === 'hard') {
        max = 49; numeroDiCelle = 100;
    }
    
    const numeri = [];
    while (numeri.length < numeroDiCelle) {
        numeri.push(Math.floor(Math.random() * max + 1))
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

creaGriglia('easy')