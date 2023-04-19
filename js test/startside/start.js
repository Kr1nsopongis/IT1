document.getElementById("nesteSide").addEventListener('click',sendVidere);
document.getElementById("logInn").addEventListener("click", sendTilLoginn)
document.getElementById("sand").addEventListener("click", sand)

function sendVidere() {
    document.location.href = "../brukerRegistrering/registrering.html";
}

function sendTilLoginn() {
    document.location.href = "../loginnside/logg-inn.html"
}

function sand() {
    document.location.href = "https://www.youtube.com/watch?v=2tLf1JO5bvE"
}
