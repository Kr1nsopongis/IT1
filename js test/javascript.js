let ugyldigAlder = document.getElementById("alderNei");
let kjonn = "";
let brukere = ;

document.getElementById("bruker").addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    let navn = document.getElementById("Fornavn").value + " " + document.getElementById("Etternavn").value;
    kjonn = document.getElementById("brukerKjonn").value;
    console.log(navn);
    console.log(kjonn);
});

document.getElementById("interesser").addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    let navn = document.getElementById("Fornavn").value + " " + document.getElementById("Etternavn").value;
    kjonn = document.getElementById("brukerKjonn").value;
    console.log(navn);
    console.log(kjonn);
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

