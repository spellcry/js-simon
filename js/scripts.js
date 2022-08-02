// funzione per ottenere un numero random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// funzione che genera un array di 5 numeri casuali non doppi
function getArrayNumeriRandom() {
    let numeri = [];
    let i = 0;
    while ( i < 5 ) {
        const num = getRandomIntInclusive(1, 100);
        if ( !numeri.includes(num) ) {
            i++;
            numeri.push(num);
        }
    }
    return numeri;
}

// funzione che mostra un alert coi numeri generati
function mostraNumeri() {
    alert(`${arrayNumeri[0]} ${arrayNumeri[1]} ${arrayNumeri[2]} ${arrayNumeri[3]} ${arrayNumeri[4]}`);
}

// funzione che crea un array di numeri indovinati
// restituisce un array
function getArrayNumeriIndovinati() {
    let array = [];
    for ( let i = 0; i < 5; i++ ) {
        let numero = inserisciNumero(array);
        if ( isIndovinato(numero) ) {
            array.push(numero);
        }
    }
    return array;
}

// funzione che chiede all'utente di inserire un numero
// restituisce il numero
function inserisciNumero(array) {
    let numero;
    do {
        numero = parseInt(prompt('Inserisci un numero tra quelli visti in precedenza. NO doppioni.'));
    } while ( isNaN(numero) || array.includes(numero) );
    return numero;
}

// funzione che dice se il numero è indovinato o no
function isIndovinato(numero) {
    return arrayNumeri.includes(numero);
}

// funzione che stampa il risultato nella pagina
function stampaRisultato(numeriIndovinati) {
    let msg = "";
    for ( let i = 0; i < numeriIndovinati.length; i++ ) {
        if ( i === numeriIndovinati.length - 1 ) {
            msg += `${numeriIndovinati[i]}`;
        } else {
            msg += `${numeriIndovinati[i]} `;
        }
    }
    let text = `Hai indovinato ${numeriIndovinati.length} `;       
    switch (numeriIndovinati.length) {
        case 0:
            text += `numeri!`;
            resultEl.innerHTML += `
                <div>
                    ${text}
                </div>`;
                break;
        case 1:
            text += `numero!`;
            resultEl.innerHTML += `
                <div>
                    ${text}
                </div>
                <div>
                    Il numero è: ${msg}
                </div>`;
            break;
        default:
            text += `numeri!`;
            resultEl.innerHTML += `
                <div>
                    ${text}
                </div>
                <div>
                    I numeri sono: ${msg}
                </div>`;
            break;
    }
}

const resultEl = document.querySelector('.result');

let arrayNumeri = getArrayNumeriRandom();
mostraNumeri();

setTimeout(() => {
    let numeriIndovinati = getArrayNumeriIndovinati();
    stampaRisultato(numeriIndovinati);
}, 30000);