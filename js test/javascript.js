let overskrift = document.createElement("h1");
let kjonn = document.getElementById("mann");
let ugyldigAlder = document.getElementById("alderNei");

document.getElementById("bruker").addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    let navnInn = document.getElementById("innNavn").value;
    let alderInn = parseInt(document.getElementById("innAlder").value);

    console.log("ID: " + deltakerIDNr + ", navn: " + navnInn + ", alder: " + alderInn);

    
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
console.log(ugyldigAlder.value)
console.log(kjonn)