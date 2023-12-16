

/*
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per la seconda milestone.
Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
:saetta: NOTA BENE:
Seguite le milestone in ordine, non lavorate alla milestone due se prima non avete fatto funzionare la milestone 1!
Mi raccomando altrimenti sará tutto piú complicato. Procedete in ordine.

##tools

- inputs
- const/let
- math
- if/else
- document.getElementById/querySelector
- element.value
- element.addEventListener()
- function(){//code here}

*/
 

const btnGenerate = document.querySelector('#generate');
const ageInputElement = document.querySelector('#age');
const nameInputElement = document.querySelector('#name');
const kmInputElement = document.querySelector('#km');
const price_per_km = 0.21;


const cancelHtml = document.getElementById('cancel');

cancelHtml.addEventListener('click', function(){

    const bigliettoHtml = document.getElementById('biglietto');

    bigliettoHtml.classList.add('d-none')

    ageInputElement.value = "";
    kmInputElement.value = "";
    nameInputElement.value = "";

})




btnGenerate.addEventListener('click', function(){

    // console.log('funziona', ageInputElement.value, kmInputElement.value);

    const age = Number(ageInputElement.value);
    const km = Number(kmInputElement.value);
    const ns = (nameInputElement.value);
    

    // console.log(age, km, price_per_km);
    // console.log(km * price_per_km);

    const full_price = km * price_per_km;

    // console.log(full_price);

    if (age < 18) {
        discount = 0.2

    } else if (age > 65) {
        discount = 0.4 

    } else {
        discount = 0
    }
        
    const carrozza = '701';
    const codposto = 'A45512';
    const namesurname = document.getElementById('name');

    const final_price = full_price - (full_price * discount);

    const costHtml = document.getElementById('cost');
    costHtml.innerHTML = final_price.toFixed(2);

    const cpHtml = document.getElementById('cp');
    cpHtml.innerHTML = codposto;

    const carrozzaHtml = document.getElementById('carrozza');
    carrozzaHtml.innerHTML = carrozza;

    const offertaHtml = document.getElementById('offerta');
    offertaHtml.innerHTML = final_price.toFixed(2);

    const npHtml = document.getElementById('np');
    npHtml.innerHTML = namesurname;
    
    
    // console.log(final_price.toFixed(2));

    
    
    const bigliettoHtml = document.getElementById('biglietto');

    bigliettoHtml.classList.remove('d-none')

    // document.getElementById("Fp").innerHTML = "Il prezzo del biglietto è: " + final_price.toFixed(2) + " €";

    //document.getElementById('finalPrice').innerHTML = final_price;
})