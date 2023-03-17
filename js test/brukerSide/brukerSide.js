document.getElementById("submit").addEventListener("click", submit);

function submit() {
    let profilBilde = document.getElementById("profilBildeUpload").files[0];
    document.getElementById("profilBilde").src = URL.createObjectURL(profilBilde);
}