const width = 100;
const height = 100;

let streaming = false;
let canvas = null;
let bilde = null;
let startKnapp = null;
let buttonClicked = false;

    video = document.getElementById("video");
    canvas = document.getElementById("canvas");
    bilde = document.getElementById("bilde");
    startKnapp = document.getElementById("startKnapp");

navigator.mediaDevices 
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });

    video.addEventListener(
      "canplay",
      (ev) => {
        if (!streaming) {
        //   height = video.videoHeight / (video.videoWidth / width);

          if (isNaN(height)) {
            height = width / (4 / 3);
          }

          video.setAttribute("width", width);
          video.setAttribute("height", height);
          
          streaming = true;
        }
      },
      false
    );
    
    startKnapp.addEventListener(
      "click",
      (ev) => {
        buttonClicked = true;
        takepicture();
        ev.preventDefault();
      },
      false
    );

    function takepicture() {
        if (buttonClicked){
            const context = canvas.getContext("2d");
        if (width && height) {
          canvas.width = width;
          canvas.height = height;
          context.drawImage(video, 0, 0, width, height);
    
          const data = canvas.toDataURL("image/png");
        //   bilde.setAttribute("src", data);
        } else {
          clearphoto();
        }
        }
    }    

    function clearphoto() {
        const context = canvas.getContext("2d");
        context.fillStyle = "#AAA";
        context.fillRect(0, 0, canvas.width, canvas.height);
    
        const data = canvas.toDataURL("image/png");
        bilde.setAttribute("src", data);
      }

      imgData = getBase64Image(canvas);
      localStorage.setItem("imgData", imgData);

      function getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
    
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
    
        var dataURL = canvas.toDataURL("image/png");
    
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }

    document.getElementById("profilBilde")

let brukerData = JSON.parse(localStorage.getItem("bruker"))
console.log(brukerData);
let splittetNavn = brukerData[0].navn.split(" ");

// document.getElementById("brukernavn").value = brukerData[0].brukernavn;
// document.getElementById("email").value = brukerData[0].email;
// document.getElementById("fornavn").value = splittetNavn[0];
// document.getElementById("etternavn").value = splittetNavn[1];
// document.querySelector('input[value = ' + brukerData[0].kjonn + "]").checked = true;

console.log(splittetNavn)

function tilbakeTilStart(){
    document.location.href = "../startSide/index.html"
}

document.getElementById("logo").addEventListener('click', tilbakeTilStart)
