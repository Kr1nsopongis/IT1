let land = ["Norge", "Japan", "USA", "Italia", "Canada", "Russland", "Sør-Korea", "Kina"];
let sted = ["Lillehammer", "Nagano", "Salt Lake city", "Torino", "Vacouver", "Sotsji", "Pyeongchang", "Beijing"];
let aarstall = [1994, 1998, 2002, 2006, 2010, 2014, 2018, 2022];
let randomAArstall = 0;

document.getElementById("nesteSporsmaal").addEventListener('click', nextSporsmaal);
document.getElementById("sjekkSvar").addEventListener('click', checkSvar);

function konsoll(){
    console.log(land)
    console.log(sted)
    console.log(aarstall)
}

konsoll()
    
function whichPlace(year){
    let rightPlace = aarstall.indexOf(year)
    console.log("Ol i " + year + " Ble arrangert i " + sted[rightPlace])
}

function whichYear(place){
    let rightYear = sted.indexOf(place)
    console.log("Vinter ol i/på " + place + " ble arrangert i " + aarstall[rightYear])
}

function randomYear(){
    randomAArstall = aarstall[Math.floor(Math.random() * 8)]
}

function nextSporsmaal(){
    document.getElementById("rettEllerGalt").innerText = `Her kommer resultatet`;
    document.getElementById("skrivefelt").value = ""
    document.body.style.backgroundImage = "url('Bilder/hovedbakgrunn.jpg')";
    randomYear();
    document.getElementById("sporsmaal").innerHTML = `Hvor ble vinter ol arrangert i ${randomAArstall} ????`;
}

function checkSvar(){
    let aar = aarstall.indexOf(randomAArstall);
    let plass = land[aar]
    let svar = document.getElementById("skrivefelt").value
    console.log(svar)
    console.log(plass)

    if (plass == svar) {
        document.body.style.backgroundImage = "url('Bilder/Olgrønn.JPG')"; 
        document.getElementById("rettEllerGalt").innerText = `Du svarte Riktig!`;
        document.getElementById("quiz").style.border = "green"
    } else {
        document.body.style.backgroundImage = "url('Bilder/Olrød.JPG')";
        document.getElementById("rettEllerGalt").innerHTML = "Du svarte Feil :(";
    }
   

}


// 'whichPlace(1994);
// whichYear("Lillehammer");'




// document.getElementById("sporsmaal").innerHTML = `Hvor ble vinter ol arrangert i ${randomAArstall} ????`;
