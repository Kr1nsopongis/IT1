let alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","*"];
let ordListe = ["og","i","det","på","som","er","en","til","å","han","av","for","med","at","var","de","ikke","den","har","jeg","om","et","men","så","seg","hun","hadde","fra","vi","du","kan","da","ble","ut","skal","vil","ham","etter","over","ved","også","bare","eller","sa","nå","dette","noe","være","meg","mot","opp","der","når","inn","dem","kunne","andre","blir","alle","noen","sin","ha","år","henne","må","selv","sier","få","kom","denne","enn","to","hans","bli","ville","før","vært","skulle","går","her","slik","gikk","mer","hva","igjen","igjen","fikk","man","alt","mange","dash","ingen","dash","ingen","får","oss","under","siden","hele","dag","gang","sammen"];

let setning = "";
let setningDelt = [];
let nyttOrd = "";
let forskyvning = 3;
let ord = [];
let poeng = [];
let setningPoeng = 0;
let maksVerdi = 0;
let dekrypForslag = ""

function definere(){
    setning = document.getElementById("kryptering").value;
}

function kryptering() {
    
    let splittetSetning = setning.split("");


    for(let i = 0; i < splittetSetning.length; i++ ){

        if (splittetSetning[i] == " "){
            splittetSetning[i] = "*"
            console.log(splittetSetning)
    }        
        if (alfabet.indexOf(splittetSetning[i]) > (alfabet.length - forskyvning -1)){
            var nyBokstav  = alfabet[alfabet.indexOf(splittetSetning[i]) + forskyvning - alfabet.length]
            nyttOrd += nyBokstav
        } else {
            nyBokstav = alfabet[alfabet.indexOf(splittetSetning[i]) + forskyvning] 
            nyttOrd += nyBokstav 
            };
        }
}


function dekrypter() {
    
    definere();

    for(let i = 0; i < 27; i++){
        setning = document.getElementById("dekryptering").value
        forskyvning = i
        kryptering();
        ord.push(nyttOrd);
        console.log(nyttOrd);
        nyttOrd = "";
        setning = "";
    }
    console.log(ord);
}

function brute(){

    dekrypter();

    for(let i=0;i < ord.length;i++){

        setningDelt = ord[i].split("*");

        console.log(setningDelt.length);
        
        for(let i=0;i < setningDelt.length; i++){
            if(ordListe.indexOf(setningDelt[i]) > -1){
               setningPoeng = setningPoeng + 1;
            }
            console.log(setningDelt[i])
        }
        poeng.push(setningPoeng);
        setningPoeng = 0;
        
        console.log(setningDelt);
        
    }
    console.log(poeng)

    for(i = 0;i<poeng.length;i++){
        if(poeng[i] > maksVerdi){
            maksVerdi = poeng[i]
        }
    }

    console.log(maksVerdi)
    dekrypForslag = ord[poeng.indexOf(maksVerdi)]
    console.log(dekrypForslag)
    document.getElementById("dekryptertOrd").innerHTML = (dekrypForslag)

}

function startKryptering(){
    definere();
    kryptering();
    console.log(nyttOrd);
    document.getElementById("kryptertOrd").innerHTML = (nyttOrd);
    nyttOrd = "";
}

function startDekryptering(){
    document.getElementById("dekryptertOrd").innerHTML = ""
    dekrypter();
    
    for (let i = 0; i < ord.length; i++){
        document.getElementById("dekryptertOrd").innerHTML += (i+1) + ": " + ord[i] + "<br />";
    }
}

document.getElementById("knappKryp").addEventListener('click', startKryptering);
document.getElementById("knappDe").addEventListener('click', startDekryptering);
document.getElementById("knappBrute").addEventListener('click', brute);

