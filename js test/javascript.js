fetch('https://randomuser.me/api/?results=5000')
      .then(response => response.json())
      .then(response => behandleSvar(response))
      .catch(err => console.error(err));
    

function behandleSvar(svar){
    console.log(svar)
    console.log("Navn: " + svar.results[0].name.first) 
}
