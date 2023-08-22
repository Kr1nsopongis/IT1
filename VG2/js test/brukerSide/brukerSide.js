const width = 100;
const height = 100; //Setter størrelsen på bildet som blir tegnet på canvaset
// koden som går på å ta eget profilbilde er hentet fra https://developer.mozilla.org/en-US/docs/Web/API/Media_Capture_and_Streams_API/Taking_still_photos. 
//
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

      //har ikke fått til å gjøre noe med dette da jeg innså at base64 var for komplisert for dette prosjektet
      //https://stackoverflow.com/questions/19183180/how-to-save-an-image-to-localstorage-and-display-it-on-the-next-page
      imgData = getBase64Image(canvas)
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

function tilPreferanser(){
  document.location.href = "../preferanser/preferanser.html"
}

function tilInteresser(){
  document.location.href = "../brukerInteresser/intresser.html"
}

function tilSwipe(){
  document.location.href = "../match-side/match.html"
}


document.getElementById("tilMatch").addEventListener('click', tilSwipe)
document.getElementById("tilPreferanser").addEventListener('click', tilPreferanser)
document.getElementById("logo").addEventListener('click', tilbakeTilStart)
document.getElementById("tilInteresser").addEventListener('click', tilInteresser)

