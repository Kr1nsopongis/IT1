let terning = 0
let antallKast = 0

while (terning != 6){
    terning = Math.floor(Math.random() * 6) + 1;
    antallKast = antallKast + 1
    console.log(terning);
}

if (antallKast > 4){
    document.getElementById("Resultat").innerText = "Du brukte " + antallKast + " kast, Uflaks !"
}
if (antallKast === 3 || antallKast === 4){
    document.getElementById("Resultat").innerText = "Du brukte " + antallKast + " kast. Tja, som forventet"
}
if (antallKast < 3){
    document.getElementById("Resultat").innerText = "Du brukte " + antallKast + " kast. Flaks, Lotto neste!"
}

