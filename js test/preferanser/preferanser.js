document.getElementById("flagg_ES").addEventListener("click", (event) => {click('ES')});
document.getElementById("flagg_AU").addEventListener("click", (event) => {click('AU')});
document.getElementById("flagg_BR").addEventListener("click", (event) => {click('BR')});
document.getElementById("flagg_CA").addEventListener("click", (event) => {click('CA')});
document.getElementById("flagg_CH").addEventListener("click", (event) => {click('CH')});
document.getElementById("flagg_DE").addEventListener("click", (event) => {click('DE')});
document.getElementById("flagg_FI").addEventListener("click", (event) => {click('FI')});
document.getElementById("flagg_FR").addEventListener("click", (event) => {click('FR')});
document.getElementById("flagg_GB").addEventListener("click", (event) => {click('GB')});
document.getElementById("flagg_IE").addEventListener("click", (event) => {click('IE')});
document.getElementById("flagg_IN").addEventListener("click", (event) => {click('IN')});
document.getElementById("flagg_MX").addEventListener("click", (event) => {click('MX')});
document.getElementById("flagg_NL").addEventListener("click", (event) => {click('NL')});
document.getElementById("flagg_NO").addEventListener("click", (event) => {click('NO')});
document.getElementById("flagg_RS").addEventListener("click", (event) => {click('RS')});
document.getElementById("flagg_TR").addEventListener("click", (event) => {click('TR')});
document.getElementById("flagg_UA").addEventListener("click", (event) => {click('UA')});
document.getElementById("flagg_US").addEventListener("click", (event) => {click('US')});

document.getElementById("gåVidere").addEventListener("click", gåVidere);
document.getElementById("gåTilbake").addEventListener("click", gåTilbake);



let valgteLand = [];
let valgteKjønn = [];

if (localStorage.getItem('førsteGangsSjekk') > 0) {
    valgteLand = JSON.parse(localStorage.getItem('land'));
    valgteKjønn = JSON.parse(localStorage.getItem('kjonnPreferanse'))
}

for(let i = 0; i < valgteLand.length; i++) {
    document.getElementById("flagg_" + valgteLand[i]).classList.toggle('click');
}

for(let i = 0; i < valgteKjønn.length; i++) {
    document.getElementById("check" + valgteKjønn[i]).checked = true;
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
    //document.location.href = "../brukerInteresser/intresser.html"
    localStorage.setItem("førsteGangsSjekk", 1);
    let checkboxes = document.querySelectorAll('input[name="kjonn"]');
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked === true) {
            if (!valgteKjønn.includes(checkbox.value)) {
                valgteKjønn.push(checkbox.value);
            }
        }
        else if (valgteKjønn.includes(checkbox.value)) {
            valgteKjønn.splice(checkbox.value, 1);
        }


    });
    alert(valgteKjønn);
    
    localStorage.setItem("kjonnPreferanse", JSON.stringify(valgteKjønn));
}

function gåTilbake() {
    document.location.href = "../brukerRegistrering/index.html"
}