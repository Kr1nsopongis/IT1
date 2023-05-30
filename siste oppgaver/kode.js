alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","æ","ø","å","*"]

let setning = "hei jeg heter"
let nyttOrd = ""
let forskyvning = 2

function kryptering() {
    splittetSetning = setning.split("");

    for(let i = 0; i < splittetSetning.length; i++ ){
        if (splittetSetning[i] == " "){
            splittetSetning[i] = "*"
            console.log(splittetSetning)
        }
            
        
        if (alfabet.indexOf(splittetSetning[i] < (alfabet.length - forskyvning))){
            nyBokstav
        }
            
        ;
        let nyBokstav = alfabet[alfabet.indexOf(splittetSetning[i + forskyvning])] 
        nyttOrd = nyttOrd + nyBokstav
        }
    
    console.log(nyttOrd)
}

document.getElementById("knapp").addEventListener('click',kryptering)