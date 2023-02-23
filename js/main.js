let avvioForm = document.querySelector("#avvio_form");

const nomeCognomeScelti = "";

const kmScelti = "";

avvioForm.addEventListener("click",
    function () {
        const nomeCognome = document.getElementById("nome_cognome");
        const nomeCognomeScelti = nomeCognome.value;
        console.log(nomeCognomeScelti)

        const kmPercorrere = document.getElementById("km_da_percorre");
        const kmScelti = kmPercorrere.value;
        console.log(kmScelti)

    }
);

console.log(nomeCognomeScelti)
console.log(kmScelti)


const resetForm = document.querySelector('#reset_form');

resetForm.addEventListener('click', 
    function () {
        const nomeCognome = document.getElementById("nome_cognome");
        nomeCognome.value ="";


        const kmPercorrere = document.getElementById("km_da_percorre");
        kmPercorrere.value="";
    }
);
/*
let prezzo = km * 0.21;

console.log (prezzo);

if ((isNaN(km)) || (isNaN(eta))) {
    document.getElementById("prezzoTreno").innerHTML = "Hai digitato incorrettamente";
} else {
    if (eta > 65) {
        prezzo = prezzo - ((prezzo * 40) / 100);
    } else if (eta < 18) {
        prezzo = prezzo - ((prezzo * 20) / 100);
    }
    
    console.log(prezzo);
    console.log(prezzo.toFixed(2));
    
    if (eta > 65) {
        document.getElementById("prezzoTreno").innerHTML = 
        `
            Hai uno sconto del 40%:
            ${prezzo.toFixed(2)}
            $
        `;
    } else if (eta < 18) {
        document.getElementById("prezzoTreno").innerHTML = 
        `
            Hai uno sconto del 20%:
            ${prezzo.toFixed(2)}
            $
        `;
    } else {
        document.getElementById("prezzoTreno").innerHTML = 
        `
            ${prezzo.toFixed(2)}
            $
        `;
    }
}

*/