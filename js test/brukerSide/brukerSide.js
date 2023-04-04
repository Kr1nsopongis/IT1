document.getElementById("submit").addEventListener("click", submit);

function submit() {
    let profilBilde = document.getElementById("profilBildeUpload").files[0];
    document.getElementById("profilBilde").style.background = "url(" + URL.createObjectURL(profilBilde) + ")";
}