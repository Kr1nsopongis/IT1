let ugyldigAlder = document.getElementById("alderNei");
let brukere = [];


document.getElementById("bruker").addEventListener("submit", function(evt) {
    evt.preventDefault();

    if (parseInt.document.getElementsByName("alderSkjekk").value = 1){
        let nyPersBrukernavn = document.getElementById("")
        let nyttNavn = document.getElementById("fornavn").value + " " + document.getElementById("etternavn").value;
        let nyPersKjonn = document.getElementById("brukerKjonn").value;
        console.log(nyttNavn);
        console.log(nyPersKjonn);
    }
    
});


// fetch('https://randomuser.me/api/?results=1&?gender='+ kjonn)
//       .then(response => response.json())
//       .then(response => behandleSvar(response))
//       .catch(err => console.error(err));
    


 
// function behandleSvar(svar){
//     console.log(svar)
//     console.log("Navn: " + svar.results[0].name.first)
//     console.log("Alder: " + svar.results[0].registered.age)
//     console.log(svar.results[0].login.password)   
// }

