/**
     *  Il computer deve generare 16 numeri casuali tra 1 e 100.
        I numeri non possono essere duplicati.
        In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, 
        sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
        Se il numero è presente nella lista dei numeri generati, la partita termina, 
        altrimenti si continua chiedendo all’utente un altro numero.  La partita termina quando il giocatore 
        inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
        Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che 
        l’utente ha inserito un numero consentito.
    * 
    */

    //  # PREPARATION
    //  1 - Creiamo un bell'array all'interno del quale inserire (poi) le bombe
    //  2 - Genero un numero randomico e lo inserisco all'interno dell'array di cui sopra ^, FINCHE' non arrivo a 16
    //  3 - Crea un array per ricordare i numeri (scelti) dall'utente
    // **** Creo una variable di appoggio per il punteggio

    // # GAMEPLAY
    // 1) Chiedere un numero all'utente
    // 2) Controllare che il numero non sia presente nell'array di bombe !!! ALTRIMENTI KABOOM
    // 3) Controllo se per caso lo aveva già scelto (è già presente nell'array dei numeri scelti dall'utente)
    // 4) Se il numero non è esplosivo e non è stato scelto, lo aggiungo nell'array dei numeri scelti
    //  

    // # ENDGAME
    // a. Stampiamo il messaggio di alert del gioco (se hai vinto o perso)
    // b. Stampiamo il punteggio del giocatore 

let bombe = [];

let numeriUtente = []

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

while (bombe.length < 16){

    let bombaRandom = randomNumber(1,101);

    if (bombe.includes(bombaRandom)){
        bombe.length < 16;
    }else {
        bombe.push(bombaRandom);
    }
}

let haiPerso = false;

console.log(bombe);

while ((numeriUtente.length + bombe.length) <= 100 && !haiPerso){

    let numeroCorrente = parseInt(prompt("Inserisci un numero.. hihihi.."));

    if (bombe.includes(numeroCorrente)){
        alert("KABOOOMMM!!!")
        haiPerso = true
    }else if (numeriUtente.includes(numeroCorrente)){
        alert("hai già inserito questo numero");
    }else if (isNaN(numeroCorrente) || numeroCorrente < 1 || numeroCorrente > 100){
        alert("inserisci un numero da 1 a 100 nient'alrto");
    }else {
        numeriUtente.push(numeroCorrente);
    }
}


if (numeriUtente.length == 84){
    console.log("Complimenti sei scampato alla morte! Le bombe erano.. " + bombe);
}else if (haiPerso == true){
    console.log("il tuo punteggio è di " + numeriUtente.length + " Game over" );
}


console.log("i numeri che hai inserito sono " + numeriUtente)