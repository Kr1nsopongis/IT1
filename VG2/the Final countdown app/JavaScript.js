let nedteling = setInterval(tikker, 1000);


let antallSekunder = prompt("Hvor mange sekunder skal den telle ned?????!!!");

let ferdigbæsje = ("Ferdig bæsje!!")

let musikkFerdig = new Audio("goldn-116392.mp3")

let bakgrunnsmusikk = new Audio("happy-summer-116584.mp3")



function tikker() {
    antallSekunder = antallSekunder - 1;
    console.log(antallSekunder);
    document.getElementById("utskrift").innerText= antallSekunder + 1;
   
    if (antallSekunder <3){
        document.getElementById("utskrift").style.color = "red";
    }
    if (antallSekunder <0){
        document.getElementById("utskrift").style.color = "green";
        document.getElementById("utskrift").innerText = ferdigbæsje
        musikkFerdig.play();
        bakgrunnsmusikk.pause();



        clearInterval(nedteling);
    }

}
// document.body.addEventListener("click",spillbakgrunnsmusikk);

// function spillbakgrunnsmusikk(){
//     bakgrunnsmusikk.play();
    
// }

document.body.addEventListener("click", function(){
    bakgrunnsmusikk.play();
})
