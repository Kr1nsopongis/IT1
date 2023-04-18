// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "datingside-98657.firebaseapp.com",
  projectId: "datingside-98657",
  storageBucket: "datingside-98657.appspot.com",
  messagingSenderId: "323999360874",
  appId: "1:323999360874:web:fc7215729fdc361a98e713"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



document.getElementById("registrer").addEventListener("click", trykketPåKnappenIG)
async function trykketPåKnappenIG() {
    let email = document.getElementById("email").value;
let password = document.getElementById("passord").value;
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
 });
try {
const docRef = await setDoc(doc(db, "brukere", email), {
email: email,
password: "morenDindidn",
country: "USA"
});
console.log("Document written with ID: ", docRef.id);
}   catch (e) {
console.error("Error adding document: ", e);
}

}