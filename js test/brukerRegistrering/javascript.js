let ugyldigAlder = document.getElementById("alderNei");
let brukere = [];
let førsteRegistrering = 0;

if (localStorage.getItem("førsteRegistreringLagret") == 1) {
    let brukerData = JSON.parse(localStorage.getItem("bruker"))
    console.log(brukerData);
    let splittetNavn = brukerData[0].navn.split(" ");
    
    document.getElementById("brukernavn").value = brukerData[0].brukernavn;
    document.getElementById("passord").value = brukerData[0].passord;
    document.getElementById("email").value = brukerData[0].email;
    document.getElementById("fornavn").value = splittetNavn[0];
    document.getElementById("etternavn").value = splittetNavn[1];
    document.querySelector('input[value = ' + brukerData[0].kjonn + "]").checked = true;
}

document.getElementById("bruker").addEventListener("submit", function(evt) {
    evt.preventDefault();

    let age = document.querySelector('input[name ="alder"]:checked').value;
   
    if (age === "alderJa"){
        førsteRegistrering = 1;
        localStorage.setItem("førsteRegistreringLagret", førsteRegistrering);
        let nyPersBrukernavn = document.getElementById("brukernavn").value;
        let nyPersPassord = document.getElementById("passord").value;
        let nyPersEmail = document.getElementById("email").value;
        let nyttNavn = document.getElementById("fornavn").value + " " + document.getElementById("etternavn").value;
        let nyPersKjonn = document.querySelector('input[name ="kjonn"]:checked').value;
    

        let nyPerson = {

            brukernavn: nyPersBrukernavn,    
            passord : nyPersPassord,
            email : nyPersEmail,
            navn : nyttNavn,
            kjonn: nyPersKjonn,
            
        };
        brukere.push(nyPerson);
       
        document.getElementById("registrert").innerHTML = ("Din bruker er registrert")
        
        const nesteSide = document.createElement("button");
        nesteSide.style.width = "150px"
        nesteSide.style.alignSelf = "center"
        nesteSide.innerText = "Neste side"; 
        nesteSide.id = "nesteSide";
        
        document.body.appendChild(nesteSide);

        document.getElementById("nesteSide").addEventListener("click", function(){

            localStorage.setItem("bruker", JSON.stringify(brukere));
            document.location.href = "../preferanser/preferanser.html"
        });
    }
    else{
        alert("Du er ikke gammel nok til å bruke denne tjenesten");
        location.reload()
    }
    
    

});



console.log(brukere)

//fetch('https://randomuser.me/api/?results=' + antall + "&gender=" + kjonn + "&nat=" + nasjonalitet)
  //    .then(response => response.json())
    //  .then(response => behandleSvar(response))
      //.catch(err => console.error(err));
    



