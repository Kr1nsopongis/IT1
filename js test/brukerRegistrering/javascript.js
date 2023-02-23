let ugyldigAlder = document.getElementById("alderNei");
let brukere = [];


document.getElementById("bruker").addEventListener("submit", function(evt) {
    evt.preventDefault();

    let age = document.querySelector('input[name ="alder"]:checked').value;
   
    if (age === "alderJa"){
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

fetchfetch('https://randomuser.me/api/?results=' + antall + "&gender=" + kjonn + "&nat=" + nasjonalitet)
      .then(response => response.json())
      .then(response => behandleSvar(response))
      .catch(err => console.error(err));
    



