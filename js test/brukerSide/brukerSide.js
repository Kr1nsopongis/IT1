document.getElementById("submit").addEventListener("click", submit);

function submit() {
    let profilBilde = document.getElementById("profilBildeUpload").files[0];
    document.getElementById("profilBilde").style.background = "url(" + URL.createObjectURL(profilBilde) + ")";
}

let brukerData = JSON.parse(localStorage.getItem("bruker"))
console.log(brukerData);
let splittetNavn = brukerData[0].navn.split(" ");

document.getElementById("brukernavn").value = brukerData[0].brukernavn;
document.getElementById("passord").value = brukerData[0].passord;
document.getElementById("email").value = brukerData[0].email;
document.getElementById("fornavn").value = splittetNavn[0];
document.getElementById("etternavn").value = splittetNavn[1];
document.querySelector('input[value = ' + brukerData[0].kjonn + "]").checked = true;

console.log(splittetNavn)