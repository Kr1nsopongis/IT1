const tallSolvik = Array.from({length: 1440}, () => Math.floor(Math.random() * 151));
const tallDanplass = Array.from({length: 1440}, () => Math.floor(Math.random() * 151));


function nytall(tallDanplass){
    for( var i = 0; i < tallDanplass.length; i++){ //herfra og ned til etter for-løkkene er det mye rusk. Frykter jeg bare har fått til deler av denne deloppgaven) utenom dette skal hele koden funek
    
        if ( tallDanplass[i] > 140) { 
    
            tallDanplass.splice(i, 1); 
        }

    } 
    return [i]                                       
}

nytall(tallSolvik);
nytall(tallDanplass);


for( var i = 0; i < tallDanplass.length; i++){ //Fjerner alle verdier over 140
    
    if ( tallDanplass[i] > 140) { 

        tallDanplass.splice(i, 1); 
    }

}
for( var i = 0; i < tallSolvik.length; i++){ //Fjerner alle verdier over 140
    
    if ( tallSolvik[i] > 140) { 

        tallSolvik.splice(i, 1); 
    }

}


let gjennomsnittSolvik = summer(tallSolvik) / tallSolvik.length;
let gjennomsnittDanplass = summer(tallDanplass) /tallDanplass.length;
let maxSolvik = Math.max(...tallSolvik)//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max. !!!! Skjønner ike hvrodan de
let minSolvik = Math.min(...tallSolvik)
let maxDanplass = Math.max(...tallDanplass)
let minDanplass = Math.min(...tallDanplass)

function summer(tallArray) {
    let sum = 0;
    for (let i = 0; i < tallArray.length; i++) { //hentet fra læreboken
      sum += tallArray[i];
    }
  
    return sum;
}


console.log(tallSolvik)
console.log(tallDanplass)
console.log(maxSolvik)
console.log(maxDanplass)

console.log(summer(tallSolvik))
console.log(gjennomsnittSolvik)

document.getElementById("gsSol").innerText = "Gjennomsnittet av alle målingene er " + gjennomsnittSolvik + " partikler i luften"
document.getElementById("gsDan").innerText = "Gjennomsnittet av alle målingene er " + gjennomsnittDanplass + " partikler i luften"

if (gjennomsnittSolvik > gjennomsnittDanplass) {
    document.getElementById("max").innerText = "Det er høyest konsentrasjon av Svevestøv i Solheimsviken"
} else {
    document.getElementById("max").innerText = "Det er høyest konsentrasjon av Svevestøv på Danmarksplass"
}

if (maxSolvik > maxDanplass) {
    document.getElementById("maxVerdi").innerText = "Den høyeste verdien finner vi i Solheimsviken med " + maxSolvik + " partikler"
} else {
    document.getElementById("maxVerdi").innerText = "Den høyeste verdien finner vi på Danmarksplass " + maxDanplass + " partikler"
}

if (maxSolvik === maxDanplass) {
    document.getElementById("maxVerdi").innerText = "Solheimviken og Danmarksplass hadde samme høyeste verdi som var " + maxSolvik + " partikler" //Spiller ingen rolle hvilken av maxverdiene jeg velger siden de er like
}

if (minSolvik > minDanplass) {
    document.getElementById("minVerdi").innerText = "Den laveste verdien finner vi i Solheimsviken med " + minSolvik + " partikler"
} else {
    document.getElementById("minVerdi").innerText = "Den laveste verdien finner vi på Danmarksplass " + minDanplass + " partikler"
}

if (minSolvik === minDanplass) {
    document.getElementById("minVerdi").innerText = "Solheimviken og Danmarksplass hadde samme laveste verdi som var " + minSolvik + " partikler" //Spiller ingen rolle hvilken av maxverdiene jeg velger siden de er like
}

  //Hentet koden for random verdier i en array her: https://stackoverflow.com/questions/5836833/create-an-array-with-random-values
