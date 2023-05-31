alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","*"]

let setning = "jeg heter dette"
let nyttOrd = ""
let forskyvning = 3



function kryptering() {

    splittetSetning = setning.split("");

  

    for(let i = 0; i < splittetSetning.length; i++ ){

        if (splittetSetning[i] == " "){
            splittetSetning[i] = "*"
            console.log(splittetSetning)
        }
        
        console.log(alfabet.indexOf(splittetSetning[i]))
        
        if (alfabet.indexOf(splittetSetning[i]) > (alfabet.length - forskyvning)){
            let nyBokstav = alfabet[alfabet.indexOf(splittetSetning[i])+forskyvning - alfabet.length]
            nyttOrd = nyttOrd +nyBokstav
            console.log(nyBokstav)
        } else {
            nyBokstav = alfabet[alfabet.indexOf(splittetSetning[i]) + forskyvning] 
            nyttOrd = nyttOrd + nyBokstav
            };
        }
        
        
       
    
    console.log(nyttOrd)

    
}

document.getElementById("knapp").addEventListener('click',kryptering)