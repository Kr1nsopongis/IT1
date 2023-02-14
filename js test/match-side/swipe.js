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
        getInfo()
    }
    if (totalx < -50) { //Samme for motsatt retning
        moveElementRight()
        getInfo()
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
        getInfo()
    }
    if (totaldivx < -20) {
        moveElementRight()
        getInfo()
    }

    console.log(startdivx);
    console.log(enddivx);
});

//Sjekker om pil til høyre eller venstre blir trykket, slik at man kan kontrollere nettsiden med tastaturknapper
document.onkeydown = function (e) {
    if (e.key == "ArrowRight") {
        moveElementRight()
        getInfo()
    }
    if (e.key == "ArrowLeft") {
        moveElementLeft()
        getInfo()
    }
}

//Funksjonen endrer posisjon til div, og triggerer animasjon i style.css
function moveElementLeft() {
    div.style.left = `10px`;
    div.classList.toggle('fade');
    setTimeout(() => { 
        div.style.top = '10px';
        div.style.left = '600px';
    }, 300 );
    setTimeout(() => { 
        div.style.top = '200px';
        div.classList.toggle('fade');
    }, 600 );
}

//Samme for motsatt retning
function moveElementRight() {
    div.style.right = `-10px`;
    div.classList.toggle('fade');
    setTimeout(() => { 
        div.style.top = '10px';
        div.style.right = '600px';
    }, 300 );
    setTimeout(() => { 
        div.style.top = '200px';
        div.classList.toggle('fade');
    }, 600 );
}

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
let interests = ["videospill", "å gå tur", "lesing", "jobb"];

let intensitet = [". ", "! "];

let food = ["tomat", "potet", "ris", "grandis"];
let movie = ["Star Wars Episode I", "Cats: The Musical", "Hvalen som sa mø"];
let song = ["Dans på bordet", "Fakk min X", "Tante", "Streetsa er helt GTA"];
let artist = ["Ballinciaga", "Kevin Lauren", "Beathoven"];
let book = ["Lord of the Rings", "Game of Thrones", "Matematikk R2", "Pride and Prejudice"];

let otherFunFact = [
    "Favorittmaten min er " + food[Math.floor(Math.random() * food.length)],
    "Den beste filmen noensinne er " + movie[Math.floor(Math.random() * movie.length)],
    song[Math.floor(Math.random() * song.length)] + " er en ekte banger",
    "Jeg kjenner meg mye igjen med sangene til " + artist[Math.floor(Math.random() * artist.length)],
    "Ikke match hvis du ikke har lest " + book[Math.floor(Math.random() * book.length)]
];

let arrayArray = [];

//Denne funksjonen bare bestemmer om en setning skal slutte med . eller !
function intens() {
    return intensitet[Math.floor(Math.random() * intensitet.length)];
};

//Denne funksjonen bestemmer hvilke interesser som dukker opp i profilene til folk
function arrArr() {
    arrayArray = [preInterest[Math.floor(Math.random() * preInterest.length)] + interests[Math.floor(Math.random() * interests.length)], otherFunFact[Math.floor(Math.random() * otherFunFact.length)]]
    return arrayArray[Math.floor(Math.random() * arrayArray.length)]
}

bio = hei + intens() + arrArr() + intens() + arrArr() + intens();

console.log(bio);

//Denne funksjonen henter all informasjon vi trenger og putter det rett sted. Den starter også randomUserApi funksjonen
function getInfo() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(response => behandleSvar(response))
        .catch(err => console.error(err));
    
    
    hei = greeting[Math.floor(Math.random() * greeting.length)];
    bio = hei + intens() + arrArr() + intens() + arrArr() + intens();
    document.getElementById("bio").innerText = bio;
}

getInfo()