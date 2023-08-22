let personer = [
    {
        navn: "Rolf",
        alder: 13,
        result1: 1,
        result2: 0,
        result3: 4,
        tot: 5,
},
    {
        navn: "Adib",
        alder: 17,
        result1: 0,
        result2: 3,
        result3: 0,
        tot:3 },

    {   navn: "ragnhild",
        alder: 23,
        result1: 0,
        result2: 0,
        result3: 2,
        tot: 25,
    },
        {navn: "Somdre",
        alder: 7,
        result1: 1,
        result2: 0,
        result3: 0,
        tot: 1,
    },
    {   navn: "Ole",
        alder: 9,
        result1: 1,
        result2: 2,
        result3: 4,
        tot: 7},
    
        

]

let arraySkjekk


document.getElementById("skjemaNyBruker").onsubmit = function(evt) {
    evt.preventDefault();
    let nyttNavn = document.getElementById("nyttNavn").value;
    let nyAlder = document.getElementById("nyAlder").value;
    // let nyResult1 = document.getElementById("nyResult1").value;
    // let nyResult2 = document.getElementById("nyResult2").value;
    // let nyResult3 = document.getElementById("nyResult3").value
    // let nyTot = nyResult1+nyResult2+nyResult3


    let nyPerson = {
        navn : nyttNavn,
        alder : nyAlder,
        result1 : 0,
        result2 : 0,
        result3 : 0,
        tot : 0
    };
    personer.push(nyPerson);
    utskrift.innerHTML += "<li>" + nyPerson.navn + " (alder: " + nyPerson.alder +")"+"</li>";
    console.log(personer)
}


    

const utskrift = document.querySelector("#utskrift");
    for(let person of personer){
        utskrift.innerHTML += "<li>" + person.navn + " (alder: " + person.alder +")"+ "</li>";
    }; 

console.log(personer)

if (personer.includes(person)){}
