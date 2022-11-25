const terninger = document.getElementById("terninger")
const terning1 ="C:\Users\Marius\Desktop\Koooooode\IT1\terning\Bilder\terning1.png"
const terning2 = "C:\Users\Marius\Desktop\Koooooode\IT1\terning\Bilder\terning2.png"
const terning3 = "C:\Users\Marius\Desktop\Koooooode\IT1\terning\Bilder\terning3.png"
const terning4 = "C:\Users\Marius\Desktop\Koooooode\IT1\terning\Bilder\terning4.png"
const terning5 = "C:\Users\Marius\Desktop\Koooooode\IT1\terning\Bilder\terning5.png"
const terning6 = "C:\Users\Marius\Desktop\Koooooode\IT1\terning\Bilder\terning6.png"

 let terning1Holdt = false
 let terning2Holdt = false
 let terning3Holdt = false

 let terning1verdi = 0
 let terning2verdi = 0
 let terning3verdi = 0

function terningkast(){
    return Math.floor(Math.random() * 6+1)
}

førsteTerning.addEventListener('click', event=> {
    terning1Holdt = true
})

function trill1(){
    if(terning1Holdt == false){
       terning1verdi = terningkast()
    //    terninger.innerHTML += terning1verdi + ", "
       document.getElementById("førsteTerning").src = "Bilder/terning"+String(terning1verdi)+".png"
        
    }
} 
function trill2(){
    if(terning2Holdt == false){
       terning2verdi = terningkast()
    //    terninger.innerHTML += terning2verdi+", "
    document.getElementById("andreTerning").src = "Bilder/terning"+String(terning2verdi)+".png"
    }
} 
function trill3(){
    if(terning3Holdt == false){
       terning3verdi = terningkast()
    //    terninger.innerHTML += terning3verdi
    document.getElementById("tredjeTerning").src = "Bilder/terning"+String(terning3verdi)+".png"
    }
} 
knapp.addEventListener('click', event => {
    // terninger.innerHTML = ""
    trill1();
    trill2();
    trill3();
  });
console.log(terningkast())
