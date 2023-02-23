let x = "";
let item = "";
let inputFelt = document.getElementById("inputInteresse");
let liste = document.getElementById("interesser");
let lagring = [];
let baklengs = [];

if (localStorage.getItem('førsteGangsSjekk') > 1) {
    lagring = JSON.parse(localStorage.getItem('interesser'));
    lagring.reverse();
}
//let lagring = [];

for(let i = 0; i < lagring.length; i++) {
    var li = document.createElement("li");
    li.setAttribute('id', lagring[i]);
    li.appendChild(document.createTextNode(lagring[i]));
    liste.appendChild(li);
}

document.getElementById("leggTil").addEventListener("click", addInteresse);
document.getElementById("fjern").addEventListener("click", fjernInteresse);
document.getElementById("gåVidere").addEventListener("click", gåVidere);
document.getElementById("gåTilbake").addEventListener("click", gåTilbake);

//Sjekker etter tastaturtrykk
document.onkeydown = function (e) {
    if (e.key == "Enter") {
        addInteresse();
    }
    if (e.key == "Delete") {
        fjernInteresse();
    }
}

//Legger til en interesse
function addInteresse() {
    x = inputFelt.value;
    if ( x === "") {
        console.log("LEGG TIL INTERESSE")
    } else {
        var li = document.createElement("li");
        li.setAttribute('id', inputFelt.value);
        li.appendChild(document.createTextNode(inputFelt.value));
        liste.appendChild(li);
        lagring.unshift(x);
    }
    inputFelt.value = "";
    inputFelt.focus();
}

function fjernInteresse() {
    x = inputFelt.value;

    if ( x === "") {
        item = document.getElementById(lagring[0]);
        liste.removeChild(item)
        console.log(lagring);
        let randomShit = lagring.shift();
    }
    else {
        item = document.getElementById(inputFelt.value);
        liste.removeChild(item);
        inputFelt.value = "";
    } 
}

function gåVidere() {
    localStorage.setItem("interesser", JSON.stringify(lagring));
    localStorage.setItem("førsteGangsSjekk", 2);
    document.location.href = "../match-side/match.html"
}

function gåTilbake() {
    document.location.href = "../preferanser/preferanser.html"
}