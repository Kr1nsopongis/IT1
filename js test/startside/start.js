document.getElementById("nesteSide").addEventListener('click',sendVidere);
document.getElementById("logInn").addEventListener("click", sendTilLoginn)

function sendVidere() {
    document.location.href = "../brukerRegistrering/registrering.html";
}

function sendTilLoginn() {
    document.location.href = "../loginnside/logg-inn.html"
}


