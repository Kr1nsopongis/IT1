

document.getElementById("regnUt").addEventListener('click', kalkulerSvar);
document.getElementById("restart").addEventListener('click', resetKalkulator);

function kalkulerSvar(){
    let a = document.getElementById("a").value; 
    let b = document.getElementById("b").value;
    let h = document.getElementById("h").value;
    let to = 2

    let arealTrapes = ((parseFloat(a)+parseFloat(b)) * parseFloat(h) / to)

    document.getElementById("areal").innerText = "Arealet er: " + arealTrapes + " cm^2";
    console.log(parseFloat(a)+parseFloat(b));
}
function resetKalkulator(){
    document.getElementById("a").value = ""
    document.getElementById("b").value = ""
    document.getElementById("h").value = ""
    document.getElementById("areal").innerText = "Arealet er: "
}
