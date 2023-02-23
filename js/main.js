let avvioForm = document.querySelector("#avvio_form");


avvioForm.addEventListener("click",
    function () {
        const nomeCognome = document.getElementById("nome_cognome");
        const nomeCognomeScelti = nomeCognome.value;
        console.log(nomeCognomeScelti);

        const kmPercorrere = document.getElementById("km_da_percorre");
        const kmScelti = kmPercorrere.value;
        console.log(kmScelti);

        const selettoreEta = document.getElementById("selettore_eta");
        const etaSelezionata = selettoreEta.value;
        console.log(etaSelezionata);

        let prezzo = kmScelti * 0.21;

        console.log (prezzo);

        const minorenne = 18;
        const maggiore65 = 65;

        if (etaSelezionata > maggiore65) {
            prezzo = prezzo - ((prezzo * 40) / 100);
        } else if (etaSelezionata < minorenne) {
            prezzo = prezzo - ((prezzo * 20) / 100);
        }

        console.log(prezzo);
        console.log(prezzo.toFixed(2));

        if (etaSelezionata == maggiore65) {
            document.getElementById("prezzoTreno").innerHTML = 
            `
                Hai uno sconto del 40%:
                ${prezzo.toFixed(2)}
                $
            `;
        } else if (etaSelezionata == minorenne) {
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
    
);



const resetForm = document.querySelector('#reset_form');

resetForm.addEventListener('click', 
    function () {
        const nomeCognome = document.getElementById("nome_cognome");
        nomeCognome.value = "";


        const kmPercorrere = document.getElementById("km_da_percorre");
        kmPercorrere.value = "";

        const selettoreEta = document.getElementById("selettore_eta");
        selettoreEta.value = "";
    }
);



