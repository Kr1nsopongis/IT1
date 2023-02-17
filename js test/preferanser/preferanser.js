document.getElementById("flagg_spania").addEventListener("click", (event) => {click('spania')});
document.getElementById("flagg_australia").addEventListener("click", (event) => {click('australia')});
document.getElementById("flagg_brasil").addEventListener("click", (event) => {click('brasil')});
document.getElementById("flagg_canada").addEventListener("click", (event) => {click('canada')});
document.getElementById("flagg_sveits").addEventListener("click", (event) => {click('sveits')});
document.getElementById("flagg_tyskland").addEventListener("click", (event) => {click('tyskland')});
document.getElementById("flagg_finland").addEventListener("click", (event) => {click('finland')});
document.getElementById("flagg_frankrike").addEventListener("click", (event) => {click('frankrike')});
document.getElementById("flagg_storbritannia").addEventListener("click", (event) => {click('storbritannia')});
document.getElementById("flagg_irland").addEventListener("click", (event) => {click('irland')});
document.getElementById("flagg_india").addEventListener("click", (event) => {click('india')});
document.getElementById("flagg_meksiko").addEventListener("click", (event) => {click('meksiko')});
document.getElementById("flagg_nederland").addEventListener("click", (event) => {click('nederland')});
document.getElementById("flagg_norge").addEventListener("click", (event) => {click('norge')});
document.getElementById("flagg_russland").addEventListener("click", (event) => {click('russland')});
document.getElementById("flagg_tyrkia").addEventListener("click", (event) => {click('tyrkia')});
document.getElementById("flagg_ukraina").addEventListener("click", (event) => {click('ukraina')});
document.getElementById("flagg_usa").addEventListener("click", (event) => {click('usa')});

document.getElementById("gåVidere").addEventListener("click", gåVidere);



let valgteLand = [];

if (localStorage.getItem('førsteGangsSjekk') > 0) {
    valgteLand = JSON.parse(localStorage.getItem('land'));
}

for(let i = 0; i < valgteLand.length; i++) {
    document.getElementById("flagg_" + valgteLand[i]).classList.toggle('click');
}

function click(country) {
    document.getElementById("flagg_" + country).classList.toggle('click');

    let posisjon = valgteLand.indexOf(country);
    if (posisjon >= 0) {
        valgteLand.splice(posisjon, 1);
    }
    else {
        valgteLand.push(country);
    }
    console.log(valgteLand);
}

function gåVidere() {
    localStorage.setItem("land", JSON.stringify(valgteLand));
    document.location.href = "../brukerInteresser/intresser.html"
    localStorage.setItem("førsteGangsSjekk", localStorage.getItem('førsteGangsSjekk') + 1);
}