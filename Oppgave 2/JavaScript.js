const utskrift = document.getElementById("utskrift");
// utskrift.innerText ="test"
const språk = navigator.language
console.log("netleser: " + språk)
// const x = document
if (språk === "en-US" || språk=== "en") {
    console.log("You have an english as selected language in your browser")
} else {
    console.log("You have selected another language")
}
const plattform = navigator.platform;
console.log("Plattform: " + plattform)

const nettleser = navigator.userAgent;
console.log("nettleseren er:" + nettleser)

if (navigator.userAgent.includes("Edg")) {
    utskrift.innerText = "du bruker feil nettleser"
} else {
    
}


console.log(navigator)

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      document.getElementById("utskrift").innerText = "Geolocation is not supported by this browser.";
    }
}
  
function showPosition(position) {
    document.getElementById("utskrift").innerText = ("Latitude: " + position.coords.latitude +" Longitude: " + position.coords.longitude);
}

getLocation();
showPosition();

console.log(navigator)