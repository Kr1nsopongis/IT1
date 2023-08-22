let pris = 300

function skrivut(){
    document.getElementById("Overskrift").innerText = "Kjøp nå ! bare " + pris + " kroner";
    document.getElementById("linje1").innerText = "Har du hørt om produktet vårt? Prisen er nå bare " + pris + " kroner !";
    document.getElementById("linje2").innerText = "Om du er på utkikk etter et godt produkt så koster vårt bare " + pris + " kroooooner !";
    document.getElementById("linje3").innerText = pris + "? " + pris + "?!  Du tror kanskje vi kødder når vi sier " + pris + " kroner, men neida!"
    document.getElementById("linje4").innerText = "NB: Prisen på forsendelse er 300 USD, sendt direkte fra vårt kontor på Øvre kråkenes 300." 
    // Setter ikke inn variabelen her siden prisen på varen er ikke med i denne strengen
}
    
console.log(skrivut())

// For å endre på prisen enkelt er dte bare å endre verdien til variabelen pris. Da vil det oppdatere seg på nettsiden. 