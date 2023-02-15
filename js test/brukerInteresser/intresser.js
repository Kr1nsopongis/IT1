document.getElementById("leggTil").addEventListener("click", (evt) => {

    if (document.getElementById("interesser").value = "") {
        console.log("LEGG TIL INTERESSE")
    } else {
        var a = document.getElementById("interesser");
        var candidate = document.getElementById("input");
        var li = document.createElement("li");
        li.setAttribute('id', candidate.value);
        li.appendChild(document.createTextNode(candidate.value));
        a.appendChild(li);
    }
    
    
})

document.getElementById("fjern").addEventListener("click", (evt) =>{
    var a = document.getElementById("interesser");
    var candidate = document.getElementById("input");
    var item = document.getElementById(candidate.value);
    a.removeChild(item);
})

