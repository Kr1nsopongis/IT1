let alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","*"]
let ordListe = ["og","i","det","på","som","er","en","til","å","han","av","for","med","at","var","de","ikke","den","har","jeg","om","et","men","så","seg","hun","hadde","fra","vi","du","kan","da","ble","ut","skal","vil","ham","etter","over","ved","også","bare","eller","sa","nå","dette","noe","være","meg","mot","opp","der","når","inn","dem","kunne","andre","blir","alle","noen","sin","ha","år","henne","må","selv","sier","få","kom","denne","enn","to","hans","bli","ville","før","vært","skulle","går","her","slik","gikk","mer","hva","igjen","igjen","fikk","man","alt","mange","dash","ingen","dash","ingen","får","oss","under","siden","hele","dag","gang","sammen"]

let setning = "";
let nyttOrd = "";
let forskyvning = 3;
let ord = []

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

        // console.log(alfabet.indexOf(splittetSetning[i]))
        
        if (alfabet.indexOf(splittetSetning[i]) > (alfabet.length - forskyvning -1)){
            let nyBokstav  = alfabet[alfabet.indexOf(splittetSetning[i]) + forskyvning - alfabet.length]
            nyttOrd = nyttOrd +nyBokstav
        } else {
            nyBokstav = alfabet[alfabet.indexOf(splittetSetning[i]) + forskyvning] 
            nyttOrd = nyttOrd + nyBokstav 
            };
        }
      
}


function dekrypter() {
    setning = document.getElementById("dekryptering").value

    for(let i = 0; i < 27; i++){
        forskyvning = i
        kryptering()
        ord.push(nyttOrd)
        console.log(nyttOrd)
        nyttOrd = ""
    }
}

function startKryptering(){
    definere()
    kryptering()
    console.log(nyttOrd)
}

document.getElementById("knapp").addEventListener('click', dekrypter)  

