let x = "";
let item = "";
let inputFelt = document.getElementById("inputInteresse");
let liste = document.getElementById("interesser");
let lagring = [];

document.getElementById("leggTil").addEventListener("click", addInteresse)

document.getElementById("fjern").addEventListener("click", fjernInteresse)

//Sjekker etter tastaturtrykk
document.onkeydown = function (e) {
    if (e.key == "Enter") {
        addInteresse()
    }
    if (e.key == "Delete") {
        fjernInteresse()
    }
}

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