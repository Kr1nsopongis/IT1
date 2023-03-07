//Variabler til swipebevegelse
let startx = 0;
let endx = 0;
let totalx = 0;
let startdivx = 0;
let enddivx = 0;
let totaldivx = 0;
let spamCheck = 0;
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
if (spamCheck == 0) { //Spamcheck er for å hindre at man kan spamme knappene og tulle med posisjonen til div-en
    spamCheck = 1;
    div.style.left = `10px`;
    div.classList.toggle('fade');
    setTimeout(() => { 
        div.style.top = '10px';
        div.style.left = '600px';
        getInfo()
    }, 300 );
    setTimeout(() => { 
        div.style.top = '200px';
        div.classList.toggle('fade');
        spamCheck = 0;
    }, 600 );
}
}

//Samme for motsatt retning
function moveElementRight() {
if (spamCheck == 0) {    
    spamCheck = 1;
    div.style.right = `-10px`;
    div.classList.toggle('fade');
    setTimeout(() => { 
        div.style.top = '10px';
        div.style.right = '600px';
        getInfo()
    }, 300 );
    setTimeout(() => { 
        div.style.top = '200px';
        div.classList.toggle('fade');
        spamCheck = 0;
    }, 600 );
}
}

//Trigger funskjonene moveElementLeft/Right
document.getElementById("moveLeft").addEventListener("click", moveElementLeft)
document.getElementById("moveRight").addEventListener("click", moveElementRight)

//Definerer et par variabler som er nødvendig til bio-genereringen
let navn = "";
let alder = 0;
let imgSrc = "";
let hei = "";


//prossesserer informasjonen fra randomUserApi
function behandleSvar(svar) {
    console.log(svar);
    
    navn = svar.results[0].name.first;
    alder = svar.results[0].dob.age;
    imgSrc = svar.results[0].picture.large;
    
    console.log(navn);
    console.log(alder);
    console.log(imgSrc);
    
    document.getElementById("navn").innerText = navn + ", " + alder;
    document.getElementById("profilbilde").src = imgSrc;
}

//Flere variabler og arrays for å lage bioer
let bio = "";
let greeting = ["Hei", "Hallo", "Vær hilset", "Yo"];
let preInterest = ["Jeg liker ", "Jeg er interresert i ", "Det jeg brenner skikkelig for er ", "Jeg bryr meg veldig om "];
let randomInterests = ["videospill", "å gå tur", "lesing", "jobb"];

let interests = randomInterests.concat(JSON.parse(localStorage.getItem('interesser')))

let intensitet = [". ", "! "];

let food = ["tomat", "potet", "ris", "grandis"];
let movie = ["Star Wars Episode I", "Cats: The Musical", "Hvalen som sa mø"];
let song = ["Dans på bordet", "Fakk min X", "Tante", "Streetsa er helt GTA"];
let artist = ["Ballinciaga", "Kevin Lauren", "Beathoven"];
let book = ["Lord of the Rings", "Game of Thrones", "Matematikk R2", "Pride and Prejudice"];

let arrayArray = [];

//Denne funksjonen bare bestemmer om en setning skal slutte med . eller !
function intens() {
    return intensitet[Math.floor(Math.random() * intensitet.length)];
};

//Denne funksjonen bestemmer hvilke interesser som dukker opp i profilene til folk
function arrArr() {
    let otherFunFact = [
        "Favorittmaten min er " + food[Math.floor(Math.random() * food.length)],
        "Den beste filmen noensinne er " + movie[Math.floor(Math.random() * movie.length)],
        song[Math.floor(Math.random() * song.length)] + " er en ekte banger",
        "Jeg kjenner meg mye igjen med sangene til " + artist[Math.floor(Math.random() * artist.length)],
        "Ikke match hvis du ikke har lest " + book[Math.floor(Math.random() * book.length)]
    ];
    arrayArray = [preInterest[Math.floor(Math.random() * preInterest.length)] + interests[Math.floor(Math.random() * interests.length)], otherFunFact[Math.floor(Math.random() * otherFunFact.length)]]
    return arrayArray[Math.floor(Math.random() * arrayArray.length)]
}

bio = hei + intens() + arrArr() + intens() + arrArr() + intens();

console.log(bio);

let URL = "https://randomuser.me/api/?";

function lageURL() {
    let URL = "https://randomuser.me/api/?";
    let nasjonaliteter = JSON.parse(localStorage.getItem('land'));
    console.log(nasjonaliteter);
    if (nasjonaliteter.length > 0) {
        URL = URL + "&nat="
    }
    for (let i = 0; i < nasjonaliteter.length; i++) {
        URL = URL + nasjonaliteter[i] + ",";
    }

    let kjønn = JSON.parse(localStorage.getItem('kjonnPreferanse'));
    console.log(kjønn);
    if (kjønn.length > 0) {
        URL = URL + "&gender="
    }
    for (let i = 0; i < kjønn.length; i++) {
        URL = URL + kjønn[i] + ","
    }
}

//Denne funksjonen henter all informasjon vi trenger og putter det rett sted. Den starter også randomUserApi funksjonen
function getInfo() {
    fetch('https://randomuser.me/api/?nat=AU&gender=female')
        .then(response => response.json())
        .then(response => behandleSvar(response))
        .catch(err => console.error(err));
    
    
    hei = greeting[Math.floor(Math.random() * greeting.length)];
    bio = hei + intens() + arrArr() + intens() + arrArr() + intens();
    document.getElementById("bio").innerText = bio;
}

getInfo()
