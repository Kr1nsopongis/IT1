let bio = "";
let greeting = ["Hei", "Hallo", "Vær hilset", "Yo"];
let preName = ["Jeg heter ", "Jeg er ", "Navnet mitt er "];
let navn = ["Lars", "Pål"];
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
    song[Math.floor(Math.random() * song.length)] + " er en ekte banger.",
    "Jeg kjenner meg mye igjen med sangene til " + artist[Math.floor(Math.random() * artist.length)],
    "Ikke match hvis du ikke har lest " + book[Math.floor(Math.random() * book.length)]
];

let arrayArray = [];

let hei = greeting[Math.floor(Math.random() * greeting.length)];
let introduksjon = preName[Math.floor(Math.random() * preName.length)];
let navnet = navn[Math.floor(Math.random() * navn.length)];

function intens() {
    return intensitet[Math.floor(Math.random() * intensitet.length)];
};

function arrArr() {
    arrayArray = [preInterest[Math.floor(Math.random() * preInterest.length)] + interests[Math.floor(Math.random() * interests.length)], otherFunFact[Math.floor(Math.random() * otherFunFact.length)]]
    return arrayArray[Math.floor(Math.random() * arrayArray.length)]
}

bio = hei + intens() + introduksjon + navnet + intens() + arrArr() + intens() + arrArr() + intens();

console.log(otherFunFact);

console.log(bio);