//Variabler til swipebevegelse
let startx = 0;
let endx = 0;
let totalx = 0;
let startdivx = 0;
let enddivx = 0;
let totaldivx = 0;
//Definerer div-element for mer tydelig kode lengre nede
const div = document.getElementById('div');

//Sjekker når mus blir trykket og logger x-kordinaten i variabelen startx
window.addEventListener('mousedown', (e) => {
    startx = e.offsetX;
});

//Sjekker når mus blir sluppet igjen og logger x-kordinaten i variabelen endx
window.addEventListener('mouseup', (e) => {
    endx = e.offsetX;

    totalx = startx - endx; //Regner ut totale lengden musen har dratt
    if (totalx > 50) { //Hvis det er over en viss mengde kjører funksjonen moveElementLeft()
        moveElementLeft()
    }
    if (totalx < -50) { //Samme for motsatt retning
        moveElementRight()
    }

    console.log(startx);
    console.log(endx);
});

//Nedover her er samme kode som over men for museinput inne i diven
div.addEventListener('mousedown', (e) => {
    startdivx = e.offsetX;
});

div.addEventListener('mouseup', (e) => {
    enddivx = e.offsetX;

    totaldivx = startdivx - enddivx;
    if (totaldivx > 20) {
        moveElementLeft()
    }
    if (totaldivx < -20) {
        moveElementRight()
    }

    console.log(startdivx);
    console.log(enddivx);
});

//Sjekker om pil til høyre eller venstre blir trykket, slik at man kan kontrollere nettsiden med tastaturknapper
document.onkeydown = function (e) {
    if (e.key == "ArrowRight") {
        moveElementRight()
    }
    if (e.key == "ArrowLeft") {
        moveElementLeft()
    }
}

//Funksjonen endrer posisjon til div, og triggerer animasjon i style.css
function moveElementLeft() {
    div.style.left = `10px`;
    div.classList.toggle('fade');
}

//Samme for motsatt retning
function moveElementRight() {
    div.style.right = `-10px`;
    div.classList.toggle('fade');
}

