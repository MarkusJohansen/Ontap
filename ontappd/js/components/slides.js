// //--------------------------------------------------
// //Picture slideshow
// //--------------------------------------------------

// let i = 0;
// let bilder = [];
// let imagetext = [];
// let time = 3000; // 3000ms = 3 sekunder

// // Bildeliste
// bilder[0] = '../image/slideshow/rodvin.jpg';
// bilder[1] = '../image/slideshow/ol.jpg';
// bilder[2] = '../image/slideshow/kasseol.jpg';
// bilder[3] = '../image/slideshow/maltpose.jpg';
// bilder[4] = '../image/slideshow/korkemaskin.jpg';
// bilder[5] = '../image/slideshow/kjolingssystem.jpg';
// bilder[6] = '../image/slideshow/bryggemaskin.jpg';

// console.log(bilder)
            
// // Bildetekstliste
// imagetext[0] = "Gjæringskar med rødvin";
// imagetext[1] = "Gjæringskar med øl";
// imagetext[2] = "Kasser med øl til interessegrupperulette i 2019";
// imagetext[3] = "Pose med malt";
// imagetext[4] = "Korkemaskin";
// imagetext[5] = "Vannkjølingssystem til brygging";
// imagetext[6] = "Ølbryggemaskin med sil";



// //Bytte bilde og bildetekst i samme funksjon
// function change(){
//     document.getElementById("slideshow").src = bilder[i];
//     document.getElementById("slideshow").src = bilder[i];
//     document.getElementById("textimage").innerHTML = imagetext[i]
//     if (i < bilder.length - 1){ //indeksen øker så lenge den ikke går lenger enn indeksen til antall bilder
//         i++;  
//     }else{
//         i = 0; // når den øker til mer enn indeksen så går den tilbake til null
//     }
//     setTimeout('change()', time); //kjører funksjonen hvert tredje sekund
// }



// window.onload = change; //kjører funksjonen med enganng siden er lastet inn


// Alt over er det gamle slideshowet prøver desperat og fikse en annen under

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  
  slides[slideIndex-1].style.display = "block"; 
}